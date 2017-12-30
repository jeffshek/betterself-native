import Expo from "expo";
import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { List, ListItem, Text } from "react-native-elements";

import colors from "HSColors";
import { LogSupplementLogView } from "./log_supplement_log";
import { getSupplements, getSupplementStacks } from "../../services/api/api";
import {
  INDIVIDUAL_VITAMIN,
  STACKS_IMAGE
} from "../../../assets/icons/constants";
import { LogSupplementStackView } from "./log_supplement_stack";
import { CreateSupplementView } from "./create_supplement";
import { CreateSupplementStackView } from "./create_supplement_stack";
import { AddNewPill } from "./constants";

export class SupplementsAndStacksSelectionView extends Component {
  static viewName = "SupplementsAndStacksSelectionView";

  constructor() {
    super();

    this.state = {
      supplements: [],
      supplementStacks: []
    };
  }

  componentDidMount() {
    getSupplements().then(results => {
      this.setState({
        supplements: results
      });
    });
    getSupplementStacks().then(results => {
      this.setState({
        supplementStacks: results
      });
    });
  }

  renderSupplementStacks() {
    if (!this.state.supplementStacks) {
      return <View />;
    }

    const { navigation } = this.props;
    const routeName = LogSupplementStackView.viewName;
    const addSupplementStackRoute = CreateSupplementStackView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <Text style={styles.headerText}>Supplement Stacks</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(addSupplementStackRoute)}
          >
            <AddNewPill />
          </TouchableOpacity>
        </View>
        <List style={styles.labelFontStyle}>
          {this.state.supplementStacks.map((l, i) => (
            <ListItem
              key={i}
              avatar={STACKS_IMAGE}
              avatarStyle={styles.avatarStyle}
              title={l.name}
              subtitle={l.description}
              onPress={() => navigation.navigate(routeName, l)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

  renderSupplements() {
    if (!this.state.supplements) {
      return <View />;
    }

    const { navigation } = this.props;
    const routeName = LogSupplementLogView.viewName;
    const addSupplementRoute = CreateSupplementView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <Text style={styles.heading}>Supplements & Medication</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(addSupplementRoute)}
          >
            <AddNewPill />
          </TouchableOpacity>
        </View>
        <List>
          {this.state.supplements.map((l, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={styles.avatarStyle}
              onPress={() => navigation.navigate(routeName, l)}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSupplementStacks()}
        {this.renderSupplements()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatarStyle: {
    backgroundColor: "white"
  },
  container: {
    flex: 1
  },
  headerContainer: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    color: "white",
    marginTop: 0,
    fontSize: 20
  },
  heading: {
    color: "white",
    marginTop: 0,
    fontSize: 20
  },
  labelFontStyle: {
    fontSize: 40
  }
});

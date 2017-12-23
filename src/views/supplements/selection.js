import Expo from "expo";
import React, { Component } from "react";
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Text, List, ListItem } from "react-native-elements";

import colors from "HSColors";
import { AddSupplementLogView } from "./add_supplement_log";
import { getSupplements, getSupplementStacks } from "../../services/api/api";
import {
  ADD_NEW_PILL_IMAGE,
  ADD_NEW_SUPPLEMENT_STACK,
  DRUGS_IMAGE,
  INDIVIDUAL_VITAMIN,
  MEDICINE_IMAGE,
  STACKS_IMAGE,
  VITAMINS_IMAGE
} from "../../../assets/icons/constants";
import { AddSupplementStackView } from "./add_supplement_stack";
import { CreateSupplementView } from "./create_supplement";

const log = value => {
  console.log("In Debugger Logging");
  console.log(value);
};

export class SupplementSelectionView extends Component {
  static viewName = "SupplementSelectionView";

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
      // if the stack doesn't have any compositions, it's not a valid one yet
      const validStacks = results.filter(item => {
        return item.compositions.length > 0;
      });

      this.setState({
        supplementStacks: validStacks
      });
    });
  }

  renderSupplementStacks() {
    if (!this.state.supplementStacks) {
      return <View />;
    }

    const { navigation } = this.props;
    const routeName = AddSupplementStackView.viewName;
    const addSupplementStackRoute = CreateSupplementView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <Text style={styles.headerText}>Supplement Stacks</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(addSupplementStackRoute)}
          >
            <Image
              source={ADD_NEW_PILL_IMAGE}
              resizeMode="cover"
              style={styles.createNewSupplement}
            />
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
          <ListItem
            avatar={MEDICINE_IMAGE}
            title={"Create Stack Type"}
            avatarStyle={styles.avatarStyle}
          />
        </List>
      </ScrollView>
    );
  }

  renderSupplements() {
    if (!this.state.supplements) {
      return <View />;
    }

    const { navigation } = this.props;
    const routeName = AddSupplementLogView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <Text style={styles.heading}>Supplements & Medication</Text>
          <Image
            source={ADD_NEW_PILL_IMAGE}
            resizeMode="cover"
            style={styles.createNewSupplement}
          />
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
          <ListItem
            avatar={DRUGS_IMAGE}
            title={"Create Supplement Type"}
            avatarStyle={styles.avatarStyle}
          />
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
  createNewSupplement: {
    height: 32,
    width: 32,
    alignSelf: "flex-end"
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

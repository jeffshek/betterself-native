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
import {
  AddNewPill,
  AddSupplementListItem,
  addSupplementStyles,
  ListItemStyles
} from "./constants";
import { HeaderText } from "../../config/fontsAndSizes";
import {
  CreateSupplementCompositionView
} from "./create_supplement_composition";

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

  renderSupplementStacksHeader() {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <HeaderText label={"Supplement Stacks"} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(CreateSupplementStackView.viewName)}
          >
            <AddNewPill />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  renderSupplementStacks() {
    const { navigation } = this.props;

    if (!this.state.supplementStacks.length) {
      return (
        <List>
          <AddSupplementListItem
            title={"Add A Stack"}
            onPress={() =>
              navigation.navigate(CreateSupplementStackView.viewName)}
          />
        </List>
      );
    }

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text />
          <HeaderText label={"Supplement Stacks"} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(CreateSupplementStackView.viewName)}
          >
            <AddNewPill />
          </TouchableOpacity>
        </View>
        <List>
          {this.state.supplementStacks.map((stack, i) => (
            <ListItem
              key={stack}
              avatar={STACKS_IMAGE}
              avatarStyle={ListItemStyles.avatarStyle}
              title={stack.name}
              subtitle={stack.description}
              onPress={() =>
                navigation.navigate(LogSupplementStackView.viewName, stack)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

  renderSupplementsHeader() {
    const { navigation } = this.props;

    return (
      <View style={styles.headerContainer}>
        <Text />
        <HeaderText label={"Supplements & Medication"} />
        <TouchableOpacity
          onPress={() => navigation.navigate(CreateSupplementView.viewName)}
        >
          <AddNewPill />
        </TouchableOpacity>
      </View>
    );
  }

  renderSupplements() {
    const { navigation } = this.props;
    if (!this.state.supplements.length) {
      return (
        <List>
          <AddSupplementListItem
            title={"Add A Supplement"}
            onPress={() => navigation.navigate(CreateSupplementView.viewName)}
          />
        </List>
      );
    }

    return (
      <List>
        {this.state.supplements.map((supplement, i) => (
          <ListItem
            key={i}
            avatar={INDIVIDUAL_VITAMIN}
            avatarStyle={ListItemStyles.avatarStyle}
            onPress={() =>
              navigation.navigate(LogSupplementLogView.viewName, supplement)}
            title={supplement.name}
            subtitle={supplement.subtitle}
          />
        ))}
      </List>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSupplementStacksHeader()}
        {this.renderSupplementStacks()}
        {this.renderSupplementsHeader()}
        {this.renderSupplements()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

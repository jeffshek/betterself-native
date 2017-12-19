import Expo from "expo";
import React, { Component } from "react";
import { Image, View, ScrollView, StyleSheet } from "react-native";

import { Text, List, ListItem } from "react-native-elements";

import colors from "HSColors";
import { SupplementLogView } from "./log_stack";
import { getSupplements, getSupplementStacks } from "../../services/api/api";
import { ADD_NEW_PILL_IMAGE } from "../../../assets/icons/constants";

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
    const routeName = SupplementLogView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Supplement Stacks </Text>
          <Image
            source={ADD_NEW_PILL_IMAGE}
            resizeMode="cover"
            style={styles.logo}
          />

        </View>
        <List>
          {this.state.supplementStacks.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.description}
              onPress={() => navigation.navigate(routeName, { name: l.name })}
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

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Supplements & Medication</Text>
        </View>
        <List>
          {this.state.supplements.map((l, i) => (
            <ListItem
              key={i}
              onPress={log}
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
  logo: {
    height: 32,
    width: 32,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end"
  },
  container: {
    flex: 1
  },
  headerContainer: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row"
    //justifyContent: "center",
    //alignItems: "center",
  },
  headerText: {
    //order: 2,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: 0,
    fontSize: 22
  },
  heading: {
    color: "white",
    marginTop: 0,
    fontSize: 22
  }
});

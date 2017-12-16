import Expo from "expo";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { Text, List, ListItem } from "react-native-elements";

import colors from "HSColors";
import { SupplementLogView } from "./log_stack";
import { getSupplements, getSupplementStacks } from "../../services/api/api";

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
    const { navigation } = this.props;
    const routeName = SupplementLogView.viewName;

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Supplement Stacks</Text>
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
    const { navigation } = this.props;
    const { selectedIndex } = this.state;

    return (
      <ScrollView>
        {this.renderSupplementStacks()}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.background
  },
  heading: {
    color: "white",
    marginTop: 0,
    fontSize: 22
  }
});

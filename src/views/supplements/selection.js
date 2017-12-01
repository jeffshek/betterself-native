import Expo from "expo";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { Text, List, ListItem } from "react-native-elements";

import colors from "HSColors";

const log = () => console.log("this is an example method");

const SupplementStackSelection = [
  {
    name: "Morning Stack",
    subtitle: "Piracetam and Oxiracetam"
  },
  {
    name: "Sleep Stack",
    subtitle: "Melatonin & Tea"
  }
];

const SupplementSelection = [
  {
    name: "Piracetam"
  },
  {
    name: "Oxiracetam"
  },
  {
    name: "Choline"
  },
  {
    name: "Creatine"
  },
  {
    name: "Ketotones"
  },
  {
    name: "Protein"
  },
  {
    name: "BCAA"
  },
  {
    name: "Cheese"
  },
  {
    name: "Potatos"
  }
];

export class SupplementSelectionView extends Component {
  viewName = "SupplementSelectionView";

  constructor() {
    super();

    this.state = {
      selectedIndex: 0,
      value: 0.5
    };
  }

  renderSupplementStacks() {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Supplement Stacks</Text>
        </View>
        <List>
          {SupplementStackSelection.map((l, i) => (
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

  renderSupplements() {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Supplements & Medication</Text>
        </View>
        <List>
          {SupplementSelection.map((l, i) => (
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
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: "row",
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: "row",
    justifyContent: "center"
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});

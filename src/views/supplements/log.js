import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { FormLabel, Text } from "react-native-elements";

export class SupplementLogView extends Component {
  static viewName = "SupplementLogView";

  constructor() {
    super();
    console.log(this.props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.searchBoxContainerStyle}>
        <Text />
        <Text h4 style={styles.title}>Supplement Log View</Text>
        <Text />

        <FormLabel>Reminders</FormLabel>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center"
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  searchBoxInputStyle: {
    backgroundColor: "white"
  },
  searchBoxContainerStyle: {
    backgroundColor: "white"
  }
});

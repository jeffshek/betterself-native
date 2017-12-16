import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, FormLabel, SearchBar, Text } from "react-native-elements";

export class SupplementHistoryView extends Component {
  static viewName = "SupplementHistoryView";

  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.searchBoxContainerStyle}>
        <Text />
        <Text h4 style={styles.title}>Supplement History</Text>
        <Text />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  },
  searchBoxContainerStyle: {
    backgroundColor: "white"
  }
});

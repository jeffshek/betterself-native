import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { FormLabel, FormInput, Text } from "react-native-elements";

const log = input => {
  console.log(input);
};

export class SupplementLogView extends Component {
  static viewName = "SupplementLogView";

  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;
    const pageName = navigation.state.params.name;
    const pageNameIncludedStack = pageName.toLowerCase().includes("stack");
    const postFix = pageNameIncludedStack ? "" : " Stack";

    return (
      <View style={styles.searchBoxContainerStyle}>
        <Text />
        <Text />
        <Text h2 style={styles.title}>
          Log {navigation.state.params.name} {postFix}
        </Text>
        <Text />

        <FormLabel labelStyle={styles.formLabelStyle}>Quantity</FormLabel>
        <FormInput onChangeText={log} />
        <FormLabel labelStyle={styles.formLabelStyle}>Time</FormLabel>
        <FormInput onChangeText={log} />
        {/*<FormLabel>Name</FormLabel>*/}
        {/*<FormInput onChangeText={log}/>*/}
        {/*<FormValidationMessage>Error message</FormValidationMessage>*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 40
  },
  formLabelStyle: {
    fontSize: 25
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

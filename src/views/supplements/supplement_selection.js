import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, FormLabel, SearchBar, Text } from "react-native-elements";

export class SupplementSelectionView extends Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.searchBoxContainerStyle}>
        <Text />
        <Text h4 style={styles.title}>Select Supplement</Text>
        <Text />

        <SearchBar
          lightTheme
          round
          //onChangeText={someMethod}
          //onClearText={someMethod}
          inputStyle={styles.searchBoxInputStyle}
          placeholder="Supplement Name?"
        />
        <SearchBar
          lightTheme
          round
          inputStyle={styles.searchBoxInputStyle}
          //onChangeText={someMethod}
          //onClearText={someMethod}
          placeholder="Quantity?"
        />
        <SearchBar
          round
          //onChangeText={someMethod}
          //onClearText={someMethod}
          placeholder="At What Time?"
          inputStyle={styles.searchBoxInputStyle}
          //containerStyle={styles.searchBoxInputStyle}
          textStyle={{ color: "white" }}
        />
        <Text />
        <Button title={"Add"} />
        <FormLabel>Name</FormLabel>

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

import Expo, { Font } from "expo";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { FormLabel, FormInput } from "react-native-elements";

import {
  registerCustomIconType,
  Text,
  Button,
  Icon,
  SocialIcon,
  Card
} from "react-native-elements";

import colors from "HSColors";
import socialColors from "HSSocialColors";
import fonts from "HSFonts";
import fontelloConfig from "../../assets/fontello/config.json";
import { SupplementLogViewConstant } from "./supplements/log";
import { SearchBar } from "react-native-elements";

class Buttons extends Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      fontello: require("../../assets/fontello/font/fontello.ttf")
    }).then(() => {
      registerCustomIconType(
        "fontello",
        createIconSetFromFontello(fontelloConfig)
      );
      this.setState({ fontLoaded: true });
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.searchBoxContainerStyle}>
        <Text />
        <Text h4 style={styles.title}>Record Supplement</Text>
        <Text />
        {/*<Button*/}
        {/*buttonStyle={styles.button}*/}
        {/*backgroundColor={socialColors.facebook}*/}
        {/*icon={{ name: "account", type: "material-community" }}*/}
        {/*onPress={() =>*/}
        {/*navigation.navigate(SupplementLogViewConstant.name, {*/}
        {/*name: "Jordan"*/}
        {/*})}*/}
        {/*title="Add A New Supplement or Medication"*/}
        {/*/>*/}

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
    padding: 40,
    backgroundColor: colors.primary2
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
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

export default Buttons;

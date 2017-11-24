import Expo from "expo";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";
import { StackNavigator } from "react-navigation";
import { Text, Button, Icon } from "react-native-elements";

import colors from "HSColors";
import socialColors from "HSSocialColors";
import fonts from "HSFonts";

export const SupplementLogViewConstant = () => {
  return <Text>Supplement Log View</Text>;
};

export class SupplementLogView extends Component {
  render() {
    const { navigation } = this.props;

    return <Text>Supplement Log View</Text>;
  }
}

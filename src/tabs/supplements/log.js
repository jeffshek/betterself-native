import Expo from "expo";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import ButtonsHome from "../../views/buttons_home";
import ButtonsDetails from "../../views/buttons_detail";
import { HamburgerIconSize } from "../../constants/icons";
import { HamburgerIconNavigation } from "../../constants/icons";

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

export const SupplementsLogStack = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: "/",
    navigationOptions: ({ navigation }) => ({
      title: "Supplement Logs",
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  },
  Button_Detail: {
    screen: ButtonsDetailTabView,
    path: "/buttons_detail",
    navigationOptions: {
      title: "Buttons Detail"
    }
  }
});

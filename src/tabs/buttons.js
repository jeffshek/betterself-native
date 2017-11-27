import Expo from "expo";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import ButtonsHome from "../views/buttons_home";
import ButtonsDetails from "../views/buttons_detail";
import { HamburgerIconSize } from "../constants/icons";
import {
  SupplementSelectionView
} from "../views/supplements/supplement_selection";

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: "/",
    navigationOptions: ({ navigation }) => ({
      title: "Buttons",
      headerLeft: (
        <Icon
          name="menu"
          size={HamburgerIconSize}
          type="entypo"
          iconStyle={{ paddingLeft: 15 }}
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      )
    })
  },
  Button_Detail: {
    screen: ButtonsDetailTabView,
    path: "/buttons_detail",
    navigationOptions: {
      title: "Buttons Detail"
    }
  },
  [SupplementSelectionView.name]: {
    screen: SupplementSelectionView,
    path: "/supplement_selection",
    navigationOptions: ({ navigation }) => ({
      title: "Supplements Selection",
      headerLeft: (
        <Icon
          name="menu"
          size={HamburgerIconSize}
          type="entypo"
          iconStyle={{ paddingLeft: 15 }}
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      )
    })
  }
});

export default ButtonsTab;

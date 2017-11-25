import Expo from "expo";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import ButtonsHome from "../../views/buttons_home";
import ButtonsDetails from "../../views/buttons_detail";
import { HamburgerIconSize } from "../../constants/icons";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementLogViewConstant } from "../../views/supplements/log";

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

export const SupplementsLogTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: "/",
    navigationOptions: ({ navigation }) => ({
      title: SupplementsLogLabel,
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  },
  [SupplementLogViewConstant.name]: {
    screen: SupplementLogViewConstant,
    //path: "/buttons_detail",
    path: `/${SupplementLogViewConstant.name}`,
    navigationOptions: {
      title: "Buttons Detail"
    }
  }
});

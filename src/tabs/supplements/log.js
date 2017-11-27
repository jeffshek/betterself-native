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
import {
  SupplementSelectionView
} from "../../views/supplements/supplement_selection";

export const SupplementsLogTab = StackNavigator({
  Buttons: {
    //screen: ButtonsTabView,
    screen: SupplementSelectionView,
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

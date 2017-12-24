import { Icon } from "react-native-elements";
import React from "react";
import { PILL_IMAGE } from "../../assets/icons/constants";
import { AppRegistry, View, Image, StyleSheet } from "react-native";

const IconSize = 25;
export const HamburgerIconSize = 40;
export const SelectedTintColor = "#e91e63";

export const LogCheckboxIcon = ({ tintColor }) => {
  return (
    <Icon
      name="checkbox-marked-outline"
      size={IconSize}
      type="material-community"
      color={tintColor}
    />
  );
};

export const HistoryCheckboxIcon = ({ tintColor }) => {
  return <Icon name="list" size={IconSize} type="entypo" color={tintColor} />;
};

export const RemindersCheckboxIcon = ({ tintColor }) => {
  return (
    <Icon
      name="wpforms"
      size={IconSize}
      type="font-awesome"
      color={tintColor}
    />
  );
};

export const HomeIcon = ({ tintColor }) => {
  return (
    <Icon
      name="home"
      size={25}
      style={{
        width: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
      }}
      type="material-community"
      color={tintColor}
    />
  );
};

export const SupplementsIcon = ({ tintColor }) => {
  return (
    <Image
      source={PILL_IMAGE}
      style={{
        width: 26,
        height: 26,
        alignItems: "center",
        justifyContent: "center"
      }}
      //type="material-community"
      color={tintColor}
    />
  );
};

export const HamburgerIconNavigation = ({ navigation }) => {
  return (
    <Icon
      name="menu"
      size={HamburgerIconSize}
      type="entypo"
      iconStyle={{ paddingLeft: 15 }}
      onPress={() => navigation.navigate("DrawerOpen")}
    />
  );
};

export const GoBackIconNavigation = ({ navigation }) => {
  return (
    <Icon
      name="chevron-left"
      size={HamburgerIconSize}
      iconStyle={{ paddingLeft: 15 }}
      onPress={() => navigation.goBack()}
    />
  );
};

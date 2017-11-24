import { Icon } from "react-native-elements";
import React from "react";

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

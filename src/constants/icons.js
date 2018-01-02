import { Icon } from "react-native-elements";
import React from "react";
import { PILL_IMAGE } from "../../assets/icons/constants";
import { Image, StyleSheet } from "react-native";
import colors from "HSColors";

const IconSize = 25;
export const HamburgerIconSize = 40;

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
      size={IconSize}
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
        width: IconSize,
        height: IconSize
      }}
      color={tintColor}
    />
  );
};

export const LogoutIcon = ({ tintColor }) => {
  return (
    <Icon
      name="fingerprint"
      size={IconSize}
      iconStyle={IconStyles.drawerIcon}
    />
  );
};

export const HamburgerIconNavigation = ({ navigation }) => {
  return (
    <Icon
      name="menu"
      size={HamburgerIconSize}
      type="entypo"
      iconStyle={IconStyles.navigationIconStyle}
      onPress={() => navigation.navigate("DrawerOpen")}
    />
  );
};

export const HomeIconNavigation = ({ navigation }) => {
  return (
    <Icon
      name="home"
      size={HamburgerIconSize}
      iconStyle={IconStyles.navigationIconStyle}
      onPress={() => navigation.navigate("DrawerOpen")}
    />
  );
};

export const GoBackIconNavigation = ({ navigation }) => {
  return (
    <Icon
      name="chevron-left"
      size={HamburgerIconSize}
      iconStyle={IconStyles.navigationIconStyle}
      onPress={() => navigation.goBack()}
    />
  );
};

export const IconPadAmount = 15;

const IconStyles = StyleSheet.create({
  navigationIconStyle: {
    paddingLeft: IconPadAmount,
    paddingRight: IconPadAmount
  },
  drawerIcon: {
    color: colors.alternative
  }
});

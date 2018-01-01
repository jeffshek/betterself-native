import React from "react";
import { Dimensions, Image, View } from "react-native";
import { DrawerItems, DrawerNavigator } from "react-navigation";
import { SupplementsTabNavigator } from "./supplements";
import Expo from "expo";
import colors from "HSColors";
import { LogoutView } from "../views/auth/logout";
import { SelectAndLogStackNavigator } from "../tabs/supplements/select_and_log";
import {
  SupplementsAndStacksSelectionView
} from "../views/supplements/selection";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: colors.primary }}>
    <View
      style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../images/white_logo_transparent_background_small.png")}
        style={{ width: SCREEN_WIDTH * 0.5 }}
        resizeMode="contain"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

export const PrimaryDrawer = DrawerNavigator(
  {
    [SupplementsTabNavigator.viewName]: {
      screen: SupplementsTabNavigator
    },
    [LogoutView.viewName]: {
      screen: LogoutView
    }
  },
  {
    initialRouteName: SupplementsTabNavigator.viewName,
    contentOptions: {
      activeTintColor: colors.white,
      activeBackgroundColor: "transparent",
      inactiveTintColor: colors.white,
      inactiveBackgroundColor: "transparent",
      labelStyle: {
        fontSize: 15,
        marginLeft: 0
      }
    },
    drawerWidth: SCREEN_WIDTH * 0.7,
    contentComponent: CustomDrawerContentComponent
  }
);

PrimaryDrawer.viewName = "PrimaryDrawer";

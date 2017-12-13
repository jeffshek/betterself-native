// Not sure if there's any use of this file

import React from "react";
import { Dimensions, Image, View } from "react-native";
import { DrawerItems, DrawerNavigator } from "react-navigation";
import { SupplementsDrawer } from "./supplements";
import Expo from "expo";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: "#193441" }}>
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

export const SupplementsMainNavigator = DrawerNavigator(
  {
    [SupplementsDrawer.viewName]: {
      path: "/home",
      screen: SupplementsDrawer
    }
  },
  {
    initialRouteName: SupplementsDrawer.viewName,
    contentOptions: {
      //activeTintColor: "#548ff7",
      activeTintColor: "white",
      activeBackgroundColor: "transparent",
      inactiveTintColor: "#ffffff",
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

SupplementsMainNavigator.viewName = "SupplementsMainNavigator";

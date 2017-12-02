import Expo from "expo";
import React from "react";
import { View, Image, Dimensions, Platform } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";

import { SupplementsDrawer } from "./src/drawer/supplements";
import { SignupView } from "./src/views/login/login";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: "#193441" }}>
    <View
      style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("./src/images/white_logo_transparent_background_small.png")}
        style={{ width: SCREEN_WIDTH * 0.5 }}
        resizeMode="contain"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainNavigator = DrawerNavigator(
  {
    [SupplementsDrawer.viewName]: {
      path: "/home",
      screen: SupplementsDrawer
    },
    [SignupView.viewName]: {
      path: "/signUp",
      screen: SignupView
    }
  },
  {
    initialRouteName: SignupView.viewName,
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

const MainRoot = () => (
  <View style={{ flex: 1 }}>
    {Platform.OS === "android" &&
      <View style={{ height: Expo.Constants.statusBarHeight }} />}
    <MainNavigator />
  </View>
);

Expo.registerRootComponent(MainRoot);

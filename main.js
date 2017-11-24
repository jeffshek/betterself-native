import Expo from "expo";
import React from "react";
import { View, Image, Dimensions, Platform } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";

import Ratings from "./src/drawer/sleep_ratings_template";
import Pricing from "./src/drawer/events_pricing_template";
import Playground from "./src/drawer/productivity_playground_template";
import { MoodDrawerItem } from "./src/drawer/mood_pricing_template";
import { SupplementsDrawer } from "./src/drawer/supplements";

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
    [SupplementsDrawer.name]: {
      path: "/home",
      screen: SupplementsDrawer
    },
    Ratings: {
      path: "/ratings",
      screen: Ratings
    },
    Pricing: {
      path: "/pricing",
      screen: Pricing
    },
    Playground: {
      path: "/playground",
      screen: Playground
    },
    Mood: {
      path: "/playground",
      screen: MoodDrawerItem
    }
  },
  {
    initialRouteName: SupplementsDrawer.name,
    contentOptions: {
      activeTintColor: "#548ff7",
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

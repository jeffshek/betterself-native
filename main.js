import Expo from "expo";
import React from "react";
import { LandingView } from "./src/views/landing/initial";
import { StackNavigator } from "react-navigation";
import { SignupView } from "./src/views/login/signup";
import { Button, View } from "react-native";

const MainStack = StackNavigator(
  {
    [LandingView.viewName]: {
      screen: LandingView
    },
    [SignupView.viewName]: {
      screen: SignupView
    }
  },
  {
    headerMode: "none", // weird dynamic where has to be a string of "none"/"null"
    initialRouteName: LandingView.viewName
  }
);

const MainRoot = () => (
  <View style={{ flex: 1 }}>
    <MainStack />
  </View>
);

Expo.registerRootComponent(MainRoot);

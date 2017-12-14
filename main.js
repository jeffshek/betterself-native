import Expo from "expo";
import React from "react";
import { LandingView } from "./src/views/login/landing";
import { StackNavigator } from "react-navigation";
import { SignupView } from "./src/views/login/signup";
import { View } from "react-native";
import { LoginView } from "./src/views/login/login";
import { SupplementsTabNavigator } from "./src/drawer/supplements";

const MainStack = StackNavigator(
  {
    [LandingView.viewName]: {
      screen: LandingView
    },
    [SignupView.viewName]: {
      screen: SignupView
    },
    [LoginView.viewName]: {
      screen: LoginView
    },
    [SupplementsTabNavigator.viewName]: {
      screen: SupplementsTabNavigator
    }
  },
  {
    headerMode: "none",
    // TODO - Swap this back out to LandingView when done
    initialRouteName: LoginView.viewName
  }
);

const MainRoot = () => (
  <View style={{ flex: 1 }}>
    <MainStack />
  </View>
);

Expo.registerRootComponent(MainRoot);

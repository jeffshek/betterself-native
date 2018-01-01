import Expo from "expo";
import React from "react";
import { LandingView } from "./src/views/auth/landing";
import { StackNavigator } from "react-navigation";
import { SignupView } from "./src/views/auth/signup";
import { View } from "react-native";
import { LoginView } from "./src/views/auth/login";
import { SupplementsTabNavigator } from "./src/drawer/supplements";
import { PrimaryDrawer } from "./src/drawer/primaryDrawer";
import { LogoutView } from "./src/views/auth/logout";

export const InitialStackNavigator = StackNavigator(
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
    [PrimaryDrawer.viewName]: {
      screen: PrimaryDrawer
    },
    [LogoutView.viewName]: {
      screen: LogoutView
    }
  },
  {
    headerMode: "none",
    // TODO - Swap this back out to LandingView when done
    initialRouteName: PrimaryDrawer.viewName
    //initalRouteName: LandingView.viewName
  }
);

const MainRoot = () => (
  <View style={{ flex: 1 }}>
    <InitialStackNavigator />
  </View>
);

Expo.registerRootComponent(MainRoot);

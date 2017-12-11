import Expo from "expo";
import React from "react";
import { LandingView } from "./src/views/initial/initial";
import { StackNavigator } from "react-navigation";
import { SignupView } from "./src/views/login/signup";

const MainStack = StackNavigator(
  {
    [LandingView.viewName]: {
      screen: LandingView
    }
  },
  {
    [SignupView.viewName]: {
      screen: SignupView
    }
  },
  {
    headerMode: "none", // weird dynamic where has to be a string of "none"/"null"
    initialRouteName: LandingView.viewName
  }
);

Expo.registerRootComponent(MainStack);

import Expo from "expo";
import React from "react";
import { LandingView } from "./src/views/initial/initial";
import { StackNavigator } from "react-navigation";

const MainStack = StackNavigator(
  {
    Home: {
      screen: LandingView
    }
  },
  {
    headerMode: "none" // weird dynamic where has to be a string of "none"/"null"
  }
);

Expo.registerRootComponent(MainStack);

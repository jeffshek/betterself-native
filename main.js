import Expo from "expo";
import React from "react";
import { View } from "react-native";
import { LandingView } from "./src/views/initial/initial";

const MainRoot = () => (
  <View style={{ flex: 1 }}>
    <LandingView />
  </View>
);

Expo.registerRootComponent(MainRoot);

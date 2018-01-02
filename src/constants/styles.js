import React, { PropTypes, Component } from "react";

import { Platform, StatusBar } from "react-native";

export const platformSupportCardStyle = {
  // This is a hack to fix https://github.com/react-navigation/react-navigation/issues/1478
  // Android has mismatching currentHeights (but happens in new iPhone too)
  paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
};

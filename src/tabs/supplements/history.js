import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementHistoryView } from "../../views/supplements/history";
import { Platform, StatusBar } from "react-native";
import {
  SupplementsAndStacksSelectionView
} from "../../views/supplements/selection";

export const SupplementsHistoryTab = StackNavigator(
  {
    [SupplementHistoryView.viewName]: {
      screen: SupplementHistoryView,
      path: `/${SupplementHistoryView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "History",
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    }
  },
  {
    // This is a hack to fix https://github.com/react-navigation/react-navigation/issues/1478
    // Android has mismatching currentHeights (but happens in new iPhone too)
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

SupplementsHistoryTab.viewName = "SupplementsHistoryTab";

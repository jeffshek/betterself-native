import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementRemindersView } from "../../views/supplements/reminders";
import { Platform, StatusBar } from "react-native";

export const SupplementsRemindersTab = StackNavigator(
  {
    [SupplementRemindersView.name]: {
      screen: SupplementRemindersView,
      path: `/${SupplementRemindersView.name}`,
      navigationOptions: ({ navigation }) => ({
        title: "Reminders",
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

SupplementsRemindersTab.viewName = "SupplementsRemindersTab";

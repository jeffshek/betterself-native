import React from "react";
import { TabNavigator } from "react-navigation";
import { HistoryLabel, LogLabel, RemindersLabel } from "../constants/labels";
import {
  HistoryCheckboxIcon,
  HomeIcon,
  LogCheckboxIcon,
  RemindersCheckboxIcon,
  SelectedTintColor
} from "../constants/icons";
import { SupplementsLogTab } from "../tabs/supplements/log";

const label = "Supplements & Medications";

export const SupplementsDrawer = TabNavigator(
  {
    [SupplementsLogTab.name]: {
      screen: SupplementsLogTab,
      path: "/supplementSelect",
      navigationOptions: {
        tabBarLabel: LogLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <LogCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    SupplementsHistoryTab: {
      screen: SupplementsLogTab,
      path: "/lists",
      navigationOptions: {
        tabBarLabel: HistoryLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <HistoryCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    SupplementRemindersTab: {
      screen: SupplementsLogTab,
      path: "/forms",
      navigationOptions: {
        tabBarLabel: RemindersLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <RemindersCheckboxIcon tintColor={tintColor} />
        )
      }
    }
  },
  {
    // Unable to dynamically compute this, not sure why
    initialRouteName: SupplementsLogTab.name,
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: SelectedTintColor,
      // Android's default showing of icons is false whereas
      // iOS is true
      showIcon: true
    }
  }
);

SupplementsDrawer.navigationOptions = {
  drawerLabel: label,
  drawerIcon: ({ tintColor }) => <HomeIcon tintColor={tintColor} />
};

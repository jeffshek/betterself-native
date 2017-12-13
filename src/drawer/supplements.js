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
import { SupplementsAndLogTab } from "../tabs/supplements/select_and_log";
import { SupplementsHistoryTab } from "../tabs/supplements/history";
import { SupplementsRemindersTab } from "../tabs/supplements/reminders";

const label = "Supplements & Medications";

export const SupplementsDrawer = TabNavigator(
  {
    [SupplementsAndLogTab.viewName]: {
      screen: SupplementsAndLogTab,
      path: "/supplementSelect",
      navigationOptions: {
        tabBarLabel: LogLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <LogCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    [SupplementsHistoryTab.viewName]: {
      screen: SupplementsHistoryTab,
      path: "/supplementHistory",
      navigationOptions: {
        tabBarLabel: HistoryLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <HistoryCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    [SupplementsRemindersTab.viewName]: {
      screen: SupplementsRemindersTab,
      path: "/supplementReminders",
      navigationOptions: {
        tabBarLabel: RemindersLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <RemindersCheckboxIcon tintColor={tintColor} />
        )
      }
    }
  },
  {
    //headerMode: "none",
    initialRouteName: SupplementsAndLogTab.viewName,
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "white",
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

SupplementsDrawer.viewName = "SupplementsDrawer";

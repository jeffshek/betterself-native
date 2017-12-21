import React from "react";
import { TabNavigator } from "react-navigation";
import { HistoryLabel, LogLabel, RemindersLabel } from "../constants/labels";
import {
  HistoryCheckboxIcon,
  LogCheckboxIcon,
  RemindersCheckboxIcon,
  SupplementsIcon
} from "../constants/icons";
import { SelectAndLogStackNavigator } from "../tabs/supplements/select_and_log";
import { SupplementsHistoryTab } from "../tabs/supplements/history";
import { SupplementsRemindersTab } from "../tabs/supplements/reminders";
import colors from "HSColors";

const label = "Supps. & Meds.";

export const SupplementsTabNavigator = TabNavigator(
  {
    [SelectAndLogStackNavigator.viewName]: {
      screen: SelectAndLogStackNavigator,
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
    headerMode: "none",
    initialRouteName: SelectAndLogStackNavigator.viewName,
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: colors.background,
      // Android's default showing of icons is false whereas
      // iOS is true
      showIcon: true
    }
  }
);

SupplementsTabNavigator.navigationOptions = {
  drawerLabel: label,
  drawerIcon: ({ tintColor }) => <SupplementsIcon tintColor={tintColor} />
};

SupplementsTabNavigator.viewName = "SupplementsTabNavigator";

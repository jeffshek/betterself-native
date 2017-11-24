import Expo from "expo";
import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import ButtonsTab from "../tabs/buttons";
import ListsTab from "../tabs/lists";
import FormsTab from "../tabs/forms";
import FontsTab from "../tabs/fonts";
import { HistoryLabel, LogLabel, RemindersLabel } from "../constants/labels";
import {
  HistoryCheckboxIcon,
  HomeIcon,
  LogCheckboxIcon,
  RemindersCheckboxIcon,
  SelectedTintColor
} from "../constants/icons";

const label = "Supplements & Medications";

export const SupplementsDrawer = TabNavigator(
  {
    SupplementsLogTab: {
      screen: ButtonsTab,
      path: "/buttons",
      navigationOptions: {
        tabBarLabel: LogLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <LogCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    SupplementsHistoryTab: {
      screen: ListsTab,
      path: "/lists",
      navigationOptions: {
        tabBarLabel: HistoryLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <HistoryCheckboxIcon tintColor={tintColor} />
        )
      }
    },
    SupplementRemindersTab: {
      screen: FormsTab,
      path: "/forms",
      navigationOptions: {
        tabBarLabel: RemindersLabel,
        tabBarIcon: ({ tintColor, focused }) => (
          <RemindersCheckboxIcon tintColor={tintColor} />
        )
      }
    }
    //FontsTab: {
    //  screen: FontsTab,
    //  path: "/fonts",
    //  navigationOptions: {
    //    tabBarLabel: "Fonts",
    //    tabBarIcon: ({ tintColor, focused }) => (
    //      <Icon
    //        name={focused ? "font" : "font"}
    //        size={30}
    //        type="font-awesome"
    //        color={tintColor}
    //      />
    //    )
    //  }
    //}
  },
  {
    initialRouteName: "SupplementsLogTab",
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

import Expo from "expo";
import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import ButtonsTab from "../tabs/buttons";
import ListsTab from "../tabs/lists";
import FormsTab from "../tabs/forms";
import FontsTab from "../tabs/fonts";

const SupplementsHome = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: "/buttons",
      navigationOptions: {
        tabBarLabel: "Log",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "emoticon-cool" : "emoticon-neutral"}
            size={30}
            type="material-community"
            color={tintColor}
          />
        )
      }
    },
    ListsTab: {
      screen: ListsTab,
      path: "/lists",
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={30} type="entypo" color={tintColor} />
        )
      }
    },
    FormsTab: {
      screen: FormsTab,
      path: "/forms",
      navigationOptions: {
        tabBarLabel: "Reminders",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    },
    FontsTab: {
      screen: FontsTab,
      path: "/fonts",
      navigationOptions: {
        tabBarLabel: "Fonts",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "font" : "font"}
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "ButtonsTab",
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

SupplementsHome.navigationOptions = {
  drawerLabel: "Supplements & Medication",
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
      }}
      type="material-commnity"
      color={tintColor}
    />
  )
};

export default SupplementsHome;

import React from "react";

import { StackNavigator } from "react-navigation";
import {
  GoBackIconNavigation,
  HamburgerIconNavigation
} from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import {
  SupplementsAndStacksSelectionView
} from "../../views/supplements/selection";
import {
  LogSupplementLogView
} from "../../views/supplements/log_supplement_log";
import {
  LogSupplementStackView
} from "../../views/supplements/log_supplement_stack";
import {
  CreateSupplementView
} from "../../views/supplements/create_supplement";
import {
  CreateSupplementStackView
} from "../../views/supplements/create_supplement_stack";
import {
  CreateSupplementCompositionView
} from "../../views/supplements/create_supplement_composition";
import { Platform, StatusBar } from "react-native";

export const SelectAndLogStackNavigator = StackNavigator(
  {
    [SupplementsAndStacksSelectionView.viewName]: {
      screen: SupplementsAndStacksSelectionView,
      path: `/${SupplementsAndStacksSelectionView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "Log It!",
        // TODO - Change this to back arrow instead of hamburger
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [LogSupplementLogView.viewName]: {
      screen: LogSupplementLogView,
      path: `${LogSupplementLogView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: SupplementsLogLabel,
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    },
    [LogSupplementStackView.viewName]: {
      screen: LogSupplementStackView,
      path: `${LogSupplementStackView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "Log",
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementView.viewName]: {
      screen: CreateSupplementView,
      path: `${CreateSupplementView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "Create",
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementStackView.viewName]: {
      screen: CreateSupplementStackView,
      path: `${CreateSupplementStackView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "Create",
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementCompositionView.viewName]: {
      screen: CreateSupplementCompositionView,
      path: `${CreateSupplementCompositionView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: "SupplementsAndStacksSelectionView",
    // This is a hack to fix https://github.com/react-navigation/react-navigation/issues/1478
    // Android has mismatching currentHeights (but happens in new iPhone too)
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

SelectAndLogStackNavigator.viewName = "SelectAndLogStackNavigator";

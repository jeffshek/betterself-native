import React from "react";

import { StackNavigator } from "react-navigation";
import {
  GoBackIconNavigation,
  HamburgerIconNavigation
} from "../../constants/icons";
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
import {
  SupplementCompositionDetailView
} from "../../views/supplements/supplement_composition_details";

export const SelectAndLogStackNavigator = StackNavigator(
  {
    [SupplementsAndStacksSelectionView.viewName]: {
      screen: SupplementsAndStacksSelectionView,
      navigationOptions: ({ navigation }) => ({
        title: "Log",
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [LogSupplementLogView.viewName]: {
      screen: LogSupplementLogView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [LogSupplementStackView.viewName]: {
      screen: LogSupplementStackView,
      navigationOptions: ({ navigation }) => ({
        title: "Log",
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementView.viewName]: {
      screen: CreateSupplementView,
      navigationOptions: ({ navigation }) => ({
        title: "Create",
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementStackView.viewName]: {
      screen: CreateSupplementStackView,
      navigationOptions: ({ navigation }) => ({
        title: "Create",
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [CreateSupplementCompositionView.viewName]: {
      screen: CreateSupplementCompositionView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [SupplementCompositionDetailView.viewName]: {
      screen: SupplementCompositionDetailView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <GoBackIconNavigation navigation={navigation} />,
        headerRight: <HamburgerIconNavigation navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: SupplementsAndStacksSelectionView.viewName,
    // This is a hack to fix https://github.com/react-navigation/react-navigation/issues/1478
    // Android has mismatching currentHeights (but happens in new iPhone too)
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

SelectAndLogStackNavigator.viewName = "SelectAndLogStackNavigator";

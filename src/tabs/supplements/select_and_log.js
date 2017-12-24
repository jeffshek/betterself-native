import React from "react";

import { StackNavigator } from "react-navigation";
import {
  GoBackIconNavigation,
  HamburgerIconNavigation
} from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementSelectionView } from "../../views/supplements/selection";
import {
  AddSupplementLogView
} from "../../views/supplements/add_supplement_log";
import {
  AddSupplementStackView
} from "../../views/supplements/add_supplement_stack";
import {
  CreateSupplementView
} from "../../views/supplements/create_supplement";
import {
  CreateSupplementStackView
} from "../../views/supplements/create_supplement_stack";

export const SelectAndLogStackNavigator = StackNavigator(
  {
    [SupplementSelectionView.viewName]: {
      screen: SupplementSelectionView,
      path: `/${SupplementSelectionView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "Log It!",
        // TODO - Change this to back arrow instead of hamburger
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [AddSupplementLogView.viewName]: {
      screen: AddSupplementLogView,
      path: `${AddSupplementLogView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: SupplementsLogLabel,
        headerLeft: <GoBackIconNavigation navigation={navigation} />
      })
    },
    [AddSupplementStackView.viewName]: {
      screen: AddSupplementStackView,
      path: `${AddSupplementStackView.viewName}`,
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
    }
  },
  {
    initialRouteName: "SupplementSelectionView"
  }
);

SelectAndLogStackNavigator.viewName = "SelectAndLogStackNavigator";

import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementSelectionView } from "../../views/supplements/selection";
import {
  AddSupplementLogView
} from "../../views/supplements/add_supplement_log";

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
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: "SupplementSelectionView"
  }
);

SelectAndLogStackNavigator.viewName = "SelectAndLogStackNavigator";

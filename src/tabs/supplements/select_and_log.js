import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementSelectionView } from "../../views/supplements/selection";
import { SupplementLogView } from "../../views/supplements/log";

export const SupplementsLogTab = StackNavigator(
  {
    [SupplementSelectionView.name]: {
      screen: SupplementSelectionView,
      path: `/${SupplementSelectionView.name}`,
      navigationOptions: ({ navigation }) => ({
        title: SupplementsLogLabel,
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    [SupplementLogView.name]: {
      screen: SupplementLogView,
      path: `/${SupplementLogView.name}`,
      navigationOptions: ({ navigation }) => ({
        title: SupplementsLogLabel,
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: SupplementSelectionView.viewName
  }
);

SupplementsLogTab.viewName = "SupplementsLogTab";

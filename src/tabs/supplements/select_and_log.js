import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementSelectionView } from "../../views/supplements/selection";
import { SupplementLogView } from "../../views/supplements/log_stack";

export const SupplementsAndLogTab = StackNavigator(
  {
    [SupplementSelectionView.viewName]: {
      screen: SupplementSelectionView,
      path: `/${SupplementSelectionView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        //title: SupplementsLogLabel,
        title: "Log It!",
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    },
    SupplementLogView: {
      screen: SupplementLogView,
      path: `${SupplementLogView.viewName}`,
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

SupplementsAndLogTab.viewName = "SupplementsAndLogTab";

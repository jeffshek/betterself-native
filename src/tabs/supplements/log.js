import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementLogViewConstant } from "../../views/supplements/log";
import {
  SupplementSelectionView
} from "../../views/supplements/supplement_selection";

export const SupplementsLogTab = StackNavigator({
  [SupplementSelectionView.name]: {
    screen: SupplementSelectionView,
    path: `/${SupplementSelectionView.name}`,
    navigationOptions: ({ navigation }) => ({
      title: SupplementsLogLabel,
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  },
  [SupplementLogViewConstant.name]: {
    screen: SupplementLogViewConstant,
    path: `/${SupplementLogViewConstant.name}`,
    navigationOptions: {
      title: "Buttons Detail"
    }
  }
});

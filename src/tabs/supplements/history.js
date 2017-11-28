import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsLogLabel } from "../../constants/labels";
import { SupplementHistoryView } from "../../views/supplements/history";

export const SupplementsHistoryTab = StackNavigator({
  [SupplementHistoryView.viewName]: {
    screen: SupplementHistoryView,
    path: `/${SupplementHistoryView.viewName}`,
    navigationOptions: ({ navigation }) => ({
      title: SupplementsLogLabel,
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  }
});

SupplementsHistoryTab.viewName = "SupplementsHistoryTab";

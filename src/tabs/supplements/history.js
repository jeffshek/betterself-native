import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementHistoryView } from "../../views/supplements/history";
import { platformSupportCardStyle } from "../../constants/styles";

export const SupplementsHistoryTab = StackNavigator(
  {
    [SupplementHistoryView.viewName]: {
      screen: SupplementHistoryView,
      path: `/${SupplementHistoryView.viewName}`,
      navigationOptions: ({ navigation }) => ({
        title: "History",
        headerLeft: <HamburgerIconNavigation navigation={navigation} />
      })
    }
  },
  {
    cardStyle: platformSupportCardStyle
  }
);

SupplementsHistoryTab.viewName = "SupplementsHistoryTab";

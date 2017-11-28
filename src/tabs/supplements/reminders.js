import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementsRemindersLabel } from "../../constants/labels";
import { SupplementRemindersView } from "../../views/supplements/reminders";

export const SupplementsRemindersTab = StackNavigator({
  [SupplementRemindersView.name]: {
    screen: SupplementRemindersView,
    path: `/${SupplementRemindersView.name}`,
    navigationOptions: ({ navigation }) => ({
      title: SupplementsRemindersLabel,
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  }
});

SupplementsRemindersTab.viewName = "SupplementsRemindersTab";

import React from "react";

import { StackNavigator } from "react-navigation";
import { HamburgerIconNavigation } from "../../constants/icons";
import { SupplementRemindersView } from "../../views/supplements/reminders";

export const SupplementsRemindersTab = StackNavigator({
  [SupplementRemindersView.name]: {
    screen: SupplementRemindersView,
    path: `/${SupplementRemindersView.name}`,
    navigationOptions: ({ navigation }) => ({
      title: "Reminders",
      headerLeft: <HamburgerIconNavigation navigation={navigation} />
    })
  }
});

SupplementsRemindersTab.viewName = "SupplementsRemindersTab";

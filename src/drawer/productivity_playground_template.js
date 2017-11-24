import Expo from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Playground from "../views/playground";

const DrawerLabel = "Productivity Template";

const PlaygroundDrawerItem = StackNavigator({
  Playground: {
    screen: Playground,
    navigationOptions: ({ navigation }) => ({
      title: DrawerLabel,
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      )
    })
  }
});

PlaygroundDrawerItem.navigationOptions = {
  drawerLabel: DrawerLabel,
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="brush"
      size={25}
      iconStyle={{
        width: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
      }}
      type="material"
      color={tintColor}
    />
  )
};

export default PlaygroundDrawerItem;

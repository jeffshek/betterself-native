import React, { Component } from "react";
import { AsyncStorage, View } from "react-native";
import { LogoutIcon, SupplementsIcon } from "../../constants/icons";
import { LoginView } from "./login";
import Expo from "expo";

export class LogoutView extends Component {
  static viewName = "LogoutView";

  static navigationOptions = {
    label: "Logout",
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => <LogoutIcon tintColor={tintColor} />
  };

  componentDidMount() {
    const { navigation } = this.props;
    AsyncStorage.clear().then(response => {
      navigation.navigate(LoginView.viewName);
    });
  }

  render() {
    return <View />;
  }
}

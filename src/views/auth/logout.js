import React, { Component } from "react";
import { AsyncStorage, View } from "react-native";
import { SupplementsIcon } from "../../constants/icons";
import { LoginView } from "./login";
import Expo from "expo";

export class LogoutView extends Component {
  static viewName = "LogoutView";

  static navigationOptions = {
    label: "Logout",
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => <SupplementsIcon tintColor={tintColor} />
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

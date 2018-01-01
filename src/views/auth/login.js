import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Expo from "expo";
import t from "tcomb-form-native"; // 0.6.9
import colors from "HSColors";
import { login } from "../../services/api/api";
import { AsyncStorage } from "react-native";
import { SupplementsTabNavigator } from "../../drawer/supplements";

const Form = t.form.Form;

const LoginForm = t.struct({
  username: t.String,
  password: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    username: {
      autoCorrect: false,
      autoCapitalize: "none"
    },
    password: {
      secureTextEntry: true,
      autoCorrect: false,
      autoCapitalize: "none"
    }
  },
  stylesheet: formStyles
};

export class LoginView extends Component {
  static viewName = "LoginView";

  handleSubmit = async () => {
    const { navigate } = this.props.navigation;
    const value = this._form.getValue();

    //const username = value["username"];
    //const password = value["password"];

    // Clear all previous tokens first
    //await AsyncStorage.clear()

    // Hardcode this for much faster testing
    const username = "potato";
    const password = "baconbacon";

    login(username, password).then(async e => {
      const loggedIn = await AsyncStorage.getItem("token");
      if (loggedIn) {
        navigate(SupplementsTabNavigator.viewName);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Image
            source={require("../../images/color_logo_transparent_background_small.png")}
            resizeMode="contain"
            style={styles.loginLogo}
          />
        </View>
        <View style={styles.form}>
          <Form ref={c => this._form = c} type={LoginForm} options={options} />
          <Button
            large
            icon={{ name: "cached" }}
            title="Login!"
            backgroundColor={colors.backgroundColorComplimentary}
            style={styles.buttonStyle}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginLogo: {
    marginBottom: 30
  },
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: colors.white,
    flex: 1
  },
  form: {
    justifyContent: "center",
    backgroundColor: colors.white
  },
  heading: {
    color: colors.primary,
    marginTop: 30,
    fontSize: 25
  },
  buttonStyle: {
    marginTop: 20
  },
  topHalf: {
    justifyContent: "center",
    alignItems: "center"
  }
});

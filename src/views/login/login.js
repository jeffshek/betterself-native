import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Expo from "expo";
import t from "tcomb-form-native"; // 0.6.9
import colors from "HSColors";
import { login } from "../../services/api/api";

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

  handleSubmit = () => {
    const value = this._form.getValue();

    const username = value["username"];
    const password = value["password"];

    login(username, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Image
            source={require("../../images/color_logo_transparent_background_small.png")}
            resizeMode="contain"
            style={styles.betterSelfLogo}
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
  betterSelfLogo: {
    marginBottom: 30
  },
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "white",
    flex: 1
  },
  form: {
    justifyContent: "center",
    backgroundColor: "white"
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

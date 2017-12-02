import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";

import t from "tcomb-form-native"; // 0.6.9
import colors from "HSColors";

const Form = t.form.Form;

const User = t.struct({
  email: t.maybe(t.String),
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: colors.primary,
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occurs
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
    email: {
      error: "Without an email address how are you going to reset your password when you forget it?"
    },
    password: {
      error: "Choose something you use on a dozen other sites or something you won't remember"
    },
    terms: {
      label: "Agree to Terms"
    }
  },
  stylesheet: formStyles
};

export class SignupView extends Component {
  static viewName = "SignupView";

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={require("../../images/color_logo_transparent_background_small.png")}
            resizeMode="contain"
            style={styles.betterSelfLogo}
          />
        </View>
        <View style={styles.form}>
          <Form ref={c => this._form = c} type={User} options={options} />
          <Button
            large
            icon={{ name: "cached" }}
            title="Sign Up!"
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
    //fontWeight: 35
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    color: colors.primary
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

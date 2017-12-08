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

export class LandingView extends Component {
  static viewName = "LandingView";

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <View />
        <View style={styles.flexContainer}>
          <Image
            source={require("../../images/apple-and-a-clipboard-with-notes-for-gymnast-diet-control.png")}
            resizeMode="cover"
            style={styles.betterSelfLogo}
          />
          <Text style={styles.heading}>
            Welcome to BetterSelf.
          </Text>
          {/*<Text style={styles.heading}>*/}
          {/*Welcome to your body's dashboard.*/}
          {/*</Text>*/}
        </View>
        <View />
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center"
  },
  betterSelfLogo: {
    marginTop: 80,
    marginBottom: 10,
    marginLeft: -10
  },
  container: {
    //justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: colors.background,
    flex: 3
  },
  heading: {
    color: "white",
    marginTop: 0,
    fontSize: 25,
    fontFamily: "Avenir"
  },
  buttonStyle: {
    marginTop: 20
    //fontWeight: 35
  },
  hero: {
    //justifyContent: "center",
    //alignItems: "center",
    //padding: 40
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

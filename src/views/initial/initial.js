import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { Button, Card } from "react-native-elements";
import Expo from "expo";

import t from "tcomb-form-native"; // 0.6.9
import colors from "HSColors";
import SocialIcon from "react-native-elements/src/social/SocialIcon";
import { fontFamilySelection } from "../../config/fonts";

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
        <View>
          <Text style={styles.loginStyle}>
            Log in
          </Text>
        </View>
        <View style={styles.flexContainer}>
          <Image
            source={require("../../images/apple-and-a-clipboard-with-notes-for-gymnast-diet-control-64.png")}
            resizeMode="cover"
            style={styles.betterSelfLogo}
          />
          <Text style={styles.heading}>
            Welcome to BetterSelf.
          </Text>
        </View>
        <View style={styles.flexContainer}>
          <SocialIcon
            title="Continue with Google"
            light
            button
            fontWeight="400"
            fontStyle={styles.defaultFontStyle}
            type="google"
          />
          <SocialIcon
            title="Continue With Facebook"
            button
            fontWeight="400"
            type="facebook"
          />
          <SocialIcon
            title="Continue With GitHub"
            button
            fontWeight="400"
            type="github"
          />
          <SocialIcon
            title="Create Account"
            button
            fontWeight="400"
            underlayColor="black"
            //fontFamily="Avenir"
            style={styles.socialIcon}
            fontStyle={styles.defaultFontStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginStyle: {
    marginTop: 0,
    color: "white",
    textAlign: "right",
    fontFamily: fontFamilySelection()
  },
  defaultFontStyle: {
    color: colors.background
  },
  socialIcon: {
    backgroundColor: "white"
  },
  flexContainer: {
    marginTop: 0
    //justifyContent: "center"
  },
  betterSelfLogo: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10
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
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 25,
    fontFamily: fontFamilySelection()
  },
  buttonStyle: {
    marginTop: 20
    //fontWeight: 35
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

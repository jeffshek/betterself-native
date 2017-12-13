import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import Expo from "expo";

import colors from "HSColors";
import SocialIcon from "react-native-elements/src/social/SocialIcon";
import { fontFamilySelection } from "../../config/fonts";
import { SignupView } from "./signup";
import { LoginView } from "./login";

export class LandingView extends Component {
  static viewName = "LandingView";

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={styles.loginStyleText}
            onPress={() => navigate(LoginView.viewName)}
          >
            Log in
          </Text>
        </View>
        <View style={styles.flexContainer}>
          <Image
            source={require("../../images/apple-and-a-clipboard-with-notes-for-gymnast-diet-control-256.png")}
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
            fontStyle={styles.socialIconWhiteText}
            type="google"
          />
          <SocialIcon
            title="Continue With Facebook"
            button
            fontStyle={styles.socialRowFontStyle}
            fontWeight="400"
            type="facebook"
          />
          <SocialIcon
            title="Continue With GitHub"
            button
            fontWeight="400"
            type="github"
            fontStyle={styles.socialRowFontStyle}
          />
          <SocialIcon
            title="Create Account"
            button
            fontWeight="400"
            underlayColor="black"
            style={styles.socialIcon}
            fontStyle={styles.socialIconWhiteText}
            onPress={() => navigate(SignupView.viewName)}
          />
        </View>
      </View>
    );
  }
}

const socialIconFontSize = 15;

const styles = StyleSheet.create({
  loginStyleText: {
    marginTop: 15,
    color: "white",
    textAlign: "right",
    fontFamily: fontFamilySelection(),
    fontSize: 20
  },
  socialIconWhiteText: {
    color: colors.background,
    fontSize: socialIconFontSize
  },
  socialIcon: {
    backgroundColor: "white"
  },
  flexContainer: {
    marginTop: 0
  },
  betterSelfLogo: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    width: 64,
    height: 64
  },
  container: {
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
  socialRowFontStyle: {
    fontSize: socialIconFontSize
  }
});

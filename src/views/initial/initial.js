import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { Icon } from "react-native-elements";
import { Button, Card } from "react-native-elements";
import Expo from "expo";

import t from "tcomb-form-native"; // 0.6.9
import colors from "HSColors";
import SocialIcon from "react-native-elements/src/social/SocialIcon";
import { fontFamilySelection } from "../../config/fonts";

export class LandingView extends Component {
  static viewName = "Home";

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.loginStyleText}>
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
    //justifyContent: "center"
  },
  betterSelfLogo: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    width: 64,
    height: 64
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
  //title: {
  //  textAlign: "center",
  //  color: colors.primary
  //},
  //socialRow: {
  //  flexDirection: "row",
  //  justifyContent: "space-around"
  //},
  socialRowFontStyle: {
    fontSize: socialIconFontSize
  }
});

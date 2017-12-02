import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Icon } from "react-native-elements";

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
      color: "white",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
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

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export class SignupView extends Component {
  static viewName = "SignupView";

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        {/*<Card title="CARD WITH DIVIDER">*/}
        {/*{*/}
        {/*users.map((u, i) => {*/}
        {/*return (*/}
        {/*<View key={i} style={styles.user}>*/}
        {/*<Image*/}
        {/*//style={styles.image}*/}
        {/*resizeMode="cover"*/}
        {/*source={{uri: u.avatar}}*/}
        {/*/>*/}
        {/*<Text style={styles.name}>{u.name}</Text>*/}
        {/*</View>*/}
        {/*);*/}
        {/*})*/}
        {/*}*/}
        {/*</Card>*/}
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Sign Up</Text>
        </View>
        <View style={styles.form}>
          <Form ref={c => this._form = c} type={User} options={options} />
          <Button title="Sign Up!" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: colors.background,
    flex: 1
  },
  form: {
    justifyContent: "center",
    backgroundColor: colors.background
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: colors.background
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    color: colors.grey2
    //...Platform.select({
    //  ios: {
    //    fontFamily: fonts.ios.black,
    //  },
    //}),
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
//
//const styles = StyleSheet.create({
//
//});

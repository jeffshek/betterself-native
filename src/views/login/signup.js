import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from "react-native";
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
    username: {
      help: 'Between 4-32 Characters. You can make it whatever you want. Just not "JustinBieber". That\'s taken.'
    },
    email: {
      help: "Used for password resets. It's oddly our most requested feature. Says a lot about self-improvement."
    },
    password: {
      help: "Minimum of eight characters. Think of it as protection from noisy neighbors. If you have more than eight noisy neighbors, you should probably move."
    },
    terms: {
      label: "Agree to Terms"
    }
  },
  stylesheet: formStyles
};

export class SignupView extends Component {
  static viewName = "SignupView";

  // Android comes with a default back button
  // but iOS doesn't - so debate whatever feels better

  //static navigationOptions = {
  //  header: null
  //};

  handleSubmit = () => {
    const value = this._form.getValue();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
    backgroundColor: "white",
    flex: 2
  },
  form: {
    backgroundColor: "white"
  },
  buttonStyle: {
    marginTop: 20
  },
  hero: {
    alignItems: "center",
    padding: 40
  }
});

import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import colors from "HSColors";
import t from "tcomb-form-native";
import {
  createSupplement,
  createSupplementStack
} from "../../services/api/api";
import { SupplementsAndStacksSelectionView } from "./selection";

const Form = t.form.Form;

const SupplementStack = t.struct({
  name: t.String
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
    name: {
      label: "Supplement Stack Name",
      help: "Energy Stack, Sleep, Over 9000, etc.",
      autoCapitalize: "none"
    }
  },
  stylesheet: formStyles
};

export class CreateSupplementStackView extends Component {
  static viewName = "CreateSupplementStackView";

  constructor() {
    super();
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    const value = this._form.getValue();
    const name = value["name"];

    let parameters = {
      name: name
    };

    createSupplementStack(parameters).then(responseData => {
      navigation.navigate(SupplementsAndStacksSelectionView.viewName);
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <Form
            ref={c => this._form = c}
            type={SupplementStack}
            options={options}
          />
          <Button
            large
            icon={{ name: "cached" }}
            title="Create Stack!"
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
    padding: 10,
    backgroundColor: "white",
    flex: 1
  },
  form: {
    backgroundColor: "white"
  },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 40
  }
});

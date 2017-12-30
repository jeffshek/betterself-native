import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import colors from "HSColors";
import t from "tcomb-form-native";
import { createSupplement } from "../../services/api/api";
import { SupplementsAndStacksSelectionView } from "./selection";

const Form = t.form.Form;

const Supplement = t.struct({
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
      label: "Supplement Name",
      help: "Supplement or medication name. If your mates are noisy and go through your phone (losers), name it Waffles. And then get new friends.",
      autoCapitalize: "none"
    }
  },
  stylesheet: formStyles
};

export class CreateSupplementView extends Component {
  static viewName = "CreateSupplementView";

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

    createSupplement(parameters).then(responseData => {
      navigation.navigate(SupplementsAndStacksSelectionView.viewName);
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <Form ref={c => this._form = c} type={Supplement} options={options} />
          <Button
            large
            icon={{ name: "cached" }}
            title="Create Supplement!"
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

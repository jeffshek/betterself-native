import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { FormLabel, FormInput, Text } from "react-native-elements";
import t from "tcomb-form-native";
import colors from "HSColors";

const Form = t.form.Form;

const log = input => {
  console.log(input);
};

const SupplementLogModel = t.struct({
  quantity: t.Number,
  time: t.Date
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
      color: "#193441",
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

const defaultValues = {
  quantity: 1
};

const options = {
  fields: {
    quantity: {
      error: "Let's try and keep it below 9000."
    },
    time: {
      mode: "datetime",
      error: "It's time for you to get a watch instead of a smartphone. Invalid time entered."
      // At the moment you can't change datetime formats
      //config: {
      //  format: datetimeFormat("DD MMM YYYY")
      //}
    }
  },
  stylesheet: formStyles
};

export class SupplementLogView extends Component {
  static viewName = "SupplementLogView";

  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;
    const pageName = navigation.state.params.name;
    const pageNameIncludedStack = pageName.toLowerCase().includes("stack");
    const postFix = pageNameIncludedStack ? "" : " Stack";

    return (
      <View style={styles.container}>
        <View style={styles.shadedContainer}>
          <Text h2 style={styles.title}>
            Log {navigation.state.params.name} {postFix}
          </Text>
        </View>
        <Form
          ref={c => this._form = c}
          type={SupplementLogModel}
          options={options}
          value={defaultValues}
        />
        <Button title="Log Stack!" onPress={log} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 30
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#193441"
  },
  shadedContainer: {},
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

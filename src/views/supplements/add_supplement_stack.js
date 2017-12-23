import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Text } from "react-native-elements";
import t from "tcomb-form-native";
import { postSupplementStackLog } from "../../services/api/api";
import { SupplementSelectionView } from "./selection";

const Form = t.form.Form;

const SupplementStackModel = t.struct({
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

const options = {
  fields: {
    quantity: {
      error: "Let's try and keep it below 9000."
    },
    time: {
      mode: "datetime",
      error: "It's time for you to get a watch instead of a smartphone. Invalid time entered."
      // At the moment you can't change datetime formats, only dates. So this is worthless
      //config: {
      //  format: datetimeFormat("DD MMM YYYY")
      //}
    }
  },
  stylesheet: formStyles
};

export class AddSupplementStackView extends Component {
  static viewName = "AddSupplementStackView";

  constructor() {
    super();
  }

  submitSupplementStackLog = () => {
    const { navigation } = this.props;
    const formValues = this.refs.form.getValue();
    const time = formValues["time"];
    const supplementStackUUID = this.props.navigation.state.params.uuid;

    const postParams = {
      stack_uuid: supplementStackUUID,
      time: time,
      source: "mobile"
    };

    postSupplementStackLog(postParams).then(responseData => {
      {
        navigation.navigate(SupplementSelectionView.viewName);
      }
    });
  };

  render() {
    const { navigation } = this.props;
    const pageName = navigation.state.params.name.trim();
    const pageNameIncludedStack = pageName.toLowerCase().includes("stack");
    const postFix = pageNameIncludedStack ? "" : "Stack";

    return (
      <View style={styles.container}>
        <View>
          <Text h3 style={styles.title}>
            {navigation.state.params.name} {postFix}
          </Text>
          <Text style={styles.subTitle}>
            Composition
          </Text>
          <Text style={styles.composition}>
            {navigation.state.params.description}
          </Text>
        </View>
        <Form ref="form" type={SupplementStackModel} options={options} />
        <Button title="Log Stack!" onPress={this.submitSupplementStackLog} />
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
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#193441"
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#193441",
    marginBottom: 5
  },
  composition: {
    marginBottom: 20
  },
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

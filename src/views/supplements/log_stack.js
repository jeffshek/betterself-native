import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { FormLabel, FormInput, Text } from "react-native-elements";
import t from "tcomb-form-native";
import { postSupplementLog } from "../../services/api/api";

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
      // At the moment you can't change datetime formats, only dates. So this is worthless
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

  submitSupplementLog = () => {
    const formValues = this.refs.form.getValue();
    console.log(formValues);
    const quantity = formValues["quantity"];
    const time = formValues["time"];
    //console.log(this.props.navigation.state.params)
    const supplementUUID = this.props.navigation.state.params.uuid;

    //const postParams = {
    //  supplement_uuid: supplementUUID,
    //  quantity: quantity,
    //  time: time,
    //  source: source,
    //  duration_minutes: durationMinutes,
    //  notes: notes
    //};

    const postParams = {
      quantity: quantity,
      supplement_uuid: supplementUUID,
      time: time,
      source: "mobile",
      notes: "cheese"
    };

    postSupplementLog(postParams).then(responseData => {
      console.log(responseData);
    });

    //console.log(postParams)
  };

  render() {
    const { navigation } = this.props;
    //console.log(navigation.state.params)
    const pageName = navigation.state.params.name.trim();
    const pageNameIncludedStack = pageName.toLowerCase().includes("stack");
    const postFix = pageNameIncludedStack ? "" : "Stack";

    return (
      <View style={styles.container}>
        <View>
          <Text h3 style={styles.title}>
            Log {navigation.state.params.name} {postFix}
          </Text>
        </View>
        <Form
          ref="form"
          type={SupplementLogModel}
          options={options}
          value={defaultValues}
        />
        <Button title="Log Stack!" onPress={this.submitSupplementLog} />
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
  container: {
    justifyContent: "center",
    marginTop: 0,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

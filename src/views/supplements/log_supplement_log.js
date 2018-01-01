import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { Text } from "react-native-elements";
import t from "tcomb-form-native";
import { deleteSupplement, postSupplementLog } from "../../services/api/api";
import { SupplementsAndStacksSelectionView } from "./selection";
import colors from "HSColors";
import { DeleteButton, GroupedButtonsStyles, LogButton } from "./constants";

// This file name is kind of stupid, sorry.

const Form = t.form.Form;

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

const defaultValues = {
  quantity: 1
};

const options = {
  fields: {
    quantity: {
      error: "Let's try and keep it below 9000."
    },
    time: {
      label: "Log Time",
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

export class LogSupplementLogView extends Component {
  static viewName = "LogSupplementLogView";

  submitSupplementLog = () => {
    const { navigation } = this.props;
    const formValues = this.refs.form.getValue();
    const quantity = formValues["quantity"];
    const time = formValues["time"];
    const supplementUUID = this.props.navigation.state.params.uuid;

    const postParams = {
      quantity: quantity,
      supplement_uuid: supplementUUID,
      time: time,
      source: "mobile"
    };

    postSupplementLog(postParams).then(() => {
      {
        navigation.navigate(SupplementsAndStacksSelectionView.viewName);
      }
    });
  };

  handleRemove = () => {
    const { navigation } = this.props;
    const supplement = navigation.state.params;

    const alertMsg = `WARNING : This will delete ${supplement.name} and ALL previous EVENTS related to this supplement forever.`;

    Alert.alert(
      "Warning!",
      alertMsg,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "OK", onPress: this.confirmDeleteSupplement }
      ],
      { cancelable: true }
    );
  };

  confirmDeleteSupplement = () => {
    const { navigation } = this.props;
    const supplement = navigation.state.params;

    const params = { uuid: supplement.uuid };
    deleteSupplement(params).then(response => {
      navigation.navigate(SupplementsAndStacksSelectionView.viewName);
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text h3 style={styles.title}>
            Log {navigation.state.params.name}
          </Text>
        </View>
        <Form
          ref="form"
          type={SupplementLogModel}
          options={options}
          value={defaultValues}
        />
        <View style={GroupedButtonsStyles.groupedButtons}>
          <DeleteButton title={"Remove"} onPress={this.handleRemove} />
          <LogButton title={"Log Event"} onPress={this.submitSupplementLog} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: colors.white,
    marginTop: 10,
    fontSize: 30
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 0,
    padding: 20,
    backgroundColor: colors.alternative
  }
});

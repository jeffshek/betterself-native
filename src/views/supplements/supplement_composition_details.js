import Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import colors from "HSColors";
import t from "tcomb-form-native";
import { createSupplement } from "../../services/api/api";
import { SupplementsAndStacksSelectionView } from "./selection";
import { FONT_SIZE, FONT_WEIGHT } from "../../config/forms";
import {
  TitleWithWhiteBackground,
  WhiteHeaderText
} from "../../constants/labels";
import { getCleanedStackLabel, LogButton } from "./constants";

const Form = t.form.Form;

const SupplementComposition = t.struct({
  quantity: t.String
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
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occurs
    error: {
      color: "red",
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  }
};

const options = {
  fields: {
    quantity: {
      help: "Updated quantity of this particular supplement in this stack"
    }
  },
  stylesheet: formStyles
};

export class SupplementCompositionDetailView extends Component {
  static viewName = "SupplementCompositionDetailView";

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
    const { navigation } = this.props;
    const { stack, composition } = navigation.state.params;
    const stackLabel = getCleanedStackLabel(stack.name);
    const updateLabel = `Update ${composition.supplement.name} Details`;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <TitleWithWhiteBackground label={stackLabel} />
        </View>
        <View style={styles.headerContainerWithBackground}>
          <WhiteHeaderText headerText={updateLabel} />
        </View>
        <View style={styles.form}>
          <Form
            ref={c => this._form = c}
            type={SupplementComposition}
            options={options}
          />
          <View style={styles.groupedButtons}>
            <LogButton title={"Delete"} onPress={this.handleSubmit} />
            <LogButton title={"Update"} onPress={this.handleSubmit} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  groupedButtons: {
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.alternative,
    flex: 1
  },
  form: {
    padding: 10,
    backgroundColor: colors.alternative
  },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 40
  },
  headerContainerWithBackground: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});

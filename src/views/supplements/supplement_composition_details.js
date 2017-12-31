import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "HSColors";
import t from "tcomb-form-native";
import {
  deleteSupplementComposition,
  updateSupplementComposition
} from "../../services/api/api";
import { FONT_SIZE, FONT_WEIGHT } from "../../config/forms";
import {
  TitleWithWhiteBackground,
  WhiteHeaderText
} from "../../constants/labels";
import { DeleteButton, getCleanedStackLabel, LogButton } from "./constants";
import {
  getUpdatedSupplementStackAndNavigate
} from "../../services/api/navigate_utils";
import Expo from "expo";
import colors from "HSColors";

const Form = t.form.Form;

const SupplementComposition = t.struct({
  quantity: t.Number
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
      color: colors.error,
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

  handleRemove = () => {
    const { navigation } = this.props;
    const { stack, composition } = navigation.state.params;
    const params = { uuid: composition.uuid };

    deleteSupplementComposition(params).then(responseData => {
      getUpdatedSupplementStackAndNavigate(stack, navigation);
    });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { stack, composition } = navigation.state.params;
    const value = this._form.getValue();
    const quantity = value["quantity"];

    let parameters = {
      quantity: quantity,
      uuid: composition.uuid
    };

    updateSupplementComposition(parameters).then(responseData => {
      getUpdatedSupplementStackAndNavigate(stack, navigation);
    });
  };

  render() {
    const { navigation } = this.props;
    const { stack, composition } = navigation.state.params;
    const stackLabel = getCleanedStackLabel(stack.name);
    const updateLabel = `Update ${composition.supplement.name} Details`;
    const previousQuantity = { quantity: composition.quantity };

    return (
      <ScrollView style={styles.container}>
        <View>
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
            value={previousQuantity}
          />
          <View style={styles.groupedButtons}>
            <DeleteButton title={"Remove"} onPress={this.handleRemove} />
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
    justifyContent: "space-around",
    marginBottom: 10
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

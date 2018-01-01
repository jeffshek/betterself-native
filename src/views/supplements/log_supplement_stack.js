import Expo from "expo";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Text, List, ListItem, Button } from "react-native-elements";
import t from "tcomb-form-native";
import {
  getSupplementStacks,
  postSupplementStackLog
} from "../../services/api/api";
import { SupplementsAndStacksSelectionView } from "./selection";
import colors from "HSColors";
import {
  INDIVIDUAL_VITAMIN,
  MEDICINE_IMAGE
} from "../../../assets/icons/constants";
import {
  CreateSupplementCompositionView
} from "./create_supplement_composition";
import {
  AddNewPill,
  AddSupplementListItem,
  getCleanedStackLabel,
  ListItemStyles,
  LogButton
} from "./constants";
import {
  SupplementCompositionDetailView
} from "./supplement_composition_details";
import {
  TitleWithWhiteBackground,
  WhiteHeaderText
} from "../../constants/labels";
import { refreshStackDetails } from "../../services/api/navigate_utils";

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
      padding: 12,
      color: colors.alternative,
      backgroundColor: colors.background,
      fontSize: 20,
      marginBottom: 7
    },
    // the style applied when a validation error occurs
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7
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

export class LogSupplementStackView extends Component {
  static viewName = "LogSupplementStackView";

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      stack: this.props.navigation.state.params
    };
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    refreshStackDetails(this.state.stack).then(responseData => {
      this.setState({
        refreshing: false,
        stack: responseData
      });
    });
  }

  submitSupplementStackLog = () => {
    const { navigation } = this.props;
    const formValues = this.refs.form.getValue();
    const time = formValues["time"];
    const supplementStackUUID = navigation.state.params.uuid;

    const postParams = {
      stack_uuid: supplementStackUUID,
      time: time,
      source: "mobile"
    };

    postSupplementStackLog(postParams).then(responseData => {
      {
        navigation.navigate(SupplementsAndStacksSelectionView.viewName);
      }
    });
  };

  render() {
    const { navigation } = this.props;
    const stack = navigation.state.params;
    const stackLabel = getCleanedStackLabel(navigation.state.params.name);
    const createSupplementCompositionRoute =
      CreateSupplementCompositionView.viewName;
    const stackComposition = navigation.state.params;
    const routeName = SupplementCompositionDetailView.viewName;

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
        <TitleWithWhiteBackground label={stackLabel} />
        <View style={styles.headerContainerWithBackground}>
          <WhiteHeaderText headerText={"Stack Compositions"} />
          <Text />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                createSupplementCompositionRoute,
                stackComposition
              )}
          >
            <AddNewPill />
          </TouchableOpacity>
        </View>
        <List>
          {this.state.stack.compositions.map((composition, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={ListItemStyles.avatarStyle}
              onPress={() =>
                navigation.navigate(routeName, {
                  composition: composition,
                  stack: stack
                })}
              title={composition.supplement.name}
              subtitle={composition.description}
            />
          ))}
          <AddSupplementListItem
            title={"Include Additional Supplement"}
            onPress={() =>
              navigation.navigate(
                createSupplementCompositionRoute,
                stackComposition
              )}
          />
        </List>
        <Form ref="form" type={SupplementStackModel} options={options} />
        <LogButton
          title={"Log Stack"}
          onPress={this.submitSupplementStackLog}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainerWithBackground: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

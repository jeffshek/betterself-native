import Expo from "expo";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Text, List, ListItem } from "react-native-elements";
import t from "tcomb-form-native";
import { postSupplementStackLog } from "../../services/api/api";
import { SupplementSelectionView } from "./selection";
import colors from "HSColors";
import {
  ADD_NEW_PILL_IMAGE,
  INDIVIDUAL_VITAMIN,
  MEDICINE_IMAGE
} from "../../../assets/icons/constants";
import {
  CreateSupplementCompositionView
} from "./create_supplement_composition";

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
      color: "white",
      backgroundColor: "#193441",
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

export class AddSupplementStackLogView extends Component {
  static viewName = "AddSupplementStackLogView";

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

    const createSupplementCompositionRoute =
      CreateSupplementCompositionView.viewName;
    const stackComposition = navigation.state.param;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text h3 style={styles.title}>
            {navigation.state.params.name} {postFix}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Stack Compositions</Text>
          <Text />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                createSupplementCompositionRoute,
                stackComposition
              )}
          >
            <Image
              source={ADD_NEW_PILL_IMAGE}
              resizeMode="cover"
              style={styles.createNewSupplement}
            />
          </TouchableOpacity>
        </View>
        <List>
          {navigation.state.params.compositions.map((l, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={styles.avatarStyle}
              onPress={() => navigation.navigate(routeName, l)}
              title={l.supplement.name}
              subtitle={l.description}
            />
          ))}
          <ListItem
            avatar={MEDICINE_IMAGE}
            title={"Add Supplement to Stack"}
            avatarStyle={styles.avatarStyle}
          />
        </List>
        <Form ref="form" type={SupplementStackModel} options={options} />
        <Button title="Log Stack!" onPress={this.submitSupplementStackLog} />
      </ScrollView>
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
    fontSize: 30,
    marginBottom: 20,
    color: "#193441"
  },
  composition: {
    marginBottom: 20
  },
  container: {
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#ffffff"
  },
  headerContainer: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    color: "white",
    marginTop: 0,
    fontSize: 20
  },
  createNewSupplement: {
    height: 32,
    width: 32,
    alignSelf: "flex-end"
  },
  avatarStyle: {
    backgroundColor: "white"
  }
});

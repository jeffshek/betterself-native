import { getSupplements } from "../../services/api/api";
import t from "tcomb-form-native";
import Expo from "expo";
import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { List, ListItem, Text } from "react-native-elements";

import colors from "HSColors";
import { getCleanedStackLabel } from "./constants";
import { INDIVIDUAL_VITAMIN } from "../../../assets/icons/constants";

// Show a list of Supplements
// They select one, it creates the request then tells navigation to go back to the previous page

//const Form = t.form.Form;
//const QuantityForm = t.struct({
//  quantity: t.Number,
//});

//const formStyles = {
//  ...Form.stylesheet,
//  formGroup: {
//    normal: {
//      marginTop: 0,
//      marginBottom: 0
//    }
//  },
//  controlLabel: {
//    normal: {
//      color: colors.primary,
//      fontSize: 18,
//      marginBottom: 0,
//      fontWeight: "600"
//    },
//    // the style applied when a validation error occurs
//    error: {
//      color: "red",
//      fontSize: 18,
//      marginBottom: 7,
//      fontWeight: "600"
//    }
//  }
//};
//
//const defaultValues = {
//  quantity: 1
//};
//
//const options = {
//  fields: {
//    quantity: {
//      label: "Quantity",
//      error: "Let's try and keep it below 9000."
//    },
//  },
//  stylesheet: formStyles
//};

export class CreateSupplementCompositionView extends Component {
  static viewName = "CreateSupplementCompositionView";

  constructor() {
    super();

    this.state = {
      supplements: []
    };
  }

  componentDidMount() {
    getSupplements().then(results => {
      this.setState({
        supplements: results
      });
    });
  }

  render() {
    const { navigation } = this.props;
    const stackLabel = getCleanedStackLabel(navigation.state.params.name);

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text h3 style={styles.title}>
            {stackLabel}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add Supplement to {stackLabel}</Text>
        </View>
        <List>
          {this.state.supplements.map((l, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={styles.avatarStyle}
              onPress={() => navigation.navigate(routeName, l)}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: colors.alternative
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    color: colors.background
  },
  headerContainer: {
    padding: 10,
    marginTop: 0,
    marginBottom: 0,
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
  avatarStyle: {
    backgroundColor: colors.alternative
  }
});

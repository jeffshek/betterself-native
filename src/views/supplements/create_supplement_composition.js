import {
  createSupplement,
  createSupplementComposition,
  getSupplements,
  getSupplementStacksByFilters
} from "../../services/api/api";
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
import { AddSupplementListItem, getCleanedStackLabel } from "./constants";
import { INDIVIDUAL_VITAMIN } from "../../../assets/icons/constants";
import { SupplementsAndStacksSelectionView } from "./selection";
import { LogSupplementStackView } from "./log_supplement_stack";
import { CreateSupplementView } from "./create_supplement";

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
      // It would be silly to show supplements that are already in the stack ... kind of a waste of time
      const { navigation } = this.props;
      const supplementUUIDsAlreadyInStack = navigation.state.params.compositions.map(
        object => {
          return object.supplement.uuid;
        }
      );
      const supplementsThatCouldBeAddedToStack = results.filter(object => {
        return !supplementUUIDsAlreadyInStack.includes(object.uuid);
      });
      this.setState({
        supplements: supplementsThatCouldBeAddedToStack
      });
    });
  }

  handleSubmit = supplement => {
    const { navigation } = this.props;
    const stackUUID = navigation.state.params.uuid;

    const parameters = {
      stack_uuid: stackUUID,
      supplement_uuid: supplement.uuid
    };

    createSupplementComposition(parameters).then(responseData => {
      const filterParams = { uuid: stackUUID };

      getSupplementStacksByFilters(filterParams).then(responseData => {
        const updatedStack = responseData[0];
        navigation.navigate(LogSupplementStackView.viewName, updatedStack);
      });
    });
  };

  renderIfNoSupplements = () => {
    const { navigation } = this.props;

    // if no supplements are listed on the stack, maybe let's give them the ability to add a new supplement
    return (
      <AddSupplementListItem
        title={"Create New Supplement!"}
        subtitle={"No Supplements Exist"}
        onPress={() => navigation.navigate(CreateSupplementView.viewName)}
      />
    );
  };

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
          <Text style={styles.headerText}>Add Supplement to This Stack</Text>
        </View>
        <List>
          {this.state.supplements.map((supplement, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={styles.avatarStyle}
              onPress={() => {
                this.handleSubmit(supplement);
              }}
              title={supplement.name}
              subtitle={supplement.subtitle}
            />
          ))}
          {this.renderIfNoSupplements()}
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
    padding: 10,
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
    fontSize: 15
  },
  avatarStyle: {
    backgroundColor: colors.alternative
  }
});

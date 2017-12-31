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
import {
  AddSupplementListItem,
  getCleanedStackLabel,
  ListItemStyles
} from "./constants";
import { INDIVIDUAL_VITAMIN } from "../../../assets/icons/constants";
import { SupplementsAndStacksSelectionView } from "./selection";
import { LogSupplementStackView } from "./log_supplement_stack";
import { CreateSupplementView } from "./create_supplement";
import { HeaderText } from "../../config/fontsAndSizes";

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

  renderAddNewSupplement = () => {
    const { navigation } = this.props;

    return (
      <AddSupplementListItem
        title={"Create A Supplement"}
        subtitle={"No Additional Supplements Exist"}
        onPress={() => navigation.navigate(CreateSupplementView.viewName)}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const stackLabel = getCleanedStackLabel(navigation.state.params.name);

    return (
      <ScrollView style={styles.flexOne}>
        <View style={styles.container}>
          <Text h3 style={styles.title}>
            {stackLabel}
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <HeaderText label={"Add Supplement to This Stack"} />
        </View>
        <List>
          {this.state.supplements.map((supplement, i) => (
            <ListItem
              key={i}
              avatar={INDIVIDUAL_VITAMIN}
              avatarStyle={ListItemStyles.avatarStyle}
              onPress={() => {
                this.handleSubmit(supplement);
              }}
              title={supplement.name}
              subtitle={supplement.subtitle}
            />
          ))}
          {this.renderAddNewSupplement()}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flexOne: {
    backgroundColor: colors.alternative
  },
  container: {
    justifyContent: "center",
    marginTop: 0
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
  }
});

// This will be a view with a list of supplements - review selection.js

import { getSupplements } from "../../services/api/api";
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

// Show a list of Supplements
// They select one, it creates the request then tells navigation to go back to the previous page

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
    return <View />;
  }
}

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { List, ListItem, Text } from "react-native-elements";

export const TitleText = ({ label }) => {
  return (
    <Text h3 style={styles.title}>
      {label}
    </Text>
  );
};

export const HeaderText = ({ label }) => {
  return (
    <Text h3 style={styles.headerText}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    marginTop: 0,
    fontSize: 20
  }
});

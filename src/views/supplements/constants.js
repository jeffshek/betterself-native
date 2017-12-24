import React from "react";
import { Image, StyleSheet } from "react-native";
import { ADD_NEW_PILL_IMAGE } from "../../../assets/icons/constants";

export const AddNewPill = () => {
  return (
    <Image
      source={ADD_NEW_PILL_IMAGE}
      resizeMode="cover"
      style={styles.createNewSupplement}
    />
  );
};

const styles = StyleSheet.create({
  createNewSupplement: {
    height: 32,
    width: 32,
    alignSelf: "flex-end"
  }
});

export const getCleanedStackLabel = stackName => {
  const stackNameTrim = stackName.trim();
  const pageNameIncludedStack = stackNameTrim.toLowerCase().includes("stack");
  const postFix = pageNameIncludedStack ? "" : "Stack";
  return `${stackNameTrim} ${postFix}`;
};

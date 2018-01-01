import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  ADD_NEW_PILL_IMAGE,
  MEDICINE_IMAGE
} from "../../../assets/icons/constants";
import colors from "HSColors";
import { ListItem } from "react-native-elements";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

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

export const AddSupplementListItem = ({ onPress, title, subtitle }) => {
  return (
    <ListItem
      key={title}
      avatar={MEDICINE_IMAGE}
      title={title}
      subtitle={subtitle}
      avatarStyle={ListItemStyles.avatarStyle}
      onPress={onPress}
    />
  );
};

export const ListItemStyles = StyleSheet.create({
  avatarStyle: {
    backgroundColor: colors.alternative
  }
});

export const LogButton = ({ onPress, title }) => {
  return (
    <Button
      title={title}
      rounded={true}
      onPress={onPress}
      icon={{ name: "edit", type: "font-awesome" }}
      backgroundColor={colors.approve}
    />
  );
};

export const DeleteButton = ({ onPress, title }) => {
  return (
    <Button
      title={title}
      rounded={true}
      onPress={onPress}
      icon={{ name: "x", type: "octicon" }}
      backgroundColor={colors.delete}
    />
  );
};

export const CreateButton = ({ onPress, title }) => {
  return (
    <Button
      title={title}
      rounded={true}
      onPress={onPress}
      icon={{ name: "edit", type: "font-awesome" }}
      backgroundColor={colors.approve}
    />
  );
};

export const GroupedButtonsStyles = StyleSheet.create({
  groupedButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  }
});

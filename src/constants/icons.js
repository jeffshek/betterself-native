import { Icon } from "react-native-elements";
import React from "react";

const IconSize = 25;

export const LogCheckboxIcon = ({ tintColor }) => {
  return (
    <Icon
      name={"checkbox-marked-outline"}
      size={IconSize}
      type="material-community"
      color={tintColor}
    />
  );
};

import React, { PropTypes, Component } from "react";
import { getSupplementStacksByFilters } from "./api";
import {
  LogSupplementStackView
} from "../../views/supplements/log_supplement_stack";

export const getUpdatedSupplementStackAndNavigate = (stack, navigation) => {
  // after updating compositions, we want to re-query the stack and redirect back to the log page
  const filterParams = { uuid: stack.uuid };

  getSupplementStacksByFilters(filterParams).then(responseData => {
    const updatedStack = responseData[0];
    navigation.navigate(LogSupplementStackView.viewName, updatedStack);
  });
};

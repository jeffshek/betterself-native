import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import colors from "HSColors";

export const LogLabel = "Logs";
export const HistoryLabel = "History";
export const RemindersLabel = "Reminders";

export const SupplementLabel = "Supplement & Medications";
export const SupplementsLogLabel = `${SupplementLabel} ${LogLabel}`;
export const SupplementsHistoryLabel = `${SupplementLabel} ${HistoryLabel}`;
export const SupplementsRemindersLabel = `${SupplementLabel} ${RemindersLabel}`;

export const TitleWithWhiteBackground = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        {label}
      </Text>
    </View>
  );
};

export const WhiteHeaderText = ({ headerText }) => {
  // sure this looks stupid, but wait until you have 55 different font sizes all over the place
  // then you regret you didn't do this
  return <Text style={styles.headerText}>{headerText}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    color: colors.background
  },
  container: {
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: colors.alternative
  },
  headerText: {
    color: "white",
    marginTop: 0,
    fontSize: 20
  }
});

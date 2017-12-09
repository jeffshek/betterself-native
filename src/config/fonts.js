/**
 * @providesModule HSFonts
 */

import { Platform } from "react-native";

export const fontFamilySelection = () => {
  return Platform.select({
    ios: "Avenir",
    android: "serif"
  });
};

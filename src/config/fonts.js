/**
 * @providesModule HSFonts
 */

import { Platform } from "react-native";
//
//export default {
//  ios: {
//    regular: 'Avenir',
//    light: 'Avenir',
//    lightItalic: 'Avenir',
//    bold: 'Avenir',
//    boldItalic: 'Avenir',
//    black: 'Avenir',
//    blackItalic: 'Avenir',
//  },
//  android: {
//    regular: 'Roboto',
//    italic: 'Roboto-Italic',
//    thin: 'Roboto-Thin',
//    thinItalic: 'Roboto-ThinItalic',
//    light: 'Roboto-Light',
//    lightItalic: 'Roboto-LightItalic',
//    medium: 'Roboto-Medium',
//    mediumItalic: 'Roboto-MediumItalic',
//    bold: 'Roboto-Bold',
//    boldItalic: 'Roboto-BoldItalic',
//    condensed: 'RobotoCondensed-Regular',
//    condensedItalic: 'RobotoCondensed-Italic',
//  },
//};

export const fontFamilySelection = () => {
  return Platform.select({
    ios: "Avenir",
    android: "serif"
  });
};

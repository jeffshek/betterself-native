import { AsyncStorage } from "react-native";
import Expo from "expo";

export const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const LogMyOutput = output => {
  console.log(output);
};

export const getAuthorizationHeader = token => {
  return {
    Authorization: `Token ${token}`
  };
};

export const JSON_AUTHORIZATION_HEADERS = async () => {
  const token = await AsyncStorage.getItem("token");
  return { Authorization: `Token ${token}` };
};
//

// Sample code from ReactJS
//export const JSON_POST_AUTHORIZATION_HEADERS = {
//  Accept: "application/json",
//  "Content-Type": "application/json",
//  Authorization: `Token ${localStorage.token}`
//};

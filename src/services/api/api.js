import Expo from "expo";
import { getAuthorizationHeader, JSON_HEADERS } from "./constants";
import {
  HOME_URL,
  REST_API_LOGIN_URL,
  REST_API_MOBILE_SIGNUP_URL,
  SUPPLEMENTS_RESOURCE_URL
} from "./urls";
import { AsyncStorage } from "react-native";

const LogAuthorized = async () => {
  // A simple debugger as you grok Async
  const value = await AsyncStorage.getItem("token");
};

export const login = (username, password) => {
  let credentials = {
    username: username,
    password: password
  };

  return fetch(HOME_URL + REST_API_LOGIN_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(credentials)
  })
    .then(response => {
      return response.json();
    })
    .then(async responseData => {
      if ("key" in responseData) {
        return await AsyncStorage.setItem("token", responseData["key"]);
      }
    })
    .catch(error => {
      alert("Network Issue Encountered" + error);
    });
};

export const signupAPI = signUpParams => {
  fetch(HOME_URL + REST_API_MOBILE_SIGNUP_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(signUpParams)
  })
    .then(response => {
      return response.json();
    })
    .then(async responseData => {
      if ("key" in responseData) {
        await AsyncStorage.setItem("token", responseData["key"]);
      }
    });
};

export const getSupplements = async () => {
  const token = await AsyncStorage.getItem("token");
  const json_headers = getAuthorizationHeader(token);
  const post_params = {
    method: "GET",
    headers: json_headers
  };
  return fetch(
    HOME_URL + SUPPLEMENTS_RESOURCE_URL,
    post_params
  ).then(responseData => {
    return responseData.json();
  });
};

import { JSON_HEADERS } from "./constants";
import { HOME_URL, REST_API_LOGIN_URL } from "./urls";
import { AsyncStorage } from "react-native";
import Expo from "expo";

const LogAuthorized = () => {
  console.log("We were able to login!");
};

export const login = async (username, password) => {
  let credentials = {
    username: username,
    password: password
  };

  fetch(HOME_URL + REST_API_LOGIN_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(credentials)
  })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      if ("key" in responseData) {
        AsyncStorage.setItem("token", responseData["key"], LogAuthorized);
      }
    })
    .then(async e => {
      const value = await AsyncStorage.getItem("token");
    })
    .catch(error => {
      alert("Network Issue Encountered" + error);
    });
};

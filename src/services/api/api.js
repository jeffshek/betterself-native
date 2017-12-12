import { JSON_HEADERS } from "./constants";
import { HOME_URL, REST_API_LOGIN_URL } from "./urls";
import Expo from "expo";

export const login = (username, password) => {
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
        console.log("success!");
      }
    })
    .catch(error => {
      alert("Network Issue Encountered");
    });
};

import Expo from "expo";

export const JSON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const getAuthorizationHeader = token => {
  return {
    Authorization: `Token ${token}`
  };
};

export const postAuthorizationHeader = token => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
};

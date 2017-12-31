import Expo from "expo";
import {
  getAuthorizationHeader,
  JSON_HEADERS,
  postAuthorizationHeader
} from "./constants";
import {
  HOME_URL,
  REST_API_LOGIN_URL,
  REST_API_MOBILE_SIGNUP_URL,
  SUPPLEMENT_EVENTS_RESOURCE_URL,
  SUPPLEMENT_RESOURCE_URL,
  SUPPLEMENT_STACK_COMPOSITIONS_RESOURCE_URL,
  SUPPLEMENT_STACKS_RECORD_URL,
  SUPPLEMENT_STACKS_RESOURCE_URL,
  SUPPLEMENTS_RESOURCE_URL
} from "./urls";
import { AsyncStorage } from "react-native";

export const login = (username, password) => {
  let credentials = {
    username: username,
    password: password
  };

  const url = HOME_URL + REST_API_LOGIN_URL;
  return fetch(url, {
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
  const jsonHeaders = getAuthorizationHeader(token);
  const params = {
    method: "GET",
    headers: jsonHeaders
  };
  const url = HOME_URL + SUPPLEMENTS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

export const createSupplement = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENTS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

export const createSupplementStack = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_STACKS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

export const createSupplementComposition = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_STACK_COMPOSITIONS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

export const updateSupplementComposition = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_STACK_COMPOSITIONS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData;
  });
};

export const deleteSupplementComposition = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "DELETE",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_STACK_COMPOSITIONS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData;
  });
};

export const getSupplementStacks = async () => {
  const token = await AsyncStorage.getItem("token");
  const json_headers = getAuthorizationHeader(token);
  const post_params = {
    method: "GET",
    headers: json_headers
  };
  const url = HOME_URL + SUPPLEMENT_STACKS_RESOURCE_URL;
  return fetch(url, post_params).then(responseData => {
    return responseData.json();
  });
};

export const getSupplementStacksByFilters = async filterDetails => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = getAuthorizationHeader(token);
  const postParams = {
    method: "GET",
    headers: jsonHeaders
  };
  const url = HOME_URL + SUPPLEMENT_STACKS_RESOURCE_URL + "?";

  const filterDetailsKeys = Object.keys(filterDetails);
  let filterParamsString = "";
  for (let key of filterDetailsKeys) {
    filterParamsString += `&${key}=${filterDetails[key]}`;
  }

  const urlWithFilter = url + filterParamsString;

  return fetch(urlWithFilter, postParams).then(responseData => {
    return responseData.json();
  });
};

export const postSupplementLog = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_EVENTS_RESOURCE_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

export const postSupplementStackLog = async postParams => {
  const token = await AsyncStorage.getItem("token");
  const jsonHeaders = postAuthorizationHeader(token);
  const params = {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(postParams)
  };
  const url = HOME_URL + SUPPLEMENT_STACKS_RECORD_URL;
  return fetch(url, params).then(responseData => {
    return responseData.json();
  });
};

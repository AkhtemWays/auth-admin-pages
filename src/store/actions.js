import {
  FETCH_DATA,
  AUTHORIZE,
  DELETE_USER,
  ADD_USER,
  ADD_USER_MODE,
  SET_EDIT_MODE,
  UPDATE_USER,
  SET_DETAIL,
  LOGOUT,
  SET_PSCHANGE_MODE,
  CHANGE_USER_PASSWORD,
  BACK_TO_ADMIN,
} from "./types";
import { superUser } from "../components/usersConfig/superUser";
import { observerUser } from "../components/usersConfig/observerUser";
import { managerUser } from "../components/usersConfig/managerUser";
import { seniorManagerUser } from "../components/usersConfig/seniorManagerUser";

export function changeUserPassword() {
  return {
    type: CHANGE_USER_PASSWORD,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function backToAdmin() {
  return {
    type: BACK_TO_ADMIN,
  };
}

export function setPSChangeMode() {
  return {
    type: SET_PSCHANGE_MODE,
  };
}

export function setDetail(id) {
  return {
    type: SET_DETAIL,
    payload: id,
  };
}

export function setEditMode(id) {
  return {
    type: SET_EDIT_MODE,
    payload: id,
  };
}
export function updateUser() {
  return {
    type: UPDATE_USER,
  };
}

export function fetchData() {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const normalizedData = [];

    normalizedData.push(superUser);
    for (let user of data) {
      const normalizedUser = {
        username: user.username,
        password: user.username,
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        status: "unprioritizedUser",
        address: {
          city: user.address.city,
          zipcode: user.address.zipcode,
          street: user.address.street,
        },
      };
      normalizedData.push(normalizedUser);
    }
    normalizedData.push(observerUser);
    normalizedData.push(managerUser);
    normalizedData.push(seniorManagerUser);
    dispatch({
      type: FETCH_DATA,
      payload: normalizedData,
    });
  };
}

export function authorize() {
  return {
    type: AUTHORIZE,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id,
  };
}

export function addUser() {
  return {
    type: ADD_USER,
  };
}

export function addUserMode() {
  return {
    type: ADD_USER_MODE,
  };
}

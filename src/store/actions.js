import {
  FETCH_DATA,
  AUTHORIZE,
  DELETE_USER,
  ADD_USER,
  ADD_USER_MODE,
  FROM_ADDITION_TO_ADMIN,
  SET_EDIT_MODE,
  FROM_EDITING_TO_ADMIN,
  UPDATE_USER,
  SET_DETAIL,
  FROM_DETAIL_TO_ADMIN,
  CHANGE_SORT_TYPE,
} from "./types";

export function fromDetailToAdmin() {
  return {
    type: FROM_DETAIL_TO_ADMIN,
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

export function fromEditingToAdmin() {
  return {
    type: FROM_EDITING_TO_ADMIN,
  };
}

export function fetchData() {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const normalizedData = [];
    const superUser = {
      username: "AkhtemWays",
      password: "123",
      id: 0,
      name: "Akhtem Ways",
      email: "ahty.study@bk.ru",
      phone: "+7 (900) 475-18-16",
      status: "superUser",
      address: {
        city: "Moscow",
        zipcode: "106810",
        street: "Kaluzhskaya street",
      },
    };
    console.log(superUser);
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

export function fromAdditionToAdmin() {
  return {
    type: FROM_ADDITION_TO_ADMIN,
  };
}

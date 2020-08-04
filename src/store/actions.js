import { FETCH_DATA, AUTHORIZE, DELETE } from "./types";

export function fetchData() {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    const normalizedData = [];
    const superUser = {
      username: "AkhtemWays",
      password: "12345abcde",
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
    type: DELETE,
    payload: id,
  };
}

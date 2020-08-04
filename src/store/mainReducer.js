import { FETCH_DATA, AUTHORIZE, DELETE } from "./types";

const initialData = {
  users: [],
  isAuthorized: false,
  currentUsername: "",
  currentPassword: "",
  currentId: 11,
};

export default function (state = initialData, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: [...action.payload],
      };
    case "@@redux-form/CHANGE":
      if (action.meta.field === "password") {
        return {
          ...state,
          currentPassword: action.payload,
        };
      } else if (action.meta.field === "username") {
        return {
          ...state,
          currentUsername: action.payload,
        };
      }
      return {
        ...state,
      };
    case AUTHORIZE:
      for (let user of state.users) {
        if (
          user.password === state.currentPassword &&
          user.username === state.currentUsername
        ) {
          if (user.status === "superUser") {
            return {
              ...state,
              isAuthorized: true,
              currentPassword: "",
              currentUsername: "",
            };
          } else if (user.status === "unprioritizedUser") {
            window.alert("Вы не супер пользователь");
            return {
              ...state,
              currentPassword: "",
              currentUsername: "",
            };
          }
          return {
            ...state,
          };
        }
      }
      window.alert(
        "Неправильное имя пользователя или пароль. \nПопробуйте снова"
      );
      return {
        ...state,
        currentUsername: "",
        currentPassword: "",
      };

    case DELETE:
      if (action.payload == 0) {
        alert("Это действие невозможно!");
        return {
          ...state,
        };
      }
      if (window.confirm("Вы уверены?")) {
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
}

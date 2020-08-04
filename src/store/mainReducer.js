import {
  FETCH_DATA,
  AUTHORIZE,
  DELETE_USER,
  ADD_USER_MODE,
  ADD_USER,
  FROM_ADDITION_TO_ADMIN,
} from "./types";

const initialData = {
  users: [],
  isAuthorized: false,
  currentUsername: "",
  currentPassword: "",
  currentId: 11,
  userAdditionMode: false,
  additionModePhone: "",
  additionModeZipcode: "",
  additionModeStreet: "",
  additionModeCity: "",
  additionModeEmail: "",
  additionModeLastName: "",
  additionModeFirstName: "",
  additionModePassword: "",
  additionModeUserName: "",
  additionModeStatus: "unprioritizedUser",
  availableStatuses: ["unprioritizedUser"],
};

export default function (state = initialData, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: [...action.payload],
      };
    case "@@redux-form/CHANGE":
      switch (action.meta.form) {
        case "login":
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
        case "userAddition":
          switch (action.meta.field) {
            case "username":
              return {
                ...state,
                additionModeUserName: action.paylod,
              };
            case "password":
              return {
                ...state,
                additionModePassword: action.payload,
              };
            case "firstName":
              return {
                ...state,
                additionModeFirstName: action.payload,
              };
            case "lastName":
              return {
                ...state,
                additionModeLastName: action.payload,
              };
            case "email":
              return {
                ...state,
                additionModeEmail: action.payload,
              };
            case "city":
              return {
                ...state,
                additionModeCity: action.payload,
              };
            case "street":
              return {
                ...state,
                additionModeStreet: action.payload,
              };
            case "zipcode":
              return {
                ...state,
                additionModeZipcode: action.payload,
              };
            case "phone":
              return {
                ...state,
                additionModePhone: action.payload,
              };
            case "status":
              return {
                ...state,
                additionModeStatus: action.payload,
              };

            default:
              return state;
          }
        default:
          return state;
      }

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
              userAdditionMode: false,
              currentPassword: "",
              currentUsername: "",
            };
          } else if (user.status === "unprioritizedUser") {
            window.alert("Вы не супер пользователь");
            return {
              ...state,
              isAuthorized: false,
              userAdditionMode: false,
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
        isAuthorized: false,
        userAdditionMode: false,
        currentUsername: "",
        currentPassword: "",
      };

    case DELETE_USER:
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
        isAuthorized: true,
        userAdditionMode: false,
      };
    case ADD_USER_MODE:
      return {
        ...state,
        userAdditionMode: true,
        isAuthorized: true,
      };

    case ADD_USER:
      const newUser = {
        username: state.additionModeUserName,
        password: state.additionModePassword,
        id: state.currentId,
        name: `${state.additionModeFirstName} ${state.additionModeLastName}`,
        email: state.additionModeEmail,
        phone: state.additionModePhone,
        status: state.additionModeStatus,
        address: {
          city: state.additionModeCity,
          zipcode: state.additionModeZipcode,
          street: state.additionModeStreet,
        },
      };

      return {
        ...state,
        userAdditionMode: false,
        currentId: state.currentId + 1,
        additionModePhone: "",
        additionModeZipcode: "",
        additionModeStreet: "",
        additionModeCity: "",
        additionModeEmail: "",
        additionModeLastName: "",
        additionModeFirstName: "",
        additionModePassword: "",
        additionModeUserName: "",
        users: [...state.users, newUser],
      };
    case FROM_ADDITION_TO_ADMIN:
      return {
        ...state,
        userAdditionMode: false,
        additionModePhone: "",
        additionModeZipcode: "",
        additionModeStreet: "",
        additionModeCity: "",
        additionModeEmail: "",
        additionModeLastName: "",
        additionModeFirstName: "",
        additionModePassword: "",
        additionModeUserName: "",
      };

    default:
      return state;
  }
}

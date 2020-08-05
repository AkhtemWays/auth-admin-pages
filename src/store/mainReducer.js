import {
  FETCH_DATA,
  AUTHORIZE,
  DELETE_USER,
  ADD_USER_MODE,
  ADD_USER,
  FROM_ADDITION_TO_ADMIN,
  SET_EDIT_MODE,
  FROM_EDITING_TO_ADMIN,
  UPDATE_USER,
  SET_DETAIL,
  FROM_DETAIL_TO_ADMIN,
} from "./types";

const initialData = {
  users: [],
  currentUsers: [],
  showToUser: [],
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
  userEditMode: false,
  editModeUserId: "",
  editModePhone: "",
  editModeZipcode: "",
  editModeStreet: "",
  editModeCity: "",
  editModeEmail: "",
  editModeLastName: "",
  editModeFirstName: "",
  editModePassword: "",
  editModeUserName: "",
  editModeUserStatus: "",
  userDetailMode: false,
  detailedUser: {
    username: "",
    password: "",
    id: "",
    name: "",
    email: "",
    phone: "",
    status: "",
    address: {
      city: "",
      zipcode: "",
      street: "",
    },
  },
  sortOptions: ["ID", "Имя", "Фамилия"],
  currentSortOption: "ID",
  search: "",
};

export default function (state = initialData, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: [...action.payload],
        currentUsers: [...action.payload],
      };
    case "@@redux-form/CHANGE":
      switch (action.meta.form) {
        // case "login":
        //   if (action.meta.field === "password") {
        //     return {
        //       ...state,
        //       currentPassword: action.payload,
        //     };
        //   } else if (action.meta.field === "username") {
        //     return {
        //       ...state,
        //       currentUsername: action.payload,
        //     };
        //   }
        //   return {
        //     ...state,
        //   };
        case "adminFeatures":
          if (action.meta.field === "sortOption") {
            switch (action.payload) {
              case "ID":
                const re1 = new RegExp(state.search, "i");
                const currentUsersSortedId = [...state.users]
                  .sort((a, b) => a.id - b.id)
                  .filter((user) =>
                    user.name.match(re1) !== null
                      ? true
                      : user.email.match(re1) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentSortOption: action.payload,
                  currentUsers: currentUsersSortedId,
                };
              case "Имя":
                const re2 = new RegExp(state.search, "i");
                const currentUsersSortedName = [...state.users]
                  .sort((a, b) =>
                    a.name.split(" ")[0] >= b.name.split(" ")[0] ? 1 : -1
                  )
                  .filter((user) =>
                    user.name.match(re2) !== null
                      ? true
                      : user.email.match(re2) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentSortOption: action.payload,
                  currentUsers: currentUsersSortedName,
                };
              case "Фамилия":
                const re3 = new RegExp(state.search, "i");
                const currentUsersSortedSurname = [...state.users]
                  .sort((a, b) =>
                    a.name.split(" ")[1] >= b.name.split(" ")[1] ? 1 : -1
                  )
                  .filter((user) =>
                    user.name.match(re3) !== null
                      ? true
                      : user.email.match(re3) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentSortOption: action.payload,
                  currentUsers: currentUsersSortedSurname,
                };
              default:
                return state;
            }
          } else if (action.meta.field === "search") {
            switch (state.currentSortOption) {
              case "ID":
                const re4 = new RegExp(action.payload, "i");
                const currentUsersSortedIdSearch = [...state.users]
                  .sort((a, b) => a.id - b.id)
                  .filter((user) =>
                    user.name.match(re4) !== null
                      ? true
                      : user.email.match(re4) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentUsers: currentUsersSortedIdSearch,
                  search: action.payload,
                };
              case "Имя":
                const re5 = new RegExp(action.payload, "i");
                const currentUsersSortedNameSearch = [...state.users]
                  .sort((a, b) =>
                    a.name.split(" ")[0] >= b.name.split(" ")[0] ? 1 : -1
                  )
                  .filter((user) =>
                    user.name.match(re5) !== null
                      ? true
                      : user.email.match(re5) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentUsers: currentUsersSortedNameSearch,
                  search: action.payload,
                };
              case "Фамилия":
                const re6 = new RegExp(action.payload, "i");
                const currentUsersSortedSurnameSearch = [...state.users]
                  .sort((a, b) =>
                    a.name.split(" ")[1] >= b.name.split(" ")[1] ? 1 : -1
                  )
                  .filter((user) =>
                    user.name.match(re6) !== null
                      ? true
                      : user.email.match(re6) !== null
                      ? true
                      : false
                  );
                return {
                  ...state,
                  currentUsers: currentUsersSortedSurnameSearch,
                  search: action.payload,
                };
              default:
                return state;
            }
          }

        case "userAddition":
          switch (action.meta.field) {
            case "username":
              return {
                ...state,
                additionModeUserName: action.payload,
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
        case "userEditing":
          switch (action.meta.field) {
            case "username":
              return {
                ...state,
                editModeUserName: action.paylod,
              };
            case "password":
              return {
                ...state,
                editModePassword: action.payload,
              };
            case "firstName":
              return {
                ...state,
                editModeFirstName: action.payload,
              };
            case "lastName":
              return {
                ...state,
                editModeLastName: action.payload,
              };
            case "email":
              return {
                ...state,
                editModeEmail: action.payload,
              };
            case "city":
              return {
                ...state,
                editModeCity: action.payload,
              };
            case "street":
              return {
                ...state,
                editModeStreet: action.payload,
              };
            case "zipcode":
              return {
                ...state,
                editModeZipcode: action.payload,
              };
            case "phone":
              return {
                ...state,
                editModePhone: action.payload,
              };
            case "status":
              return {
                ...state,
                editModeStatus: action.payload,
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
          currentUsers: state.currentUsers.filter(
            (user) => user.id !== action.payload
          ),
          currentUsersCopy: state.currentUsersCopy.filter(
            (user) => user.id !== action.payload
          ),
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
        currentUsers: [...state.currentUsers, newUser],
        currentUsersCopy: [...state.currentUsersCopy, newUser],
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
    case SET_EDIT_MODE:
      const editableUser = state.users.find(
        (user) => user.id === action.payload
      );
      return {
        ...state,
        userEditMode: true,
        isAuthorized: true,
        userAdditionMode: false,
        editModeUserId: editableUser.id,
        editModePhone: editableUser.phone,
        editModeZipcode: editableUser.address.zipcode,
        editModeStreet: editableUser.address.street,
        editModeCity: editableUser.address.city,
        editModeEmail: editableUser.email,
        editModeLastName: editableUser.name.split(" ")[1],
        editModeFirstName: editableUser.name.split(" ")[0],
        editModePassword: editableUser.password,
        editModeUserName: editableUser.username,
        editModeUserStatus: editableUser.status,
      };
    case FROM_EDITING_TO_ADMIN:
      return {
        ...state,
        isAuthorized: true,
        userAdditionMode: false,
        userEditMode: false,
        editModeUserId: "",
        editModePhone: "",
        editModeZipcode: "",
        editModeStreet: "",
        editModeCity: "",
        editModeEmail: "",
        editModeLastName: "",
        editModeFirstName: "",
        editModePassword: "",
        editModeUserName: "",
        editModeUserStatus: "",
      };
    case UPDATE_USER:
      const updatedUser = {
        id: state.editModeUserId,
        phone: state.editModePhone,
        email: state.editModeEmail,
        name: `${state.editModeFirstName} ${state.editModeLastName}`,
        password: state.editModePassword,
        username: state.editModeUserName,
        status: state.editModeUserStatus,
        address: {
          city: state.editModeCity,
          zipcode: state.editModeZipcode,
          street: state.editModeStreet,
        },
      };
      const oldUserIdx = state.users.findIndex(
        (user) => user.id === updatedUser.id
      );
      const oldCurrentUserIdx = state.currentUsers.findIndex(
        (user) => user.id === updatedUser.id
      );
      const newUserArrayUsers = [...state.users];
      const newCurrentUserArrayUsers = [...state.currentUsers];
      newUserArrayUsers[oldUserIdx] = updatedUser;
      newCurrentUserArrayUsers[oldCurrentUserIdx] = updatedUser;
      return {
        ...state,
        users: newUserArrayUsers,
        currentUsers: newCurrentUserArrayUsers,
        currentUsersCopy: [...newCurrentUserArrayUsers],
        isAuthorized: true,
        userAdditionMode: false,
        userEditMode: false,
        editModeUserId: "",
        editModePhone: "",
        editModeZipcode: "",
        editModeStreet: "",
        editModeCity: "",
        editModeEmail: "",
        editModeLastName: "",
        editModeFirstName: "",
        editModePassword: "",
        editModeUserName: "",
        editModeUserStatus: "",
      };
    case SET_DETAIL:
      const chosenUser = state.currentUsers.find(
        (user) => user.id == action.payload
      );
      return {
        ...state,
        userAdditionMode: false,
        isAuthorized: true,
        userEditMode: false,
        userDetailMode: true,
        detailedUser: chosenUser,
      };
    case FROM_DETAIL_TO_ADMIN:
      return {
        ...state,
        userAdditionMode: false,
        isAuthorized: true,
        userEditMode: false,
        userDetailMode: false,
        detailedUser: {
          username: "",
          password: "",
          id: "",
          name: "",
          email: "",
          phone: "",
          status: "",
          address: {
            city: "",
            zipcode: "",
            street: "",
          },
        },
      };

    default:
      return state;
  }
}

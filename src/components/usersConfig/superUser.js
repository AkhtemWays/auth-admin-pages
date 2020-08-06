// Description
// English: SuperUser has all the privileges of the application (create, update, delete users), and there is only one of them (at least it's assumed so)
// which can be configured here

// Русский: Тип объекта superUser имеет все виды привилегий в рамках этого приложения (добавлять, обновлять, удалять пользователей), и предполагается
// что будет существовать только один superUser, конфигурацию которого вы можете настроить здесь

export const superUser = {
  username: "superuser",
  password: "superuser",
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

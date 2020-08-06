// Description:
// English: The following type of user can only observe the admin page and use features such as sorting and filtering users as well as browsing the detail
// information of them. To create the user, one should GUI of the application, and the instance of the user provided below will be used as a default to access
// and test the application, and will be built-in in the application

// Русский: Данный тип пользователя имеет привилегии просмотра страницы админа, использования функциональности сортировки, фильтрования пользователей
// и просмотра подробной информации о пользователях, создать пользователя можно через GUI приложения, указанный ниже экземпляр данного типа пользователя
// уже будет встроен в систему

export const observerUser = {
  username: "observeruser",
  password: "observeruser",
  id: 11,
  name: "Morgan Freeman",
  email: "MorganFreeman@bk.ru",
  phone: "+7 (904) 981-11-29",
  status: "observerUser",
  address: {
    city: "Arizona",
    zipcode: "109111",
    street: "Kaynel's street",
  },
};

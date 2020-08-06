// Description:
// English: Basically this type of instance has all features observer user has, but with addition of editing feature, and it can not edit somebody who is
// higher rank or equal with him, for instance observerUser, unprioritizedUser, the instance below will be built-in also

// Русский: Этот тип пользователя умеет всё то, что умеет observer пользователь, только с дополнением редактирования пользователей, которые ниже его ранга,
// а именно типов пользователей observerUser, unprioritizedUser. Экземпляр ниже будет включен в приложение для теста

export const managerUser = {
  username: "manageruser",
  password: "manageruser",
  id: 12,
  name: "Ben Boyne",
  email: "BenBoyne@bk.ru",
  phone: "+7 (910) 777-81-80",
  status: "managerUser",
  address: {
    city: "Alaska",
    zipcode: "999019",
    street: "Big Ben's street",
  },
};

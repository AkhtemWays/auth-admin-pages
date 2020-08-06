export default function (
  username,
  password,
  email,
  firstName,
  lastName,
  city,
  street,
  zipcode,
  phone
) {
  const errors = {
    username: [],
    password: [],
    email: [],
    firstName: [],
    lastName: [],
    city: [],
    street: [],
    zipcode: [],
    phone: [],
  };
  if (username ? username.length < 6 : false) {
    errors.username.push("Имя пользователя не должно быть менее 6 символов");
  }
  if (username ? username.length > 25 : false) {
    errors.username.push("Имя пользователя не может превышать 25 символов");
  }
  if (!username) {
    errors.username.push("Поле не может быть пустым");
  }
  if (password ? password.length < 7 : false) {
    errors.password.push("Пароль не может быть короче 7 символов");
  }
  if (!password) {
    errors.password.push("Поле не может быть пустым");
  }
  if (email ? email.length < 7 : false) {
    errors.email.push(
      "Адрес электронной почты не может содержать менее 7 символов"
    );
  }
  if (email ? email.length > 40 : false) {
    errors.email.push("Адрес электронной почты не может превышать 40 символов");
  }
  if (!email) {
    errors.email.push("Поле не может быть пустым");
  }
  if (email) {
    !email.match(/@/, "i") && errors.email.push("Не было найдено символа @");
    !email.match(/\./, "i") &&
      errors.email.push("Не было найдено точки в вашем адресе");
  }
  if (firstName ? firstName.length < 2 : false) {
    errors.firstName.push("Имя не может содержать менее 2 символов");
  }
  if (firstName ? firstName.length > 25 : false) {
    errors.firstName.push("Имя не может содержать более 25 символов");
  }
  if (!firstName) {
    errors.firstName.push("Поле не может быть пустым");
  }
  if (firstName) {
    /\d/.test(firstName) &&
      errors.firstName.push("В имени не должно содержаться цифр");
  }
  if (!lastName) {
    errors.lastName.push("Поле не может быть пустым");
  }
  if (lastName ? lastName.length < 2 : false) {
    errors.lastName.push("Фамилия не может содержать менее 2 символов");
  }
  if (lastName ? lastName.length > 25 : false) {
    errors.lastName.push("Фамилия не может содержать более 25 символов");
  }
  if (lastName) {
    /\d/.test(lastName) &&
      errors.lastName.push("В фамилии не должно содержаться цифр");
  }
  if (!city) {
    errors.city.push("Поле не может быть пустым");
  }
  if (city ? city.length < 3 : false) {
    errors.city.push("Название города не может быть короче 3 символов");
  }
  if (city ? city.length > 40 : false) {
    errors.city.push(
      "Название города не может быть содержать более 40 символов"
    );
  }
  if (!street) {
    errors.street.push("Поле не может быть пустым");
  }
  if (street ? street.length < 3 : false) {
    errors.street.push("Название улицы не может содержать менее 3 символов");
  }
  if (street ? street.length > 40 : false) {
    errors.street.push("Название улицы не может содержать более 40 символов");
  }
  if (!zipcode) {
    errors.zipcode.push("Поле не может быть пустым");
  }
  if (zipcode ? zipcode.length < 4 : false) {
    errors.zipcode.push("Почтовый индекс не может быть короче 4 символов");
  }
  if (zipcode ? zipcode.length > 25 : false) {
    errors.zipcode.push("Почтовый индекс не может содержать более 40 символов");
  }
  if (zipcode) {
    !/^\d+$/.test(zipcode) &&
      errors.zipcode.push("Почтовый индекс должен содержать только цифры");
  }
  if (phone ? phone.length !== 11 : false) {
    errors.phone.push(
      "Номер телефона должен содержать ровно 11 символов из чисел"
    );
  }
  if (!phone) {
    errors.phone.push("Поле не может быть пустым");
  }
  if (phone) {
    !/^\d+$/.test(phone) &&
      errors.phone.push("Номер телефона должен содержать только цифры");
  }
  return errors;
}

export default function (username, password) {
  const errors = {
    username: [],
    password: [],
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
  return errors;
}

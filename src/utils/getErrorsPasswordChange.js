export default function (password, passwordAgain) {
  const errors = {
    password: [],
    passwordAgain: [],
    same: true,
  };
  if (password ? password.length < 7 : false) {
    errors.password.push("Пароль не может быть короче 7 символов");
  }
  if (!password) {
    errors.password.push("Поле не может быть пустым");
  }
  if (passwordAgain ? passwordAgain.length < 7 : false) {
    errors.passwordAgain.push("Пароль не может быть короче 7 символов");
  }
  if (!passwordAgain) {
    errors.passwordAgain.push("Поле не может быть пустым");
  }
  if (passwordAgain !== password) {
    errors.same = false;
  }
  return errors;
}

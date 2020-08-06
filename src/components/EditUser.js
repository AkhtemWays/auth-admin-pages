import React, { Component } from "react";
import { formValueSelector, reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { fromEditingToAdmin, updateUser, logout } from "../store/actions";
import "../static/EditUser.css";
import NavBar from "./NavBar";

class UserEditing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };
  }
  getErrors = () => {
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
    if (this.props.username ? this.props.username.length < 6 : false) {
      errors.username.push("Имя пользователя не должно быть менее 6 символов");
    }
    if (this.props.username ? this.props.username.length > 25 : false) {
      errors.username.push("Имя пользователя не может превышать 25 символов");
    }
    if (!this.props.username) {
      errors.username.push("Поле не может быть пустым");
    }
    if (this.props.password ? this.props.password.length < 7 : false) {
      errors.password.push("Пароль не может быть короче 7 символов");
    }
    if (!this.props.password) {
      errors.password.push("Поле не может быть пустым");
    }
    if (this.props.email ? this.props.email.length < 7 : false) {
      errors.email.push(
        "Адрес электронной почты не может содержать менее 7 символов"
      );
    }
    if (this.props.email ? this.props.email.length > 40 : false) {
      errors.email.push(
        "Адрес электронной почты не может превышать 40 символов"
      );
    }
    if (!this.props.email) {
      errors.email.push("Поле не может быть пустым");
    }
    if (this.props.email) {
      !this.props.email.match(/@/, "i") &&
        errors.email.push("Не было найдено символа @");
      !this.props.email.match(/\./, "i") &&
        errors.email.push("Не было найдено точки в вашем адресе");
    }
    if (this.props.firstName ? this.props.firstName.length < 2 : false) {
      errors.firstName.push("Имя не может содержать менее 2 символов");
    }
    if (this.props.firstName ? this.props.firstName.length > 25 : false) {
      errors.firstName.push("Имя не может содержать более 25 символов");
    }
    if (!this.props.firstName) {
      errors.firstName.push("Поле не может быть пустым");
    }
    if (this.props.firstName) {
      /\d/.test(this.props.firstName) &&
        errors.firstName.push("В имени не должно содержаться цифр");
    }
    if (!this.props.lastName) {
      errors.lastName.push("Поле не может быть пустым");
    }
    if (this.props.lastName ? this.props.lastName.length < 2 : false) {
      errors.lastName.push("Фамилия не может содержать менее 2 символов");
    }
    if (this.props.lastName ? this.props.lastName.length > 25 : false) {
      errors.lastName.push("Фамилия не может содержать более 25 символов");
    }
    if (this.props.lastName) {
      /\d/.test(this.props.lastName) &&
        errors.lastName.push("В фамилии не должно содержаться цифр");
    }
    if (!this.props.city) {
      errors.city.push("Поле не может быть пустым");
    }
    if (this.props.city ? this.props.city.length < 3 : false) {
      errors.city.push("Название города не может быть короче 3 символов");
    }
    if (this.props.city ? this.props.city.length > 40 : false) {
      errors.city.push(
        "Название города не может быть содержать более 40 символов"
      );
    }
    if (!this.props.street) {
      errors.street.push("Поле не может быть пустым");
    }
    if (this.props.street ? this.props.length < 3 : false) {
      errors.street.push("Название улицы не может содержать менее 3 символов");
    }
    if (this.props.street ? this.props.length > 40 : false) {
      errors.street.push("Название улицы не может содержать более 40 символов");
    }
    if (!this.props.zipcode) {
      errors.zipcode.push("Поле не может быть пустым");
    }
    if (this.props.zipcode ? this.props.zipcode.length < 4 : false) {
      errors.zipcode.push("Почтовый индекс не может быть короче 4 символов");
    }
    if (this.props.zipcode ? this.props.zipcode.length > 25 : false) {
      errors.zipcode.push(
        "Почтовый индекс не может содержать более 40 символов"
      );
    }
    if (this.props.zipcode) {
      !/^\d+$/.test(this.props.zipcode) &&
        errors.zipcode.push("Почтовый индекс должен содержать только цифры");
    }
    if (this.props.phone ? this.props.phone.length !== 11 : false) {
      errors.phone.push(
        "Номер телефона должен содержать ровно 11 символов из чисел"
      );
    }
    if (!this.props.phone) {
      errors.phone.push("Поле не может быть пустым");
    }
    if (this.props.phone) {
      !/^\d+$/.test(this.props.phone) &&
        errors.phone.push("Номер телефона должен содержать только цифры");
    }
    return errors;
  };

  handleSubmit = (ev) => {
    const errors = this.getErrors();
    let areErrors = false;
    for (let key of Object.keys(errors)) {
      if (errors[key].length) {
        areErrors = true;
        break;
      }
    }
    if (!areErrors) {
      this.setState({ errors: {} });
      console.log("updating");
      this.props.updateUser();
      this.props.updateField("userEditing", "username", "");
      this.props.updateField("userEditing", "password", "");
      this.props.updateField("userEditing", "email", "");
      this.props.updateField("userEditing", "firstName", "");
      this.props.updateField("userEditing", "lastName", "");
      this.props.updateField("userEditing", "city", "");
      this.props.updateField("userEditing", "street", "");
      this.props.updateField("userEditing", "zipcode", "");
      this.props.updateField("userEditing", "phone", "");
    } else {
      ev.preventDefault();
      this.setState({ errors: errors });
    }
  };

  handleAdminBack = () => {
    this.props.fromEditingToAdmin();
  };

  render() {
    return (
      <div className="usr-box" align="center">
        <NavBar />
        <div>
          <label>ID</label>
          <br />
          <Field
            component="input"
            disabled
            placeholder={this.props.currentId}
            name="id"
            value={this.props.currentId}
            className="form-control col-5"
          />
        </div>
        <hr />
        <div>
          <label>Имя пользователя</label>
          <br />
          <Field
            component="input"
            minLength="6"
            maxLength="25"
            type="text"
            name="username"
            value={this.props.username}
            placeholder={this.props.username}
            className="form-control col-5"
            required
          />
          {this.state.errors.username &&
            this.state.errors.username.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Пароль</label>
          <br />
          <Field
            component="input"
            minLength="7"
            type="password"
            name="password"
            value={this.props.password}
            className="form-control col-5"
            required
          />
          {this.state.errors.password &&
            this.state.errors.password.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Имя</label>
          <br />
          <Field
            component="input"
            minLength="2"
            maxLength="25"
            name="firstName"
            value={this.props.firstName}
            placeholder={this.props.firstName}
            className="form-control col-5"
            required
          />
          {this.state.errors.firstName &&
            this.state.errors.firstName.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Фамилия</label>
          <br />
          <Field
            component="input"
            minLength="2"
            maxLength="25"
            name="lastName"
            value={this.props.lastName}
            placeholder={this.props.lastName}
            className="form-control col-5"
            required
          />
          {this.state.errors.lastName &&
            this.state.errors.lastName.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Почта</label>
          <br />
          <Field
            component="input"
            type="email"
            minLength="7"
            maxLength="40"
            name="email"
            value={this.props.email}
            placeholder={this.props.email}
            className="form-control col-5"
            required
          />
          {this.state.errors.email &&
            this.state.errors.email.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Город проживания</label>
          <br />
          <Field
            component="input"
            type="text"
            minLength="3"
            maxLength="40"
            name="city"
            value={this.props.city}
            placeholder={this.props.city}
            className="form-control col-5"
            required
          />
          {this.state.errors.city &&
            this.state.errors.city.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Улица</label>
          <br />
          <Field
            component="input"
            type="text"
            minLength="3"
            maxLength="40"
            name="street"
            value={this.props.street}
            placeholder={this.props.street}
            className="form-control col-5"
            required
          />
          {this.state.errors.street &&
            this.state.errors.street.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Почтовый индекс</label>
          <br />
          <Field
            component="input"
            type="text"
            minLength="4"
            maxLength="25"
            name="zipcode"
            value={this.props.zipcode}
            placeholder={this.props.zipcode}
            className="form-control col-5"
            required
          />
          {this.state.errors.zipcode &&
            this.state.errors.zipcode.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label>Номер телефона</label>
          <br />
          <Field
            component="input"
            type="text"
            minLength="11"
            maxLength="11"
            name="phone"
            value={this.props.phone}
            placeholder={this.props.phone}
            className="form-control col-5"
            required
          />
          {this.state.errors.phone &&
            this.state.errors.phone.map((error) => (
              <div className="text-sm-left ml-2">
                <p className="small text-danger">{error}</p>
              </div>
            ))}
          <p className="small">
            Подставьте вместо символов X цифры вашего номера: +X (XXX) XXX-XX-XX
          </p>
        </div>
        <hr />
        <div>
          <label>Статус пользователя</label>
          <br />
          <Field
            component="select"
            name="status"
            className="form-control col-5"
          >
            {this.props.availableStatuses.map((st) =>
              st === this.props.currentStatus ? (
                <option value={st} defaultValue={st}>
                  {st}
                </option>
              ) : (
                <option value={st}>{st}</option>
              )
            )}
          </Field>
        </div>
        <hr />
        <button
          onClick={this.handleSubmit}
          className="btn btn-primary btn-lg m-2"
        >
          Закончить
        </button>
        <button
          onClick={this.handleAdminBack}
          className="btn btn-info btn-lg m-2"
        >
          Назад
        </button>
      </div>
    );
  }
}

const ReduxFormUserEditing = reduxForm({
  form: "userEditing",
})(UserEditing);

const mapStateToProps = (state) => {
  const selector = formValueSelector("userEditing");
  const firstName = selector(state, "firstName");
  const lastName = selector(state, "lastName");
  const username = selector(state, "username");
  const city = selector(state, "city");
  const email = selector(state, "email");
  const password = selector(state, "password");
  const street = selector(state, "street");
  const zipcode = selector(state, "zipcode");
  const phone = selector(state, "phone");
  const status = selector(state, "status");

  return {
    currentId: state.main.editModeUserId,
    firstName: state.main.editModeFirstName || firstName,
    lastName: state.main.editModeLastName || lastName,
    city: state.main.editModeCity || city,
    phone: state.main.editModePhone || phone,
    zipcode: state.main.editModeZipcode || zipcode,
    street: state.main.editModeStreet || street,
    username: state.main.editModeUserName || username,
    email: state.main.editModeEmail || email,
    password: state.main.editModePassword || password,
    availableStatuses: state.main.availableStatuses,
    currentStatus: state.main.editModeStatus || status,
    currentUser: state.main.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
  fromEditingToAdmin: () => dispatch(fromEditingToAdmin()),
  updateUser: () => dispatch(updateUser()),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormUserEditing);

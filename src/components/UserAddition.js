import React, { Component } from "react";
import { formValueSelector, reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { addUser } from "../store/actions";
import "../static/UserAddition.css";
import getErrors from "../utils/getErrorsUserAddition";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import BackButton from "./typicalButtons/BackButton";

class UserAddition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };
  }

  handleSubmit = (ev) => {
    const errors = getErrors(
      this.props.username,
      this.props.password,
      this.props.email,
      this.props.firstName,
      this.props.lastName,
      this.props.city,
      this.props.street,
      this.props.zipcode,
      this.props.phone
    );
    let areErrors = false;
    for (let key of Object.keys(errors)) {
      if (errors[key].length) {
        areErrors = true;
        break;
      }
    }
    if (!areErrors) {
      this.setState({ errors: {} });
      this.props.addUser();
      this.props.updateField("userAddition", "username", "");
      this.props.updateField("userAddition", "password", "");
      this.props.updateField("userAddition", "email", "");
      this.props.updateField("userAddition", "firstName", "");
      this.props.updateField("userAddition", "lastName", "");
      this.props.updateField("userAddition", "city", "");
      this.props.updateField("userAddition", "street", "");
      this.props.updateField("userAddition", "zipcode", "");
      this.props.updateField("userAddition", "phone", "");
    } else {
      ev.preventDefault();
      this.setState({ errors: errors });
    }
  };

  render() {
    return (
      <div align="center" className="usr-add">
        <NavBar />
        <div>
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
              Подставьте вместо символов X цифры вашего номера: +X (XXX)
              XXX-XX-XX
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
          <Link to="/admin/">
            <button
              onClick={this.handleSubmit}
              className="btn btn-primary btn-lg m-2"
            >
              Добавить
            </button>
          </Link>
          <BackButton />
        </div>
      </div>
    );
  }
}

const ReduxFormUserAddition = reduxForm({
  form: "userAddition",
})(UserAddition);

const mapStateToProps = (state) => {
  const selector = formValueSelector("userAddition");
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
    currentId: state.main.currentId,
    firstName: state.main.additionModeFirstName || firstName,
    lastName: state.main.additionModeLastName || lastName,
    city: state.main.additionModeCity || city,
    phone: state.main.additionModePhone || phone,
    zipcode: state.main.additionModeZipcode || zipcode,
    street: state.main.additionModeStreet || street,
    username: state.main.additionModeUserName || username,
    email: state.main.additionModeEmail || email,
    password: state.main.additionModePassword || password,
    availableStatuses: state.main.availableStatuses,
    currentStatus: state.main.additionModeStatus || status,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormUserAddition);

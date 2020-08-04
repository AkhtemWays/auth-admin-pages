import React, { Component } from "react";
import { formValueSelector, reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { addUser, fromAdditionToAdmin } from "../store/actions";
import { Link } from "react-router-dom";

class UserAddition extends Component {
  handleSubmit = () => {
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
  };

  handleAdminBack = () => {
    fromAdditionToAdmin();
  };

  render() {
    return (
      <div>
        <div align="center">
          <div>
            <label>ID</label>
            <br />
            <Field
              component="input"
              disabled
              placeholder={this.props.currentId}
              name="id"
              value={this.props.currentId}
              className="form-group"
            />
          </div>
          <div>
            <label>Имя пользователя</label>
            <br />
            <Field
              component="input"
              minLength={6}
              type="text"
              name="username"
              value={this.props.username}
              className="form-group"
            />
          </div>
          <div>
            <label>Пароль</label>
            <br />
            <Field
              component="input"
              minLength={6}
              type="password"
              name="password"
              value={this.props.password}
              className="form-group"
            />
          </div>
          <div>
            <label>Имя</label>
            <br />
            <Field
              component="input"
              minLength={2}
              maxLength={25}
              name="firstName"
              value={this.props.firstName}
              className="form-group"
            />
          </div>
          <div>
            <label>Фамилия</label>
            <br />
            <Field
              component="input"
              minLength={2}
              maxLength={25}
              name="lastName"
              value={this.props.lastName}
              className="form-group"
            />
          </div>
          <div>
            <label>Почта</label>
            <br />
            <Field
              component="input"
              type="email"
              minLength={2}
              maxLength={25}
              name="email"
              value={this.props.email}
              className="form-group"
            />
          </div>
          <div>
            <label>Город проживания</label>
            <br />
            <Field
              component="input"
              type="text"
              minLength={3}
              maxLength={40}
              name="city"
              value={this.props.city}
              className="form-group"
            />
          </div>
          <div>
            <label>Улица</label>
            <br />
            <Field
              component="input"
              type="text"
              minLength={3}
              maxLength={40}
              name="street"
              value={this.props.street}
              className="form-group"
            />
          </div>
          <div>
            <label>Почтовый индекс</label>
            <br />
            <Field
              component="input"
              type="text"
              minLength={5}
              maxLength={25}
              name="zipcode"
              value={this.props.zipcode}
              className="form-group"
            />
          </div>
          <div>
            <label>Номер телефона</label>
            <br />
            <Field
              component="input"
              type="text"
              minLength={5}
              maxLength={25}
              name="phone"
              value={this.props.phone}
              className="form-group"
            />
            <br />
            <span>Укажите ваш номер в формате: +X (XXX) XXX-XX-XX</span>
          </div>
          <div>
            <label>Статус пользователя</label>
            <br />
            <Field component="select" name="status" className="form-group">
              {this.props.availableStatuses.map((st) =>
                st === this.props.currentStatus ? (
                  <option value={st} selected>
                    {st}
                  </option>
                ) : (
                  <option value={st}>{st}</option>
                )
              )}
            </Field>
            <br />
            <span>Укажите ваш номер в формате: +X (XXX) XXX-XX-XX</span>
          </div>
          <button onClick={this.handleSubmit} className="bg-primary">
            Добавить
          </button>
          <button onClick={this.handleAdminBack} className="bg-secondary">
            <Link to="/admin/">Назад</Link>
          </button>
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
  fromAdditionToAdmin: () => dispatch(fromAdditionToAdmin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormUserAddition);

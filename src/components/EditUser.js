import React, { Component } from "react";
import { formValueSelector, reduxForm, Field, change } from "redux-form";
import { connect } from "react-redux";
import { fromEditingToAdmin, updateUser } from "../store/actions";
import { Link } from "react-router-dom";
import "../static/EditUser.css";

class UserEditing extends Component {
  handleSubmit = () => {
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
  };

  handleAdminBack = () => {
    this.props.fromEditingToAdmin();
  };

  render() {
    return (
      <div className="usr-box">
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
              className="form-control usr-edit"
            />
          </div>
          <hr />
          <div>
            <label>Имя пользователя</label>
            <br />
            <Field
              component="input"
              minLength={6}
              type="text"
              name="username"
              placeholder={this.props.username}
              value={this.props.username}
              className="form-control usr-edit"
            />
          </div>
          <hr />
          <div>
            <label>Пароль</label>
            <br />
            <Field
              component="input"
              minLength={6}
              type="password"
              name="password"
              value={this.props.password}
              placeholder={this.props.password}
              className="form-control usr-edit"
            />
          </div>
          <hr />
          <div>
            <label>Имя</label>
            <br />
            <Field
              component="input"
              minLength={2}
              maxLength={25}
              name="firstName"
              value={this.props.firstName}
              placeholder={this.props.firstName}
              className="form-control usr-edit"
            />
          </div>
          <hr />
          <div>
            <label>Фамилия</label>
            <br />
            <Field
              component="input"
              minLength={2}
              maxLength={25}
              name="lastName"
              value={this.props.lastName}
              placeholder={this.props.lastName}
              className="form-control usr-edit"
            />
          </div>
          <hr />
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
              placeholder={this.props.email}
              className="form-control usr-edit"
            />
          </div>
          <hr />
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
              placeholder={this.props.city}
              className="form-control usr-edit"
            />
          </div>
          <hr />
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
              placeholder={this.props.street}
              className="form-control usr-edit"
            />
          </div>
          <hr />
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
              placeholder={this.props.zipcode}
              className="form-control usr-edit"
            />
          </div>
          <hr />
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
              placeholder={this.props.phone}
              className="form-control usr-edit"
            />
            <br />
            <span className="small">
              Укажите ваш номер в формате: +X (XXX) XXX-XX-XX
            </span>
          </div>
          <hr />
          <div>
            <label>Статус пользователя</label>
            <br />
            <Field
              component="select"
              name="status"
              className="form-control usr-edit"
            >
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
  fromEditingToAdmin: () => dispatch(fromEditingToAdmin()),
  updateUser: () => dispatch(updateUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormUserEditing);

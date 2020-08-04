import React, { Component } from "react";
import { reduxForm, formValueSelector, Field, change } from "redux-form";
import { connect } from "react-redux";
import { authorize } from "../store/actions";

class Authorization extends Component {
  handleSubmit = (ev) => {
    this.props.authorize();
    this.props.updateField("login", "username", "");
    this.props.updateField("login", "password", "");
  };

  render() {
    return (
      <div align="center">
        <div>
          <label>Введите имя пользователя:</label>
          <br />
          <Field
            component="input"
            minLength={2}
            maxLength={25}
            name="username"
            value={this.props.username}
          />
        </div>
        <div>
          <label>Введите пароль:</label>
          <br />
          <Field
            component="input"
            minLength={6}
            name="password"
            value={this.props.password}
          />
        </div>
        <button onClick={this.handleSubmit}>Войти</button>
      </div>
    );
  }
}

const ReduxFormAuthorization = reduxForm({
  form: "login",
})(Authorization);

const mapStateToProps = (state) => {
  const selector = formValueSelector("login");
  const username = selector(state, "username");
  const password = selector(state, "password");
  return {
    username: state.main.currentUsername || username,
    password: state.main.currentPassword || password,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authorize: () => dispatch(authorize()),
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormAuthorization);

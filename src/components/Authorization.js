import React, { Component } from "react";
import { reduxForm, formValueSelector, Field, change } from "redux-form";
import { connect } from "react-redux";
import { authorize } from "../store/actions";
import "../static/Authorization.css";
import getErrors from "../utils/getErrorsAuth";

class Authorization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };
  }

  handleSubmit = (ev) => {
    const errors = getErrors(this.props.username, this.props.password);
    if (!errors.username.length && !errors.password.length) {
      this.setState({ errors: {} });
      this.props.authorize();
      this.props.updateField("login", "username", "");
      this.props.updateField("login", "password", "");
    } else {
      ev.preventDefault();
      this.setState({ errors: errors });
    }
  };

  render() {
    return (
      <div align="center" className="auth">
        <div>
          <label className="m-2">Введите имя пользователя:</label>
          <br />
          <Field
            component="input"
            type="text"
            minLength="6"
            maxLength="25"
            name="username"
            value={this.props.username}
            placeholder="Username"
            className="m-2 authField form-control"
            required
          />
          {this.state.errors.username &&
            this.state.errors.username.map((error, index) => (
              <div className="text-sm-left ml-2" key={index}>
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <hr />
        <div>
          <label className="m-2">Введите пароль:</label>
          <br />
          <Field
            component="input"
            type="password"
            minLength="7"
            name="password"
            value={this.props.password}
            placeholder="Password"
            className="m-2 authField form-control"
            required
          />
          {this.state.errors.password &&
            this.state.errors.password.map((error, index) => (
              <div className="text-sm-left ml-2" key={index}>
                <p className="small text-danger">{error}</p>
              </div>
            ))}
        </div>
        <button
          onClick={this.handleSubmit}
          className="btn btn-light btn-lg mt-4"
        >
          Войти
        </button>
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

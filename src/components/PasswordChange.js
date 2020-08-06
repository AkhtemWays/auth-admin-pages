import React, { Component } from "react";
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import { connect } from "react-redux";
import "../static/PasswordChange.css";
import { changeUserPassword } from "../store/actions";
import { Link } from "react-router-dom";
import getErrors from "../utils/getErrorsPasswordChange";
import BackButton from "./typicalButtons/BackButton";

class PasswordChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      initial: true,
    };
  }

  handleSubmit = (ev) => {
    const errors = getErrors(this.props.password, this.props.passwordAgain);
    if (
      !errors.password.length &&
      !errors.passwordAgain.length &&
      errors.same
    ) {
      this.setState({ errors: {}, initial: true });
      this.props.changeUserPassword();
      this.props.updateField("passwordChange", "password", "");
      this.props.updateField("passwordChange", "passwordAgain", "");
    } else {
      ev.preventDefault();
      this.setState({ errors: errors, initial: false });
    }
  };

  render() {
    return (
      <>
        <div align="center" className="psChange">
          {!this.state.errors.same && !this.state.initial && (
            <div>
              <h6 className="text-danger">Пароли не совпадают</h6>
            </div>
          )}
          <div className="mt-4">
            <div>
              <label className="m-2">Новый пароль:</label>
              <br />
              <Field
                component="input"
                type="password"
                minLength="7"
                name="password"
                value={this.props.password}
                placeholder="Password"
                className="m-2 form-control"
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
              <label className="m-2">Подтвердите пароль:</label>
              <br />
              <Field
                component="input"
                type="password"
                minLength="7"
                name="passwordAgain"
                value={this.props.passwordAgain}
                placeholder="Password again"
                className="m-2 form-control"
                required
              />
              {this.state.errors.passwordAgain &&
                this.state.errors.passwordAgain.map((error) => (
                  <div className="text-sm-left ml-2">
                    <p className="small text-danger">{error}</p>
                  </div>
                ))}
            </div>
            <Link to="/admin/">
              <button
                onClick={this.handleSubmit}
                className="btn btn-primary btn-lg m-2"
              >
                Изменить
              </button>
            </Link>
            <BackButton />
          </div>
        </div>
      </>
    );
  }
}

const ReduxFormPasswordChange = reduxForm({
  form: "passwordChange",
})(PasswordChange);

const mapStateToProps = (state) => {
  const selector = formValueSelector("passwordChange");
  const password = selector(state, "password");
  const passwordAgain = selector(state, "passwordAgain");
  return {
    password: state.main.passwordFocus || password,
    passwordAgain: state.main.passwordFocusAgain || passwordAgain,
    currentUser: state.main.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
  changeUserPassword: () => dispatch(changeUserPassword()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormPasswordChange);

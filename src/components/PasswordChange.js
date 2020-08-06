import React, { Component } from "react";
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import { connect } from "react-redux";
import "../static/PasswordChange.css";
import { fromPSChangeToAdmin, changeUserPassword } from "../store/actions";
import { Link } from "react-router-dom";

class PasswordChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };
  }

  getErrors = () => {};

  handleSubmit = (ev) => {
    this.props.changeUserPassword();
  };

  render() {
    return (
      <div align="center" className="psChange">
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
        <Link to="/admin/">
          <button
            onClick={this.props.fromPSChangeToAdmin}
            className="btn btn-info btn-lg m-2"
          >
            Назад
          </button>
        </Link>
      </div>
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateField: (form, field, newValue) =>
    dispatch(change(form, field, newValue)),
  fromPSChangeToAdmin: () => dispatch(fromPSChangeToAdmin()),
  changeUserPassword: () => dispatch(changeUserPassword()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxFormPasswordChange);

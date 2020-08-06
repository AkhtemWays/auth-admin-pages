import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, setPSChangeMode, backToAdmin } from "../store/actions";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/admin/">
                <button
                  onClick={this.props.backToAdmin}
                  className="display-none border-0"
                >
                  Администрация
                </button>
              </Link>
            </li>
          </ul>
          <span className="navbar-text mr-5">
            Привет {this.props.currentUser.name.split(" ")[0]}
          </span>

          <span className="navbar-text mr-5">
            <Link to="/admin/passwordchange/">
              <button
                onClick={this.props.setPSChangeMode}
                className="display-none border-0"
              >
                Сменить пароль
              </button>
            </Link>
          </span>

          <span className="navbar-text">
            <Link to="/login/" onClick={this.props.logout}>
              Выйти
            </Link>
          </span>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.main.currentUser,
  passwordChangeMode: state.main.passwordChangeMode,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  setPSChangeMode: () => dispatch(setPSChangeMode()),
  backToAdmin: () => dispatch(backToAdmin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

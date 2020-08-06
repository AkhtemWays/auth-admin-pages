import React, { Component } from "react";
import { connect } from "react-redux";
import UserAddition from "./UserAddition";
import EditUser from "./EditUser";
import Admin from "./Admin";
import { Redirect, Route } from "react-router-dom";
import Detail from "./Detail";
import PasswordChange from "./PasswordChange";

class UserAuthorizedFeatures extends Component {
  render() {
    return (
      <>
        <Route component={Admin} path="/admin/" strict exact={true} />
        <Route
          path="/admin/edit/:userId/"
          strict
          exact={true}
          component={EditUser}
        />
        <Route
          component={UserAddition}
          path="/admin/add/"
          strict={true}
          exact={true}
        />
        <Route
          component={Detail}
          path="/admin/detail/:userId/"
          strict
          exact={true}
        />
        <Route
          component={PasswordChange}
          path="/admin/passwordchange/:userId/"
          strict
          exact={true}
        />
        {this.props.isAuthorized &&
          !this.props.userAdditionMode &&
          !this.props.userEditMode &&
          !this.props.userDetailMode && <Redirect to="/admin/" />}
        {this.props.isAuthorized && this.props.userAdditionMode && (
          <Redirect to="/admin/add/" strict exact />
        )}
        {this.props.userEditMode && this.props.isAuthorized && (
          <Redirect to="/admin/edit/:userId/" strict exact />
        )}
        {this.props.userDetailMode && this.props.isAuthorized && (
          <Redirect to="/admin/detail/:userId/" strict exact />
        )}
        {this.props.passwordChangeMode && this.props.isAuthorized && (
          <Redirect to="/admin/passwordchange/:userId/" strict exact />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthorized: state.main.isAuthorized,
  userAdditionMode: state.main.userAdditionMode,
  userEditMode: state.main.userEditMode,
  userDetailMode: state.main.userDetailMode,
  passwordChangeMode: state.main.passwordChangeMode,
});

export default connect(mapStateToProps, null)(UserAuthorizedFeatures);

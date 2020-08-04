import React, { Component } from "react";
import { connect } from "react-redux";
import UserAddition from "./UserAddition";
import EditUser from "./EditUser";
import Admin from "./Admin";
import { Redirect, Route } from "react-router-dom";

class UserAuthorizedFeatures extends Component {
  render() {
    return (
      <>
        <Route component={Admin} path="/admin/" strict exact={true} />
        <Route
          path="/admin/edit/:userId?/"
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
        {this.props.isAuthorized &&
          !this.props.userAdditionMode &&
          !this.props.userEditMode && <Redirect to="/admin/" />}
        {this.props.isAuthorized && this.props.userAdditionMode && (
          <Redirect to="/admin/add/" />
        )}
        {this.props.userEditMode && this.props.isAuthorized && (
          <Redirect to="/admin/edit/:userId/" />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthorized: state.main.isAuthorized,
  userAdditionMode: state.main.userAdditionMode,
  userEditMode: state.main.userEditMode,
});

export default connect(mapStateToProps, null)(UserAuthorizedFeatures);

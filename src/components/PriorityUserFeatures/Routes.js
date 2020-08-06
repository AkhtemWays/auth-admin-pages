import React, { Component } from "react";
import { Route } from "react-router-dom";
import Detail from "../Detail";
import PasswordChange from "../PasswordChange";
import UserAddition from "../UserAddition";
import EditUser from "../EditUser";
import Admin from "../Admin";

export default class Routes extends Component {
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
          path="/admin/passwordchange/"
          strict
          exact={true}
        />
      </>
    );
  }
}

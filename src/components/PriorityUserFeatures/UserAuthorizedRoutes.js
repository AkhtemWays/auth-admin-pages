import React, { Component } from "react";
import Routes from "./Routes";
import Permissions from "./Permissions";

export default class UserAuthorizedRoutes extends Component {
  render() {
    return (
      <>
        <Routes />
        <Permissions />
      </>
    );
  }
}

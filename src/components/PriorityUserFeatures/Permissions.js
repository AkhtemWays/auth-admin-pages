import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Permissions extends Component {
  render() {
    return (
      <>
        {this.props.isAuthorized &&
          !this.props.userAdditionMode &&
          !this.props.userEditMode &&
          !this.props.userDetailMode && <Redirect to="/admin/" />}
        {this.props.isAuthorized &&
          this.props.userAdditionMode &&
          this.props.isSuper && <Redirect to="/admin/add/" strict exact />}
        {this.props.userEditMode && this.props.isSuper && (
          <Redirect to="/admin/edit/:userId/" strict exact />
        )}
        {this.props.userEditMode && this.props.isManager && (
          <Redirect to="/admin/edit/:userId/" strict exact />
        )}
        {this.props.userDetailMode && this.props.isAuthorized && (
          <Redirect to="/admin/detail/:userId/" strict exact />
        )}
        {this.props.passwordChangeMode && this.props.isAuthorized && (
          <Redirect to="/admin/passwordchange/" strict exact />
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
  isSuper: state.main.isSuper,
  isObserver: state.main.isObserver,
  isManager: state.main.isManager,
});

export default connect(mapStateToProps, null)(Permissions);

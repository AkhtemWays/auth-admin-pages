import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import Authorization from "./Authorization";
import UserAddition from "./UserAddition";
import EditUser from "./EditUser";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Admin from "./Admin";

class Content extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact={true} render={() => <Redirect to="/login/" />} />

        <Route component={Admin} path="/admin/" strict exact={true} />
        <Route
          path="/admin/edit/:userId?/"
          strict
          exact={true}
          component={EditUser}
        />
        <Route component={Authorization} exact={true} strict path="/login/" />
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
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

const mapStateToProps = (state) => ({
  isAuthorized: state.main.isAuthorized,
  userAdditionMode: state.main.userAdditionMode,
  userEditMode: state.main.userEditMode,
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

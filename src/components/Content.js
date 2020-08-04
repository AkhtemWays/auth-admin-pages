import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import Authorization from "./Authorization";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Admin from "./Admin";

class Content extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact={true} render={() => <Redirect to="/login/" />} />
        <Route component={Authorization} exact={true} strict path="/login/" />
        {this.props.isAuthorized && (
          <Redirect to="/admin/" strict exact={true} />
        )}
        <Route component={Admin} path="/admin/" strict exact={true} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

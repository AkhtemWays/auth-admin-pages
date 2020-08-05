import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import UserAuthorizedFeatures from "./UserAuthorizedFeatures";
import Authorization from "./Authorization";

class Content extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact={true} render={() => <Redirect to="/login/" />} />
        <Route component={Authorization} exact={true} strict path="/login/" />
        {this.props.isAuthorized ? (
          <UserAuthorizedFeatures />
        ) : (
          <Redirect to="/login/" />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

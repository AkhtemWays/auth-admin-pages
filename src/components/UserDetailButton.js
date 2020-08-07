import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setDetail } from "../store/actions";
import { connect } from "react-redux";

class UserDetailButton extends Component {
  render() {
    return (
      <Link to="/admin/detail/">
        <button
          className="btn btn-info btn-lg"
          onClick={() => this.props.setDetail(this.props.user.id)}
        >
          Подробнее
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDetail: (id) => dispatch(setDetail(id)),
});

export default connect(null, mapDispatchToProps)(UserDetailButton);

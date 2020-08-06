import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setEditMode } from "../store/actions";
import { connect } from "react-redux";

class UserEditButton extends Component {
  render() {
    return (
      <Link to="/admin/edit/:userId/">
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => this.props.setEditMode(this.props.user.id)}
        >
          Редактировать
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEditMode: (id) => dispatch(setEditMode(id)),
});

export default connect(null, mapDispatchToProps)(UserEditButton);

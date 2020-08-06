import React, { Component } from "react";
import { deleteUser } from "../store/actions";
import { connect } from "react-redux";

class DeleteUserButton extends Component {
  render() {
    return (
      <button
        className="btn btn-danger btn-lg"
        onClick={() => this.props.deleteUser(this.props.user.id)}
      >
        Удалить{" "}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
});

export default connect(null, mapDispatchToProps)(DeleteUserButton);

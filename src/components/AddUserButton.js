import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addUserMode } from "../store/actions";
import { connect } from "react-redux";

class AddUser extends Component {
  render() {
    return (
      <Link to="/admin/add/">
        <button
          className="btn btn-lg btn-success"
          onClick={this.props.addUserMode}
        >
          Добавить
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserMode: () => dispatch(addUserMode()),
});

export default connect(null, mapDispatchToProps)(AddUser);

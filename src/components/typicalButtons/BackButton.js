import React, { Component } from "react";
import { Link } from "react-router-dom";
import { backToAdmin } from "../../store/actions";
import { connect } from "react-redux";

class BackButton extends Component {
  render() {
    return (
      <Link to="/admin/">
        <button
          onClick={this.props.backToAdmin}
          className="btn btn-info btn-lg m-2"
        >
          Назад
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  backToAdmin: () => dispatch(backToAdmin),
});

export default connect(null, mapDispatchToProps)(BackButton);

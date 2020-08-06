import React, { Component } from "react";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { connect } from "react-redux";

class SearchFeature extends Component {
  render() {
    return (
      <>
        <label>Поиск:</label>
        <Field
          component="input"
          className="form-control"
          style={{ width: "200px" }}
          name="search"
          value={this.props.search}
        />
      </>
    );
  }
}

const ReduxFieldSearchFeature = reduxForm({
  form: "adminFeatures",
})(SearchFeature);

const mapStateToProps = (state) => {
  const selector = formValueSelector("adminFeatures");
  const search = selector(state, "search");
  return {
    search: state.main.search || search,
  };
};

export default connect(mapStateToProps, null)(ReduxFieldSearchFeature);

import React, { Component } from "react";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { connect } from "react-redux";

class SortFeature extends Component {
  render() {
    return (
      <>
        <label>Сортировать по: </label>
        <Field
          component="select"
          className="custom-select ml-1"
          style={{ width: "200px" }}
          name="sortOption"
          value={this.props.currentSortOption}
        >
          {this.props.sortOptions.map((option, index) =>
            option === this.props.currentSortOption ? (
              <option value={option} defaultValue={option} key={index}>
                {option}
              </option>
            ) : (
              <option value={option} key={index}>
                {option}
              </option>
            )
          )}
        </Field>
      </>
    );
  }
}

const ReduxFieldSortFeature = reduxForm({
  form: "adminFeatures",
})(SortFeature);

const mapStateToProps = (state) => {
  const selector = formValueSelector("adminFeatures");
  const sortOption = selector(state, "sortOption");
  return {
    currentSortOption: state.main.currentSortOption || sortOption,
    sortOptions: state.main.sortOptions,
  };
};

export default connect(mapStateToProps, null)(ReduxFieldSortFeature);

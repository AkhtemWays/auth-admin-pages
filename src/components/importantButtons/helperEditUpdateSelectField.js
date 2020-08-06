import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

class HelperEditUpdateSelectField extends Component {
  render() {
    return (
      <>
        {this.props.availableStatuses.map(
          (st, index) =>
            this.props.rank > index &&
            (st === this.props.currentStatus ? (
              <option value={st} defaultValue={st} key={index}>
                {st}
              </option>
            ) : (
              <option value={st} key={index}>
                {st}
              </option>
            ))
        )}
      </>
    );
  }
}

const ReduxEditUpdateSelectField = reduxForm({
  form: "userEditing",
})(HelperEditUpdateSelectField);

const mapStateToProps = (state) => {
  const selector = formValueSelector("userEditing");
  const status = selector(state, "status");
  return {
    availableStatuses: state.main.availableStatuses,
    currentStatus: state.main.editModeStatus || status,
  };
};

export default connect(mapStateToProps, null)(ReduxEditUpdateSelectField);

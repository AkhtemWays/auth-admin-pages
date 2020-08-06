import React, { Component } from "react";
import { Field } from "redux-form";
import { connect } from "react-redux";
import HelperEditUpdateSelectField from "./helperEditUpdateSelectField";

class EditUpdateSelectField extends Component {
  render() {
    return (
      <Field component="select" name="status" className="form-control col-5">
        {(this.props.isSuper && <HelperEditUpdateSelectField rank={4} />) ||
          (this.props.isManager && <HelperEditUpdateSelectField rank={2} />) ||
          (this.props.isSeniorManager && (
            <HelperEditUpdateSelectField rank={3} />
          )) ||
          (this.props.isObserver && <HelperEditUpdateSelectField rank={1} />)}
      </Field>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSuper: state.main.isSuper,
    isManager: state.main.isManager,
    isSeniorManager: state.main.isSeniorManager,
    isObserver: state.main.isObserver,
    currentUser: state.main.currentUser,
  };
};

export default connect(mapStateToProps, null)(EditUpdateSelectField);

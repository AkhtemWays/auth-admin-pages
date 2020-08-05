import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUser,
  addUserMode,
  setEditMode,
  setDetail,
} from "../store/actions";
import { Link } from "react-router-dom";
import { Field, formValueSelector, reduxForm } from "redux-form";

class Admin extends Component {
  render() {
    return (
      <div className="container" align="center">
        <table className="table table-lg table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Почта</th>
              <th scope="col">
                <Link to="/admin/add/">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={this.props.addUserMode}
                  >
                    Добавить Пользователя
                  </button>
                </Link>
              </th>
              <th scope="col">
                <Field
                  component="select"
                  className="custom-select ml-1"
                  style={{ width: "140px" }}
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
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentUsers.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name.split(" ")[0]}</td>
                <td>{user.name.split(" ")[1]}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger btn-small"
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    Удалить
                  </button>
                </td>
                <td>
                  <Link to="/admin/edit/:userId/">
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => this.props.setEditMode(user.id)}
                    >
                      Редактировать
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to="/admin/detail/:userId/">
                    <button
                      className="btn btn-info btn-small"
                      onClick={() => this.props.setDetail(user.id)}
                    >
                      Подробнее
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const ReduxFormAdmin = reduxForm({
  form: "sortOption",
})(Admin);

const mapStateToProps = (state) => {
  const selector = formValueSelector("sortOption");
  const sortOption = selector(state, "sortOption");
  return {
    currentUsers: state.main.currentUsers,
    currentSortOption: state.main.currentSortOption || sortOption,
    sortOptions: state.main.sortOptions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  addUserMode: () => dispatch(addUserMode()),
  setEditMode: (id) => dispatch(setEditMode(id)),
  setDetail: (id) => dispatch(setDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormAdmin);

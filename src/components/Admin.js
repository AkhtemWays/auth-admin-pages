import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUser,
  addUserMode,
  setEditMode,
  setDetail,
  logout,
  setPSChangeMode,
} from "../store/actions";
import { Link, NavLink } from "react-router-dom";
import { Field, formValueSelector, reduxForm } from "redux-form";

class Admin extends Component {
  render() {
    return (
      <div className="container" align="center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Администрация <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <span className="navbar-text mr-5">
              Привет {this.props.currentUser.name.split(" ")[0]}
            </span>
            <span className="navbar-text mr-5">
              <Link to="/admin/passwordchange/">
                <button
                  onClick={this.props.setPSChangeMode}
                  className="display-none border-0"
                >
                  Сменить пароль
                </button>
              </Link>
            </span>
            <span className="navbar-text">
              <Link to="/login/" onClick={this.props.logout}>
                Выйти
              </Link>
            </span>
          </div>
        </nav>
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
                    className="btn btn-lg btn-success"
                    onClick={this.props.addUserMode}
                  >
                    Добавить
                  </button>
                </Link>
              </th>
              <th scope="col">
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
              </th>
              <th scope="col">
                <label>Поиск:</label>
                <Field
                  component="input"
                  className="form-control"
                  style={{ width: "200px" }}
                  name="search"
                  value={this.props.search}
                />
              </th>
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
                    className="btn btn-danger btn-lg"
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    Удалить{" "}
                  </button>
                </td>
                <td>
                  <Link to="/admin/edit/:userId/">
                    <button
                      className="btn btn-secondary btn-lg"
                      onClick={() => this.props.setEditMode(user.id)}
                    >
                      Редактировать
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to="/admin/detail/:userId/">
                    <button
                      className="btn btn-info btn-lg"
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
  form: "adminFeatures",
})(Admin);

const mapStateToProps = (state) => {
  const selector = formValueSelector("adminFeatures");
  const sortOption = selector(state, "sortOption");
  const search = selector(state, "search");
  return {
    currentUsers: state.main.currentUsers,
    currentSortOption: state.main.currentSortOption || sortOption,
    sortOptions: state.main.sortOptions,
    search: state.main.search || search,
    currentUser: state.main.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  addUserMode: () => dispatch(addUserMode()),
  setEditMode: (id) => dispatch(setEditMode(id)),
  setDetail: (id) => dispatch(setDetail(id)),
  logout: () => dispatch(logout()),
  setPSChangeMode: () => dispatch(setPSChangeMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormAdmin);

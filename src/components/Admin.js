import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUser,
  addUserMode,
  setEditMode,
  setDetail,
} from "../store/actions";
import { Link } from "react-router-dom";

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
                <Link to="/admin/add/" onClick={this.props.addUserMode}>
                  Добавить Пользователя
                </Link>
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
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
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => this.props.setEditMode(user.id)}
                  >
                    <Link to="/admin/edit/:userId/">Редактировать</Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info btn-small"
                    onClick={() => this.props.setDetail(user.id)}
                  >
                    Подробнее
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.main.users,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  addUserMode: () => dispatch(addUserMode()),
  setEditMode: (id) => dispatch(setEditMode(id)),
  setDetail: (id) => dispatch(setDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

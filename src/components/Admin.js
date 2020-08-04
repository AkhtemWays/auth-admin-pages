import React, { Component } from "react";
import { connect } from "react-redux";

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
                  <button className="btn btn-danger btn-small">Удалить</button>
                </td>
                <td>
                  <button className="btn btn-secondary btn-small">
                    Исправить
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

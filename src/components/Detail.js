import React, { Component } from "react";
import { connect } from "react-redux";
import { fromDetailToAdmin, logout } from "../store/actions";
import { Link } from "react-router-dom";

class Detail extends Component {
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
            <span className="navbar-text mr-5">Сменить пароль</span>
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
              <th scope="col">Аттрибут</th>
              <th scope="col">Значение</th>
              <th scope="col">
                <button
                  className="btn btn-info btn-sm"
                  onClick={this.props.fromDetailToAdmin}
                >
                  Назад
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{this.props.detailedUser.id || ""}</td>
            </tr>
            <tr>
              <td>Имя</td>
              <td>
                {this.props.detailedUser.name.split(" ")[0]
                  ? this.props.detailedUser.name.split(" ")[0]
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{this.props.detailedUser.name.split(" ")[1] || ""}</td>
            </tr>
            <tr>
              <td>Авторизован как</td>
              <td>{this.props.detailedUser.username || ""}</td>
            </tr>
            <tr>
              <td>Пароль</td>
              <td>{this.props.detailedUser.password || ""}</td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>{this.props.detailedUser.email || ""}</td>
            </tr>
            <tr>
              <td>Телефон для связи</td>
              <td>
                {this.props.detailedUser.phone
                  ? this.props.detailedUser.phone
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Статус пользователя</td>
              <td>{this.props.detailedUser.status || ""}</td>
            </tr>
            <tr>
              <td>Город проживания</td>
              <td>{this.props.detailedUser.address.city || ""}</td>
            </tr>
            <tr>
              <td>Улица</td>
              <td>{this.props.detailedUser.address.street || ""}</td>
            </tr>
            <tr>
              <td>Почтовый индекс</td>
              <td>{this.props.detailedUser.address.zipcode || ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  detailedUser: state.main.detailedUser,
  currentUser: state.main.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fromDetailToAdmin: () => dispatch(fromDetailToAdmin()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

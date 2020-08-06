import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import BackButton from "./typicalButtons/BackButton";

class Detail extends Component {
  render() {
    return (
      <div className="container" align="center">
        <NavBar />
        <table className="table table-lg table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Аттрибут</th>
              <th scope="col">Значение</th>
              <th scope="col">
                <BackButton />
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

export default connect(mapStateToProps, null)(Detail);

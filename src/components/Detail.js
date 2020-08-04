import React, { Component } from "react";
import { connect } from "react-redux";
import { fromDetailToAdmin } from "../store/actions";

class Detail extends Component {
  render() {
    return (
      <div className="container" align="center">
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
const superUser = {
  username: "AkhtemWays",
  password: "123",
  id: 0,
  name: "Akhtem Ways",
  email: "ahty.study@bk.ru",
  phone: "+7 (900) 475-18-16",
  status: "superUser",
  address: {
    city: "Moscow",
    zipcode: "106810",
    street: "Kaluzhskaya street",
  },
};

const mapStateToProps = (state) => ({
  detailedUser: state.main.detailedUser,
});

const mapDispatchToProps = (dispatch) => ({
  fromDetailToAdmin: () => dispatch(fromDetailToAdmin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

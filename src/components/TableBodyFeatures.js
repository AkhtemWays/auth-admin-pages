import React, { Component } from "react";
import DeleteUserButton from "./DeleteUserButton";
import UserDetailButton from "./UserDetailButton";
import UserEditButton from "./UserEditButton";
import { connect } from "react-redux";

class TableBodyFeatures extends Component {
  render() {
    return (
      <>
        {this.props.currentUsers.map((user) => (
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name.split(" ")[0]}</td>
            <td>{user.name.split(" ")[1]}</td>
            <td>{user.email}</td>
            <td>{this.props.isSuper && <DeleteUserButton user={user} />}</td>
            <td>{this.props.isSuper && <UserEditButton user={user} />}</td>
            <td>
              <UserDetailButton user={user} />
            </td>
          </tr>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUsers: state.main.currentUsers,
  isAuthorized: state.main.isAuthorized,
  isSuper: state.main.isSuper,
  isObserver: state.main.isObserver,
});

export default connect(mapStateToProps, null)(TableBodyFeatures);

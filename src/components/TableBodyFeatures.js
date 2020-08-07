import React, { Component } from "react";
import DeleteUserButton from "./DeleteUserButton";
import UserDetailButton from "./UserDetailButton";
import UserEditButton from "./UserEditButton";
import { connect } from "react-redux";

class TableBodyFeatures extends Component {
  render() {
    return (
      <>
        {this.props.currentUsers.map((user, index) => (
          <tr key={index}>
            <th scope="row">{user.id}</th>
            <td>{user.name.split(" ")[0]}</td>
            <td>{user.name.split(" ")[1]}</td>
            <td>{user.email}</td>
            <td>{this.props.isSuper && <DeleteUserButton user={user} />}</td>
            <td>
              {(this.props.isSuper && <UserEditButton user={user} />) ||
                (this.props.isManager &&
                  user.status === "unprioritizedUser" && (
                    <UserEditButton user={user} />
                  )) ||
                (this.props.isManager && user.status === "observerUser" && (
                  <UserEditButton user={user} />
                )) ||
                (this.props.isSeniorManager &&
                  user.status === "observerUser" && (
                    <UserEditButton user={user} />
                  )) ||
                (this.props.isSeniorManager &&
                  user.status === "unprioritizedUser" && (
                    <UserEditButton user={user} />
                  )) ||
                (this.props.isSeniorManager &&
                  user.status === "managerUser" && (
                    <UserEditButton user={user} />
                  ))}
            </td>
            <td>
              {(this.props.isObserver &&
                user.status === "unprioritizedUser" && (
                  <UserDetailButton user={user} />
                )) ||
                (this.props.isObserver &&
                  user.id === this.props.currentUser.id && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isManager &&
                  user.id === this.props.currentUser.id && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isManager && user.status === "observerUser" && (
                  <UserDetailButton user={user} />
                )) ||
                (this.props.isManager &&
                  user.status === "unprioritizedUser" && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isSuper && <UserDetailButton user={user} />) ||
                (this.props.isSeniorManager &&
                  user.status === "managerUser" && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isSeniorManager &&
                  user.status === "observerUser" && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isSeniorManager &&
                  user.status === "unprioritizedUser" && (
                    <UserDetailButton user={user} />
                  )) ||
                (this.props.isSeniorManager &&
                  user.id === this.props.currentUser.id && (
                    <UserDetailButton user={user} />
                  ))}
            </td>
          </tr>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUsers: state.main.currentUsers,
  isSuper: state.main.isSuper,
  isManager: state.main.isManager,
  currentUser: state.main.currentUser,
  isObserver: state.main.isObserver,
  isSeniorManager: state.main.isSeniorManager,
});

export default connect(mapStateToProps, null)(TableBodyFeatures);

import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import AddUserButton from "./AddUserButton";
import SortFeature from "./SortFeature";
import SearchFeature from "./SearchFeature";
import TableBodyFeatures from "./TableBodyFeatures";

class Admin extends Component {
  render() {
    return (
      <div className="container" align="center">
        <NavBar />
        <table className="table table-lg table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Почта</th>
              <th scope="col">
                <AddUserButton />
              </th>
              <th scope="col">
                <SortFeature />
              </th>
              <th scope="col">
                <SearchFeature />
              </th>
            </tr>
          </thead>
          <tbody>
            <TableBodyFeatures />
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(null, null)(Admin);

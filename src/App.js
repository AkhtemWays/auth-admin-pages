import React, { Component } from "react";
import { Provider } from "react-redux";
import Content from "./components/Content";
import store from "./store/store";
import "./static/main.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Content />
        </div>
      </Provider>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Table from "./Table";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById("root")
);

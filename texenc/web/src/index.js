import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
  , document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as calc from './Calc';
import reportWebVitals from './reportWebVitals';
let div = document.querySelector("div");
div.setAttribute("school", "ANeeq");


ReactDOM.render(
  <React.StrictMode>
    <ol>
      <li>Addition is {calc.add(2, 6)}</li>
      <li>Subtraction is {calc.sub(8, 9)}</li>
      <li>Multiplication is {calc.mul(6, 6)}</li>
      <li>Division is {calc.div(10, 3)} </li>
    </ol>
  </React.StrictMode>
  , document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

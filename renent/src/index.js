// import DOM from 'dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Li from "./Li";
import reportWebVitals from './reportWebVitals';

// let name = window.prompt("Enter your name");
const currDate = new Date().toLocaleDateString();

let styling = {
  color: "antiquewhite",
  textAlign: "centre",
  backgroundColor: "brown"
};


ReactDOM.render(
  <>
    <Li />



  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

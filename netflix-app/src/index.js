import ReactDOM from 'react-dom';
import React from 'react';
// import Clock from './Clock';

import './index.css';
// import App from './App';
// import Card from './Card';
// import Sdata from './Sdata';
import reportWebVitals from './reportWebVitals';
import App from './App';



/*const SDATA = () => {
  return (Sdata.map((val, index) => {
    return (
      <Card
        key={val.id}
        imgSrc={val.imgSrc}
        title={val.title}
        name={(index + 1) + ". " + val.name
        }
        link={val.link}

      />
    )
  }));
};

*/



ReactDOM.render(

  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [...arr1, 7, 8, 9, 10];
console.log(arr2);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

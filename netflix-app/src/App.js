import './App.css';
import React, { useState } from 'react';


function App() {

  let newDate = new Date().toLocaleTimeString();

  const [currDate, setTime] = useState(newDate);

  const Clicker = () => {

    newDate = new Date().toLocaleTimeString();

    setTime(newDate);

  }

  setInterval(Clicker, 1000);

  return (

    <div style={{
      padding: "35px",
      marging: "5px",
      color: "grey",
      textAlign: "center",
      justifyContent: "center"
    }}>
      <h1 >{currDate} </h1>
    </div>
  );
}

export default App;

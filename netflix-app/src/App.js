import './App.css';
import Arr from './Arr';
import Clock from './Clock';
import Input from './Input';
import React, { useState } from 'react';



function App() {

  const [bgColor, setBack] = useState("white");
  const [currText, setText] = useState("Click Me");
  let [count, setCount] = useState(0)

  const Custom = () => {
    if (count < 3) {
      setBack(Arr[count].backgroundT);
      setText(Arr[count].textT);
      setCount(count++);
    }
    else {
      setBack(Arr[count].backgroundT);
      setText(Arr[count].textT);

    }
  }
  const reset = () => {
    setCount(0);
  }

  return (

    <div style={{
      padding: "35px",
      margin: "75px",
      color: "grey",
      backgroundColor: bgColor,
      textAlign: "center",
      border: "2px solid black",
      justifyContent: "center"
    }}>
      <Clock />

      <h2>{currText}</h2>
      <hr />
      <button onClick={Custom} onDoubleClick={reset}
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          border: "1px solid black",
          fontSize: "16px"


        }}
      >Click Me </button>

      <Input />

    </div>
  );
}

export default App;

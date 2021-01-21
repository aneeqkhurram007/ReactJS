import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const change = (event) => {

    if (event.target.id === "inc") {

      setCount(count + 1);
    } else {

      if (count > 0) {
        setCount(count - 1);
      }
      else {
        alert("Limit reached to 🎱");
        setCount(0);
      }



    }

  }
  return (
    <div className="App">
      <header className="App-header">
        Challenge 8
        <div>
          <h1>{count}</h1>
          <button onClick={change} id="inc">Increm</button>
          <button onClick={change} id="dec">Decrem</button>
        </div>

      </header>
    </div>
  );
}

export default App;

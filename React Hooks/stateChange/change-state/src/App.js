import './App.css';
import React, { useState } from 'react'

function App() {
  let name = "Aneeq Khurram";
  let modified = 'Modified';
  const [state, setState] = useState(name);

  return (
    <div className="App">
      <h1>
        {state}
      </h1>
      <button onClick={() => {

        let temp = (state === name) ? modified : name;
        setState(temp);
        modified = name;
        name = state;
      }} >
        Click Me
      </button>

    </div>
  );
}

export default App;

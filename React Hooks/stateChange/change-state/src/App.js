import './App.css';
import React, { useState } from 'react'
import RulesHooks from './components/RulesHooks';
function App() {
  let name = "Aneeq Khurram";
  let modified = 'Modified';
  const [state, setState] = useState(name);
  const changeMyName = () => {

    let temp = (state === name) ? modified : name;
    setState(temp);
    modified = name;
    name = state;
  }
  return (
    <div className="App-header">
      <RulesHooks state={state} />
      <button onClick={changeMyName} >
        Click Me
      </button>

    </div>
  );
}

export default App;

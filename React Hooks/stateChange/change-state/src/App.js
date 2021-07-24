import './App.css';
import React, { useState } from 'react'
import RulesHooks from './components/RulesHooks';
import UseState from './components/UseState';
import UseStateDot from './components/UseStateDot';
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
      {/* <RulesHooks state={state} /> */}
      {/* <UseState /> */}
      <UseStateDot />
      {/* <button onClick={changeMyName} >
        Click Me
      </button> */}

    </div>
  );
}

export default App;

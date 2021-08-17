// import './App.css';
import React, { /*useState*/ } from 'react'
import Counter from './components/Counter/Counter';
// import ToDoList from './ToDo List/ToDoList';
// import UseLocation from './components/useLocation';
// import ControlledForms from './components/Forms/ControlledForm/ControlledForm';
// import Project1 from './components/useEffect/Project1';
// import RulesHooks from './components/RulesHooks';
// import UseState from './components/UseState';
// import UseStateDot from './components/UseStateDot';
// import Challenge2 from './components/Challenge2';
// import ShortCircuit from './components/ShortCircuit';
// import LoginForm from './components/Forms/LoginForm';
function App() {
  // let name = "Aneeq Khurram";
  // let modified = 'Modified';
  // const [state, setState] = useState(name);
  // const changeMyName = () => {

  //   let temp = (state === name) ? modified : name;
  //   setState(temp);
  //   modified = name;
  //   name = state;
  // }
  return (
    <div className="App-header">
      {/* <RulesHooks state={state} /> */}
      {/* <UseState /> */}
      {/* <UseStateDot /> */}
      {/* <Challenge2 /> */}
      {/* <ShortCircuit /> */}
      {/* <LoginForm /> */}
      {/* <button onClick={changeMyName} >
        Click Me
      </button> */}
      {/* <Project1 /> */}
      {/* <ControlledForms /> */}
      {/* <UseLocation /> */}
      {/* <ToDoList /> */}
      <Counter />
    </div>
  );
}

export default App;

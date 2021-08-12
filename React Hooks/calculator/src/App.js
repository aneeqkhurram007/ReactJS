import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { incNumber, decNumber, mulNumber, divNumber } from "./actions/index";
function App() {
  const state = useSelector(state => state.changeTheNumber)
  const mulDivNum = useSelector(state => state.mulDivNum)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">


        <div>
          <a onClick={() => dispatch(incNumber())} href="#"  >
            +
          </a>
          <input type="text" value={state} />
          <a onClick={() => dispatch(decNumber())} href="#" >-</a>
        </div>
        <div>
          <a onClick={() => dispatch(mulNumber())} href="#" >*
          </a>
          <input type="text" value={mulDivNum} />
          <a onClick={() => dispatch(divNumber())} href="#" >/</a>
        </div>


      </header>
    </div>
  );
}

export default App;

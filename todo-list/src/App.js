import './App.css';
import React, { useState } from 'react'
import Li from './Li';
const App = () => {

  const [inputList, setInputList] = useState("");
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const [Items, setItems] = useState([]);
  const listOfItems = () => {
    setItems((prevItems) => {
      return [...prevItems, inputList];
    });
    setInputList("");
  }

  const deleteItems = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      });
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        TO-DO List App
        <div>
          <h3>React First Project</h3>
        </div>
        <div className="main_div">
          <div className="center_div">
            <br />
            <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>

            <ol style={{
              fontSize: "20px",

            }}>

              {Items.map((itemVal, index) => {
                return <Li text={itemVal} key={index} id={index}
                  onSelect={deleteItems}
                />;
              })}
            </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

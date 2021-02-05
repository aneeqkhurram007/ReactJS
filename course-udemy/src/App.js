import { useState } from 'react';
import './App.css';
import People from './People/People'

function App() {

  const [people, setPeople] = useState([
    {
      name: "Aneeq",
      age: 20
    }, {
      name: "Murshad",
      age: 4
    }, {
      name: "Wadda murshad",
      age: "Koi pta nahi"
    }
  ]);

  const changeState = (arg) => {
    setPeople([
      {
        name: arg,
        age: 4
      },
      {
        name: "Aneeq",
        age: 20
      }, {
        name: "Wadda murshad",
        age: "Check ta karo"
      }
    ]);
  }

  return (
    <div className="App">
      <People name={people[0].name}
        click={changeState.bind(this, "New Name")} >Ok then</People>
      <People age={people[1].age} >{people[1].name}</People>
      <People name={people[2].name} age={people[2].age} />
      <button onClick={changeState.bind(this, "Murshad")}>Change State</button>
    </div>
  );
}

export default App;

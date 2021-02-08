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

  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  }

  const changeState = (arg, id) => {

    const peopleIndex = people.findIndex((p) => {
      return p.id === id;
    })

    const person = { ...people[peopleIndex] };

    person.name = arg.target.value;

    const persons = [...people];
    persons[peopleIndex] = person;

    setPeople(persons);
  }

  const deletePerson = (index) => {
    // let person = people.slice();
    const person = [...people];
    person.splice(index, 1);
    setPeople(person);
  }

  const style = {
    color: "white",
    font: "inherit",
    border: "1px solid green",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "green"
  }

  let person = null;
  if (toggle === true) {
    person = <div>

      {people.map((person, index) => {
        return <People name={person.name}
          age={person.age}
          click={() => deletePerson(index)}
          key={index}
          change={(event) => {
            changeState(event, person.id)
          }} />
      })}

      {/* <People name={people[0].name}
    click={changeState.bind(this, "New Murshad")} >Ok then</People>
  <People age={people[1].age} >{people[1].name}</People>
  <People name={people[2].name} age={people[2].age} /> */}
    </div>;
    style.backgroundColor = "red";
    style.border = "1px solid red";

  }

  return (
    <div className="App">
      <h1>Hi I'm React</h1>
      <hr />
      <button onClick={toggleChange} style={style}>Toggle State</button>
      {person}

    </div>
  );
}

export default App;

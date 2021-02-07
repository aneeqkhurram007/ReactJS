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

    const person = [...people[peopleIndex]];

    person.name = arg;

    const persons = [...people];
    people[peopleIndex] = persons;

    setPeople(persons);
  }

  const deletePerson = (index) => {
    // let person = people.slice();
    const person = [...people];
    person.splice(index, 1);
    setPeople(person);
  }

  return (
    <div className="App">
      <button onClick={toggleChange}>Toggle State</button>

      {toggle ?
        <div>

          {people.map((person, index) => {
            return <People name={person.name} age={person.age} click={() => deletePerson(index)} key={index} change={(event) => {
              changeState(event, person.id)
            }} />
          })}

          {/* <People name={people[0].name}
            click={changeState.bind(this, "New Murshad")} >Ok then</People>
          <People age={people[1].age} >{people[1].name}</People>
          <People name={people[2].name} age={people[2].age} /> */}
        </div>
        : null
      }
    </div>
  );
}

export default App;

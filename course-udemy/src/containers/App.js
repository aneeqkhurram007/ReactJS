import { useState } from 'react';
import './App.css';
import People from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


function App() {

  const [people, setPeople] = useState([
    {
      name: "Aneeq",
      age: 20
    }, {
      name: "John",
      age: 21
    }, {
      name: "Dave",
      age: 18
    }
  ]);

  const changeState = (arg, id) => {


    const peopleIndex = id;
    const person = people[peopleIndex];

    person.name = arg.target.value;

    const persons = [...people];
    persons[peopleIndex] = person;

    setPeople(persons);
  }

  const deletePerson = (index) => {
    const person = [...people];
    person.splice(index, 1);
    setPeople(person);
  }

  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  }

  let person = null;

  if (toggle === true) {
    person = <People
      people={people}
      deletePerson={deletePerson}
      changeState={changeState} />

  }


  return (
    <div className="App">
      <Cockpit toggle={toggle} toggleChange={toggleChange} people={people} />
      {person}

    </div>
  );
}

export default App;

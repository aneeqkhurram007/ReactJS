import { useState } from 'react';
import './App.css';
import People from './People/People'
import Radium, { StyleRoot } from 'radium'

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



  const style = {
    color: "white",
    font: "inherit",
    border: "1px solid green",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "green",
    ':hover': {
      backgroundColor: 'lightgreen',
      color: "black"
    }
  }

  let person = null;

  if (toggle === true) {
    person = people.map((p, index) => {
      return <People name={p.name}
        age={p.age}
        click={() => deletePerson(index)}
        key={index}
        change={(event) => {
          changeState(event, index)
        }} />
    })


    style.backgroundColor = "red";
    style.border = "1px solid red";
    style[':hover'] = {
      backgroundColor: "salmon",
      color: "black"
    };

  }

  let classes = [];

  if (people.length <= 2) {
    classes.push('red');
  }

  if (people.length <= 1) {
    classes.push('bold');
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi I'm React</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <hr />
        <button onClick={toggleChange} style={style}>Toggle State</button>
        {person}

      </div>
    </StyleRoot>
  );
}

export default Radium(App);

import { useState } from 'react';
import './App.css';
import People from './People/People'
import styled from 'styled-components'

const StyledButton = styled.button`
    color: white;
    font: inherit;
    border: 1px solid ${props => props.alt ? 'red' : 'green'};
    padding: 8px;
    cursor: pointer;
    background-color: ${props => props.alt ? 'red' : 'green'};
    
    &:hover{
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
 
`;

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
    person = people.map((p, index) => {
      return <People name={p.name}
        age={p.age}
        click={() => deletePerson(index)}
        key={index}
        change={(event) => {
          changeState(event, index)
        }} />
    })

  }

  let classes = [];

  if (people.length <= 2) {
    classes.push('red');
  }

  if (people.length <= 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>Hi I'm React</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <hr />
      <StyledButton alt={toggle} onClick={toggleChange} >Toggle State</StyledButton>
      {person}

    </div>
  );
}

export default App;

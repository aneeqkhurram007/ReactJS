import React from 'react';
import People from './People/People'

const Persons = (props) => props.people.map((p, index) => {
    return <People name={p.name}
        age={p.age}
        click={() => props.deletePerson(index)}
        key={index}
        change={(event) => {
            props.changeState(event, index)
        }} />
});


export default Persons;
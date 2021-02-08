import React from 'react';
import './People.css';
const People = (props) => {



    return (<div className="People">
        <h1 onClick={props.click} >Name: {props.name} </h1>
        <h3>Age: {props.age} </h3>
        <p >{props.children} </p>
        <input type="text"
            onChange={props.change}
            value={props.name} />
    </div>
    )

};
export default People;
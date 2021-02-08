import React from 'react';
import './People.css';
import Radium from 'radium'

const People = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: "450px"
        }
    }

    return (<div className="People" style={style}>
        <h1 onClick={props.click} >Name: {props.name} </h1>
        <h3>Age: {props.age} </h3>
        <p >{props.children} </p>
        <input type="text"
            onChange={props.change}
            value={props.name} />
    </div>
    )

};
export default Radium(People);
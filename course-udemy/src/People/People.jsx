import React from 'react';
const People = (props) => {



    return (<>
        <h1 onClick={props.click} >{props.name} </h1>
        <h3>{props.age} </h3>
        <p >{props.children} </p>
        <input type="text" onChange={props.change} value={props.name} />
    </>
    )

};
export default People;
import React from 'react';
const People = (props) => {



    return (<>
        <h1 onClick={props.click}>{props.name} </h1>
        <h3>{props.age} </h3>
        <p >{props.children} </p>
    </>
    )

};
export default People;
import React from 'react';
const People = (props) => {



    return (<>
        <h1>{props.name} </h1>
        <h3>{props.age} </h3>
        <p onClick={props.click}>{props.children} </p>
    </>
    )

};
export default People;
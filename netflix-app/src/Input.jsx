import React, { useState } from 'react';
const Input = () => {

    const [inputChange, setInput] = useState("");

    const inputEvent = (event) => {
        setInput(event.target.value)
    }
    const [fullName, setFName] = useState();
    const onSubmit = () => {
        setFName(inputChange);
    }

    return (
        <React.Fragment>
            <h3>Hello {fullName} </h3>
            <input type="text" placeholder="Enter your name"
                id="inputField" value={inputChange} onChange={inputEvent}
            />
            <br />
            <button type="submit"
                onClick={onSubmit} >Click Me</button>
        </React.Fragment>
    );
};
export default Input;
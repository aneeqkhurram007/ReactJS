import React, { useState } from 'react';
const Clock = () => {
    let newDate = new Date().toLocaleTimeString();

    const [currDate, setTime] = useState(newDate);

    const Clicker = () => {

        newDate = new Date().toLocaleTimeString();

        setTime(newDate);

    }

    setInterval(Clicker, 1000);
    return (

        <h1 >{currDate} </h1>

    );
}
export default Clock;

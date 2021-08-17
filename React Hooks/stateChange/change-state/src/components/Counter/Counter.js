import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [state, setstate] = useState(Date())


    useEffect(() => {

        setTimeout(() => {
            setstate(Date());
        }, 1000);


    }, [state])
    return (
        <div>
            <h1>Counter</h1>
            <h3>{state}</h3>
        </div>
    )
}

export default Counter

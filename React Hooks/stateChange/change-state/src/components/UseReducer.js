import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const reducer = (state, action) => {

        return action.type === "Increment" ? state += 1 : state -= 1;
    }
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <h1>Use Reducer</h1>
            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </>
    );
}
export default UseReducer;
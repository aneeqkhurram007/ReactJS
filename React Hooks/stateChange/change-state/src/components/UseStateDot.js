import React, { useState } from 'react'
const UseStateDot = () => {
    const [state, setstate] = useState({
        name: "Aneeq",
        age: 21
    })
    return (
        <div>
            <h2>
                Name: {state.name} and Age: {state.age}
            </h2>
            <button style={
                {
                    fontSize: 20,
                    marginLeft: "40%"
                }
            }
                onClick={() => {
                    setstate({ ...state, age: 22 });
                }}
            >Update</button>
        </div >
    );

}
export default UseStateDot;
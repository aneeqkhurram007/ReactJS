import React, { useState } from 'react'
const UseState = () => {
    const bioData = [
        {
            id: 0,
            name: "Aneeq",
            age: 20
        },
        {
            id: 1,
            name: "John",
            age: 21
        }
    ];

    const [state, setstate] = useState(bioData);
    return (
        <div>
            {state.map((i) => <h1 key={i.id}>Name: {i.name} & Age: {i.age}</h1>)}
            <button onClick={() => {
                setstate([]);
            }}>Clear</button>
        </div>
    )
}
export default UseState;
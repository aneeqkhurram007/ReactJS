import React, { useState } from 'react'
const Challenge2 = () => {
    const arr = [{
        id: 0,
        name: "Aneeq",
        age: 20
    }, {
        id: 1,
        name: "John",
        age: 22
    }]
    const [state, setstate] = useState(arr);
    return (
        <div>
            {
                state.map((i) => {
                    return (

                        <h2 key={i.id} > Name: {i.name} and Age: {i.age}
                            <br />
                            <button onClick={() => {
                                setstate(state.filter((ele) => ele.id !== i.id))
                            }}>remove</button>
                        </h2>


                    )
                }

                )}
            <br />
            <br />
            <button style={{ fontSize: 24 }} onClick={() => {
                setstate([]);
            }}  >Clear All</button>
        </div>
    );
}
export default Challenge2;
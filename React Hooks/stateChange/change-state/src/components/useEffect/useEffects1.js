import React, { useEffect, useState } from 'react'
import './useEffects.css'
const UseEffects1 = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        if (count > 0) document.title = `Chats (${count})`
    })
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setcount(count + 1)
            }}>Click 😄</button>
        </>

    )
}
export default UseEffects1;
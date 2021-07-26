import React, { useState, useEffect } from 'react'
const UseEffects2 = () => {
    useEffect(() => {
        window.addEventListener("resize", () => setsize(window.innerWidth))

        return () =>
            window.removeEventListener("resize", () => setsize(window.innerWidth))

    })
    const [size, setsize] = useState(window.screen.width)
    return (
        <>
            <h1>{size}</h1>
            <h2>Windows size in px</h2>
        </>
    )

}
export default UseEffects2;
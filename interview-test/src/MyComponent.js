import { useEffect, useState } from "react"
// const fetchData = () => new Promise(r => setTimeout(() => r(Date.now()), 100))
const MyComponent = (props) => {
    // const [counter, setcounter] = useState(0)
    // const [result, setresult] = useState()
    // const data = fetchData().then(value => setresult(value))
    // console.log("Data" + data.toString(), "Result" + result)
    const [visible, setvisible] = useState(false)
    useEffect(() => {
        // console.log("Hello")
        // setcounter(1)
        setTimeout(() => {
            setvisible(true)
        }, 4000);
    }, [])
    if (visible) return <div>Hello</div>;
    else return null
    // return (

    //     // setTimeout(() => {
    //     //     return <div>Hello</div>
    //     // }, 4000)
    //     // <div>
    //     //     {result === data.toString() ? (
    //     //         <div>Hello</div>
    //     //     ) : (
    //     //         <div>Good Bye</div>
    //     //     )}
    //     // </div>
    // )
}

export default MyComponent

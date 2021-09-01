import React from 'react'
// import { useHistory } from 'react-router'
import './Error404.css'
//Can be done with useHistory and props too
const Error404 = ({ history }) => {
    // console.log(props);
    // const history = useHistory();
    // console.log(history);
    const goBack = () => {
        history.push("/")
    }
    return (
        <div className="mainDiv">
            <h2>404Page</h2>
            <p>Redirecting to <span onClick={goBack}> Login Page </span></p>
        </div>
    )
}

export default Error404

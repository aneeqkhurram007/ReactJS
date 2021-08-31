import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'
const Error = () => {
    return (
        <>
            <div className="container">
                <h1>404</h1>
                <h2>We are sorry page not found.</h2>
                <NavLink to="/" className="btn btn-success mb-2">Back to home page</NavLink>
            </div>
        </>
    )
}

export default Error

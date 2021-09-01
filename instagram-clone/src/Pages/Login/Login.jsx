import React, { useState } from 'react'
import './Login.css'
import { ReactComponent as Logo } from "../../assets/instagram.svg"
const Login = (props) => {

    const [state, setstate] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.islog(true);
    }
    return (
        <div className="div-login">
            <Logo className="div-login-logo" />

            <div>
                <form onSubmit={handleSubmit} >
                    <input value={state.email} onChange={handleChange} type="Emial" name="email" placeholder="email" required />
                    <input value={state.password} onChange={handleChange} type="Password" name="password" placeholder="password" required />
                    <button type="submit" onSubmit={handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
    )
}


export default Login

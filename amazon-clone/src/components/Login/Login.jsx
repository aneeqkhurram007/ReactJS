import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
const Login = () => {
    return (
        <div className="login">
            <NavLink to="/">
                <img alt="login__logo" className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />

            </NavLink>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" required name="email" id="email" />
                    <h5>Password</h5>
                    <input type="password" required />
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing in, you agree to Amazon's Terms and Conditions</p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

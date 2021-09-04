import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { set, ref, db, auth, createUser, signInUser } from '../../components/Firebase/Firebase'
import './Login.css'
const Login = ({ history }) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const { email, password } = state
    const loggedInUser = (event) => {

        event.preventDefault()

        signInUser(auth, email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e))
        setState({ ...state, email: "", password: "" })

    }
    const cahngeState = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const signUp = async (event) => {
        event.preventDefault();
        createUser(auth, email, password)
            .then(auth => {
                history.push('/')
            }).catch(e => alert(e))

        const res = set(ref(db, 'userData/' + email.replace('.', '')), {
            email, password
        })
        //One Method of accessing database
        // const res = fetch('https://clone-9abbb-default-rtdb.firebaseio.com/userData.json',
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             email, password
        //         })
        //     }


        // )

        if (res) {
            alert("Data Stored")
        }





    }
    return (
        <div className="login">
            <NavLink to="/">
                <img alt="login__logo" className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />

            </NavLink>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={cahngeState} type="email" required name="email" id="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={cahngeState} name="password" type="password" required />
                    <button onClick={loggedInUser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing in, you agree to Amazon's Terms and Conditions</p>
                <button onClick={signUp} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

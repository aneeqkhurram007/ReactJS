import React, { useState } from 'react'
import './LoginForm.css';
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>

            <form action="" className="innerDiv">
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        autoComplete="off" value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}


                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )

}
export default LoginForm;
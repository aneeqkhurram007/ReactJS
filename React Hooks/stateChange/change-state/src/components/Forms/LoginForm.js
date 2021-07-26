import React, { useState } from 'react'
import './LoginForm.css';
const LoginForm = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [state, setstate] = useState({

        email: "",
        password: ""
    })
    const [arr, setarr] = useState([])
    return (
        <>

            <form action="" className="innerDiv" onSubmit={(e) => {
                e.preventDefault();
                setstate({ ...state, id: state.id + 1 })
                setarr([...arr, state]);
            }}>
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        autoComplete="off" value={state.email}
                        onChange={(event) => {
                            setstate({ ...state, email: event.target.value })
                        }}
                    />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={state.password}
                        onChange={(event) => {
                            setstate({ ...state, password: event.target.value })
                        }}


                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {arr.map((i, index) => {

                    return (

                        <p key={index} >{i.email} {i.password} {index}
                            <button onClick={() => {
                                setarr(arr.filter((j, counter) => index !== counter))
                            }}>Remove</button> </p>


                    )
                })}
            </div>
            <button onClick={() => {
                setarr([]);
            }}>
                Clear All
            </button>
        </>
    )

}
export default LoginForm;
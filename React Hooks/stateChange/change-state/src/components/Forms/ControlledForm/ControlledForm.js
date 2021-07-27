import React, { useState } from 'react'
import './ControlledForm.css'
const ControlledForm = () => {
    const [state, setstate] = useState({
        name: "",
        email: "",
        userName: "",
        phone: "",
        password: ""
    })
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, event.target.value);
        setstate({ ...state, [name]: value })
    }
    const [arr, setarr] = useState([])
    return (
        <>
            <h1>Controlled Form</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                setarr([...arr, state]);
                setstate({
                    name: "",
                    email: "",
                    userName: "",
                    phone: "",
                    password: ""
                });
            }}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" autoComplete="off"
                        onChange={handleInput} value={state.name} name="name" />
                </div>
                <div>
                    <label htmlFor="userName">UserName</label>
                    <input type="text" id="userName" autoComplete="off"
                        onChange={handleInput} value={state.userName} name="userName" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" autoComplete="off"
                        onChange={handleInput} value={state.email} name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" autoComplete="off"
                        onChange={handleInput} value={state.phone} name="phone" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete="off"
                        onChange={handleInput} value={state.password} name="password" />
                </div>
                <br />
                <button type="submit">Submit</button>

            </form>
            <div>
                {arr.map((curr, i) => {
                    return (
                        <p key={i} >{curr.name} {curr.userName} {curr.email} {curr.phone} {curr.password}  </p>
                    );
                })}
            </div>
        </>
    )
}
export default ControlledForm;
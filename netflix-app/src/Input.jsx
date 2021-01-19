import React, { useState } from 'react';
const Input = () => {


    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFName((prev) => {
            return {
                ...prev,
                [name]: value,
            };

            // if (name === "fName") {
            //     return {
            //         fname: value,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: prev.phone
            //     };
            // }
            // else if (name === "lName") {
            //     return {
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email,
            //         phone: prev.phone

            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value,
            //         phone: prev.phone

            //     }
            // }
            // else {
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: value
            //     };
            // }
        })




    }
    const [fullName, setFName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua: "",
    });
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <div >

                <h3>Hello {fullName.fname} {fullName.lname} </h3>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Enter your first name"
                        id="inputField" value={fullName.fname} onChange={inputEvent}
                        name="fname"
                    />
                    <br />

                    <input type="text" placeholder="Enter your last name"
                        id="inputField" value={fullName.lname} onChange={inputEvent}
                        name="lname"
                    />
                    <br />

                    <input type="email" placeholder="Enter your email"
                        id="inputField" value={fullName.email} onChange={inputEvent} autoComplete="off"
                        name="email"
                    />
                    <br />

                    <input type="number" placeholder="Enter your phone#"
                        id="inputField" value={fullName.phone} onChange={inputEvent}
                        name="phone"

                    />
                    <br />

                    <input type="text" placeholder="Enter your qualifiaction"
                        id="inputField" value={fullName.qua} onChange={inputEvent}
                        name="qua"

                    />
                    <button type="submit">Click Me</button>
                </form>
            </div>
        </React.Fragment>
    );
};
export default Input;
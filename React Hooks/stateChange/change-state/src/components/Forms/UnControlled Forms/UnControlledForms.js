import React, { useRef, useState } from 'react'
const UnControlledForms = () => {
    const luckyName = useRef(null);
    const [show, setshow] = useState(false)
    return (
        <div>
            <h1>UnControlled Forms</h1>
            <form action="" style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                backgroundColor: "blueviolet",
                padding: "5%"

            }}
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(luckyName);
                    const name = luckyName.current.value;
                    name === "" ? alert("Please Fill Data") : setshow(true);

                }}>
                <div>
                    <label htmlFor="luckyName">
                        Enter your LuckyName
                    </label>
                    <input type="text" id="luckyName" ref={luckyName} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{show ? `Your name is ${luckyName.current.value}` : ""}</h1>
        </div>
    );

}
export default UnControlledForms;
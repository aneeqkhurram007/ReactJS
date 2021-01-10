import React from "react";
const name = window.prompt("Enter your name");
const currentDate = new Date();

let greeting = () => {
    if (currentDate.getHours() >= 1 && currentDate.getHours() < 12) {
        return "Good Morning";
    }
    else if (currentDate.getHours() >= 12 && currentDate.getHours() < 19) {
        return "Good Afternoon";
    }
    else {
        return "Good Night";
    }
}

function Heading() {
    return (

        <h1 style={{
            color: "red",
            backgroundColor: "antiquewhite",
            textAlign: "center",
        }}>
            Hello { name} <span style={{
                color: "green"
            }}>{greeting()}</span>
        </h1>

    )
};
export default Heading;
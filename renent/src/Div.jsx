import React from "react";
import Heading from "./Heading";
function Div() {
    return (
        <div style={{
            padding: "20px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            // margin: "25%",
            width: "100%",
            height: "100vh",
            backgroundColor: "yellowgreen",
            border: "1px solid black"
        }}>
            <Heading />
        </div>
    )
};
export default Div;
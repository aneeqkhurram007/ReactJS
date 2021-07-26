import React from 'react'
const ShortCircuit = () => {

    return (
        <div>
            <h1>Short Circuit
                {// conditional elements with logical operators or nested jsx
                    10 > 1 ? " Aneeq" : " Else" && " Next"
                }
            </h1>

        </div>
    );
}
export default ShortCircuit;
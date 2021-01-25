import React, { useContext } from 'react';
import { FirstName, LastName, Color } from './CompA'
const CompC = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const colors = useContext(Color);

    return (
        <React.StrictMode>
            <h1 style={{
                color: colors 
            }} >My Name is {fname} {lname} {colors}</h1>

        </React.StrictMode>

    );
}
export default CompC;
import React, { createContext } from 'react'
import CompA from './UseContext/CompA';
const BioDate = createContext();
const UseContext = () => {

    return (
        <BioDate.Provider value={"Aneeq"}>
            <CompA />
        </BioDate.Provider>
    )
}
export default UseContext;
export { BioDate };
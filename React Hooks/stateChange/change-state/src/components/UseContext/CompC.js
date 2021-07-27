import React, { useContext } from 'react'
import { BioDate } from '../useContext'
const CompC = () => {
    const context = useContext(BioDate);

    return (
        <div>
            <h1>Hello World {context}</h1>
        </div>
    )
}
export default CompC;
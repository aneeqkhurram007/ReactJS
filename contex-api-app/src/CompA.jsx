import React, { createContext, useEffect, useState } from 'react';
import CompB from './CompB';
const FirstName = createContext();
const LastName = createContext();
const Color = createContext();


const CompA = () => {
useEffect(()=>{
    document.title=`You Clicked me ${buttState} times`
})
const [buttState,setButt]=useState(0);
    return (
        <React.StrictMode>
            <FirstName.Provider value="Aneeq" >
                <LastName.Provider value="">
                    <Color.Provider value="YellowGreen">
                        <CompB />
                    </Color.Provider>
                </LastName.Provider>
            </FirstName.Provider>
<button onClick={()=>{setButt(buttState+1)}}>I am clicked {buttState}</button>

        </React.StrictMode>

    );
}
export default CompA;
export { FirstName, LastName, Color };
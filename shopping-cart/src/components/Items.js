import React from 'react'
import './Items.css'
const Items = (props) => {
    return (
        <>
            <div id="sdiv11"
                className="d-inline-flex align-items-center align-content-center"

            >
                <div><img id="div11img1" alt="temp" src={props.img} /></div>
                <div id="sdiv111" >
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </div>
                <div className="d-inline-flex" id="sdiv112" >
                    <em>-</em><input type="text" /><em>+</em>
                </div>
                <div id="sdiv113" >
                    <h6 >{props.price}</h6>
                </div>
                <div><em id="sdiv114em" >trash</em></div>
            </div>
            <hr />


        </>
    )
}

export default Items

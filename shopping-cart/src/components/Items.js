import React, { useContext } from 'react'
import { CartContext } from './Cart'
import './Items.css'
const Items = (props) => {
    const { removeItem } = useContext(CartContext)
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
                <div><em onClick={() => removeItem(props.id)} id="sdiv114em" >trash</em></div>
            </div>
            <hr />


        </>
    )
}

export default Items

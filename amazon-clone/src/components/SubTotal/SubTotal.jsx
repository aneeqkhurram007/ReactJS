import './SubTotal.css'
import React, { useContext } from 'react'
import Cart from '../../Cart'
// import { useStateValue } from '../../StateProvider'
// Currency Format
const SubTotal = () => {
    const { state } = useContext(Cart)
    const { basket } = state
    // const [{ basket, dispatch }] = useStateValue()
    const getTotal = basket.reduce((accum, curr) => {
        const { price } = curr;
        return accum + price;
    }, 0)

    return (

        <div className="subtotal">
            <p>
                Subtotal({basket.length} items): <strong>{`$${getTotal.toFixed(2)}`} </strong>
            </p>
            <button className="checkout__button">Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal

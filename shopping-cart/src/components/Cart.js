import React, { createContext, useReducer } from 'react'
import ContextCart from './ContextCart';
import { products } from "./product"
import './Cart.css'
import reducer from './reducer';

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type: "Remove",
            payload: id
        })
    }

    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem }} >
                <ContextCart />
            </CartContext.Provider>
        </>
    )
}

export default Cart

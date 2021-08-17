import React, { createContext, useReducer, useEffect } from 'react'
import ContextCart from './ContextCart';
import { products } from "./product"
import './Cart.css'
import reducer from './reducer';

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type: "Remove",
            payload: id
        })
    }

    const clearAll = () => {
        return dispatch({
            type: "ClearAll"
        })
    }
    const incItem = (id) => {
        return dispatch({
            type: "IncrementItem",
            payload: id
        })
    }
    const decItem = (id) => {
        return dispatch({
            type: "DecrementItem",
            payload: id
        })
    }


    useEffect(() => {
        dispatch({ type: "TotalItem" })
        dispatch({ type: "TotalAmount" })
    }, [state.item])

    return (
        <>
            <CartContext.Provider value={{ ...state, removeItem, clearAll, incItem, decItem }} >
                <ContextCart />
            </CartContext.Provider>
        </>
    )
}

export default Cart

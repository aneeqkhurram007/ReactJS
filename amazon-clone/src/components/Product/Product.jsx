import React, { useContext } from 'react'
// import { useStateValue } from '../../StateProvider'
import './Product.css'
import Cart from '../../Cart'
// import reducer from '../../reducer';
const Product = ({ title, image, rating, price, id }) => {

    const { dispatch } = useContext(Cart)
    // console.log("Product", initialState);
    // const [{ basket }, dispatch] = useStateValue()
    // const [, dispatch] = useReducer(reducer, initialState)
    const addToBasket = () => {
        // console.log(initialState.basket);
        return dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, image, price, rating
            }
        }

        )
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, index) => <p key={index}>*</p>)
                    }
                </div>


            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product

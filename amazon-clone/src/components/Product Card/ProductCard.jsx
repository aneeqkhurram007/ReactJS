import React, { useContext } from 'react'
import './ProductCard.css'
// import { useStateValue } from '../../StateProvider';
import Cart from '../../Cart';
// import reducer from '../../reducer';

const ProductCard = ({ id, rating, price, title, image }) => {
    // const [{ basket }, dispatch] = useStateValue();

    const { dispatch } = useContext(Cart);
    // const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem = () => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            id
        })
    }
    return (
        <div className="productCart">
            <img src={image} className="productCart__image" alt={title} />
            <div className="productCart__info">
                <p className="productCart__title">{title}</p>
                <p className="productCart__price">${price}</p>
                <div className="productCart__rating">
                    {
                        Array(rating).fill().map((_, index) => <span key={index}>*</span>)
                    }
                </div>
                <button onClick={removeItem}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default ProductCard

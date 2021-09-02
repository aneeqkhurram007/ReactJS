import React from 'react'
import './Product.css'
const Product = ({ title, image, rating, price, id }) => {
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
                        Array(rating).fill().map((_) => <p>*</p>)
                    }
                </div>


            </div>
            <img src={image} alt={title} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product

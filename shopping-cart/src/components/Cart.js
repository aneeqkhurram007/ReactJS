import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from "./product"
const Cart = () => {
    const [state, setstate] = useState(products)
    return (
        <>
            <header>
                <div>
                    <img src="" alt="arrow" />
                    <h3>Continue Shopping</h3>
                </div>
                <div>
                    <img src="" alt="cart" />
                    <p>7</p>
                </div>
            </header>
            <section>
                <h1>Shopping Cart</h1>
                <p>You have <span>7</span> items in Shopping Cart </p>
                <div>
                    <Scrollbars >
                        {
                            state.map((curItem) => <Items key={curItem.id} {...curItem}
                            />)
                        }

                    </Scrollbars>
                </div>
                <div>
                    <h3>Card Total :  <span>2200rs</span> </h3>
                    <button>Check Out</button>
                </div>
            </section>
        </>
    )
}

export default Cart

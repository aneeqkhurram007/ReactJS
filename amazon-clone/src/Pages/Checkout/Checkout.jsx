import React, { useContext } from 'react'
import './Checkout.css'
import SubTotal from '../../components/SubTotal/SubTotal'
// import { useStateValue } from '../../StateProvider';
import ProductCard from '../../components/Product Card/ProductCard';
import Cart from '../../Cart';
const Checkout = () => {
    // const [{ basket }] = useStateValue();
    const { state } = useContext(Cart);
    const { basket } = state;
    return (
        <div className="checkout">
            <div className="checkout_left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout_title">Your shopping basket is empty.</h2>
                            <p>You have no items in your basket. Buy one.</p>
                        </div>

                    )
                        : (
                            <div>
                                <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
                                {
                                    basket.map((item) => {

                                        return (
                                            <ProductCard key={item.id} {...item} />
                                        )
                                    })
                                }
                            </div>
                        )
                }
            </div>
            {
                basket && (
                    <div className="checkout_right">
                        <SubTotal />
                    </div>

                )
            }

        </div>
    )
}
export default Checkout

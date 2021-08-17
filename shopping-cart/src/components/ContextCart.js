import React, { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import Items from './Items'
import { CartContext } from './Cart'
const ContextCart = () => {

    const state = useContext(CartContext)
    return (
        <>
            <header
                className="
        text-start
        d-flex
        flex-row flex-grow-1
        justify-content-start
        align-items-center align-content-center
        flex-nowrap
        m-auto
      "
            >
                <div className="d-inline-flex" id="header-div1" >
                    <img
                        src="assets/img/back-arrow.png" alt="arrow" id="div1img1"
                    />
                    <h3 id="div1h3">Continue Shoppig</h3>
                </div>
                <div
                    className="d-grid float-end"
                    id="header-div2"
                >
                    <img src="assets/img/cart.png" id="div2img2" alt="cart" />
                    <p
                        className="text-end border-dark"
                        id="div2p"        >
                        7
                    </p>
                </div>
            </header>
            <section >
                <h3>Shopping Cart</h3>
                <p>You have<span>&nbsp;7&nbsp;</span>&nbsp;items in Shopping Cart</p>
                <div id="secdiv1"

                >

                    <Scrollbars style={{ height: "50vh" }}>
                        {
                            state.map((curItem) => <Items key={curItem.id} {...curItem} />)
                        }

                    </Scrollbars>



                    <div id="sdiv12" >
                        <h3 id="sdiv12h3" >
                            Card Total :&nbsp;&nbsp;<span>2000</span>
                        </h3>
                        <button className="btn btn-primary" type="button">Check Out</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContextCart

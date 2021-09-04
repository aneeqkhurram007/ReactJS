import React from 'react'
import Product from '../../components/Product/Product'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="home">
                <img className="home__image"
                    src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="Home" />
                <div className="home__row">
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />


                </div>
                <div className="home__row">
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />
                    <Product id={Date.now()} title="The lean Startup: How Contant Innovation "
                        price={11.96}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    />

                </div>

            </div>
        </div>
    )
}

export default Home

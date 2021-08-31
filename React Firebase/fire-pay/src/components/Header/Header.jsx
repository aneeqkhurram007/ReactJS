import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header=left-side d-flex justify-content-center flex-column align-items-start">
                        <h1 className="display-2">
                            Online Payment Made <br />Easy For You.
                        </h1>
                        <p className="main-hero-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci provident nesciunt, quas voluptatem neque, ab amet corporis nemo aut, dolores maxime perspiciatis tempore fugiat quidem. Hic quam corrupti quas voluptatem!
                        </p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" placeholder="Enter Your Email" className="rounded-pill w-75 me-3 p-2 form-control-text" name="" id="" />
                            <div className="input-group-button">
                                Get it now
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-6 main-herosection-images header-right-side d-flex justify-content-center align-items-center">
                        <img src="" alt="heroimg1" className="img-fluid" />
                        <img src="" alt="heroimg4" className="img-fluid main-herosection-img2" />
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header

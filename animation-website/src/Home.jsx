import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center flex-column pt-5 pt-lg-0 order-lg-1 order-2  ">
                                    <h1>Grow your business</h1>
                                    <h3 className="my-3">
                                        We are team of talented developer making websites
                                </h3>
                                    <div className="mt-3">
                                        <NavLink to="/" exact className="btn btn-outline-success">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="https://picsum.photos/200/300" className="img-fluid" alt="homePage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;
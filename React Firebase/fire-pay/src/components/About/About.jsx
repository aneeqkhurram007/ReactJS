import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 our-sevice-leftside-img text-center">
                            <img src="" alt="aboutusImg" />

                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                            <h1 className="main-heading"> How to use App?</h1>
                            <div className="row our-services-info">
                                <div className="col-1 our-services-number">
                                    1
                                </div>
                                <div className="col-10 our-services-data">
                                    <h2>Sign In</h2>
                                    <p className="main-hero-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex quisquam quae totam magni illum consequuntur eius, nemo inventore ipsa labore consequatur voluptate sint libero. Architecto laudantium velit eveniet facere?</p>

                                </div>
                                <br />
                                <button className="btn-style btn-style-border">learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

import React from 'react'
import './About.css'
import { howToUse } from '../API/API'
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
                            {
                                howToUse.map((currEl) => {
                                    const { id, title, info } = currEl
                                    return (
                                        <div key={id} className="row our-services-info">
                                            <div className="col-1 our-services-number">
                                                {id}
                                            </div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info} </p>

                                            </div>
                                        </div>


                                    )
                                })
                            }

                            <br />
                            <button className="btn-style btn-style-border">learn more</button>

                        </div>
                    </div>
                </div>
            </section>



            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-list our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGE</h3>
                            <h1 className="main-heading"> World class support is <br /> available 24/7</h1>
                            {
                                howToUse.map((currEl) => {
                                    const { id, title, info } = currEl
                                    return (
                                        <div key={id} className="row our-services-info">
                                            <div className="col-1 our-services-number">
                                                {id}
                                            </div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info} </p>

                                            </div>
                                        </div>


                                    )
                                })
                            }

                            <br />
                            <button className="btn-style btn-style-border">learn more</button>

                        </div>
                        <div className="col-12  col-lg-5  text-center">
                            <img src="" alt="aboutusImg" />

                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default About

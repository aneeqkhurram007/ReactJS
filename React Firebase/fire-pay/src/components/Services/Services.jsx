import React from 'react'
import './Services.css'
import { serviceapi } from '../API/API'
const Services = () => {
    return (
        <>
            <section className="service-main-container">
                <div className="container">
                    <h1 className="main-heading text-center fw-bold">How to send money</h1>
                    <div className="row">
                        {
                            serviceapi.map((currEl) => {
                                const { id, logo, title, info } = currEl
                                return (
                                    <div key={id} className="  service-container col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                                        <i className={`fontawesome-style ${logo} `}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

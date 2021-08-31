import React from 'react'
import api from '../API/API';
const Main = () => {
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How Does it Work ?</h1>
                    <div className="row">

                        {
                            api.map((currEl) => {
                                const { id, logo, title, info } = currEl
                                return (
                                    <div key={id} className="col-12  col-lg-4 text-center work-container-subdiv">
                                        <i className={`fontawesome-style ${logo} `}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">
                                            {info}
                                        </p>
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

export default Main

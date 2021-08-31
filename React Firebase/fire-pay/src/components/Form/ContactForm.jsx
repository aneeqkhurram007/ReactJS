import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contactus-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ipsa possimus maiores, quam non, ab ducimus placeat libero at culpa, doloribus corporis officia aspernatur debitis qui dolorum ex dolores corrupti.
                                    </p>
                                    <figure>
                                        <img src="" alt="contactusImg" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input name="" id="" className="form-control" type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input name="" id="" className="form-control" type="text" placeholder="Last Name" />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input name="" id="" className="form-control" type="text" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input name="" id="" className="form-control" type="email" placeholder="Email ID" />
                                            </div>

                                        </div>
                                        <div className="col-12 contact-input-field">
                                            <input name="" id="" type="text" className="form-control" placeholder="Add Address" />
                                        </div>
                                        <div className="col-12 contact-input-field">
                                            <input name="" id="" type="text" className="form-control" placeholder="Enter your message" />
                                        </div>


                                        <div class="form-check form-checkbox-style">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label main-hero-para" >
                                                Accept and agree to the Terms
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-style w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm

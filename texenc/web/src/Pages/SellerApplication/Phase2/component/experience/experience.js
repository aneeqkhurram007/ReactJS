import React, { useState } from 'react'
import { Button, DropDown, PhaseVideoCard, Navbar } from '../../../../../Imports/genericComponents';



const Experience = (props) => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <br />
                        <h1>Seller Application - Phase II</h1>
                        <br />
                        <h5>Experience</h5>
                        <div className="card uploaded-file">
                            <Button
                                filled={false}
                                text={"+ Add Experience"}
                                className="addbtn"
                            // onClick={onOpenModal}
                            />
                        </div>

                        <br />
                        <h5>Education</h5>
                        <div className="card uploaded-file">
                            <Button
                                filled={false}
                                text={"+ Add Education"}
                                className="addbtn"
                            // onClick={onOpenModal}
                            />
                        </div>
                        <br />

                        {/* Form End */}
                        <div className="attach-footer">
                            <Button
                                filled={false}
                                text={"Back"}
                                className=""
                                onClick={() => props.setPages(2)}
                            />
                            <Button
                                filled={true}
                                text={"Continue"}
                                className="cont-btn"
                                onClick={() => props.setPages(3)}
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="col-4 sideCard">
                        <Button
                            filled={false}
                            text={"cancel"}
                            className="cancelDraftbtn"
                        />
                        <PhaseVideoCard />
                    </div>
                </div>
            </div>
            <p>My nam eis Experience</p>
        </>
    )
}

export default Experience

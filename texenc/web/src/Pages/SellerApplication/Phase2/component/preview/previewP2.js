import React from 'react';
import { Navbar, Button } from './../../../../../Imports/genericComponents'
import { uploadAvatar, urlIcon, institute, pdfIcon, equalIcon } from './../../../../../Imports/images';
import '../../phase2.css'

const PreviewP2 = (props) => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <br />
                        <h1>Seller Application Review</h1>
                        <br />
                        <h4>Profile Picture</h4>
                        <div className="row">
                            <div className=" ms-3 col-3 col-lg-2">
                                <img className='w-100 h-100' src={props.phase2Data.profilePic != "" ? URL.createObjectURL(props.phase2Data.profilePic) : uploadAvatar} />
                            </div>
                        </div>
                        <br />
                        <h4 className="skill-heading">Skill levels</h4>
                        {props.phase2Data.skills.map((x) => {
                            return (
                                <div className="card">
                                    <div className="card-body">
                                        <h6>{x.title} - <span>{x.level}</span></h6>
                                    </div>
                                </div>)
                        })}
                        <br />
                        <h5 className="skill-heading">Portfolio attachments</h5>
                        {props.phase2Data.files.map((x) => {
                            return (
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row file-card">
                                                <div className="col-1 d-flex">
                                                    <img className="image-file" src={equalIcon} alt="PDFIcon" />
                                                    <img className="fileIcon" src={pdfIcon} alt="PDFIcon" />
                                                </div>
                                                <div className="col-10 d-flex file-name">
                                                    <h6>{x.name}</h6>
                                                    <p className="file-size">{x.size}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <br />
                        {props.phase2Data.type == "individual" &&
                            <>
                                <h5>Portfolio URL's</h5>
                                {props.phase2Data.urls.map((x) =>
                                    <>
                                        <div className="card uploaded-file" >
                                            <div className="row w-100">
                                                <div className="col-11 d-flex">
                                                    <div>
                                                        <img className="urlIcon" src={urlIcon} alt="urlIcon" />
                                                    </div>
                                                    <h6 className="urlPrev">{x}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <br />
                            </>
                        }
                        <h5>Licenses & Certifications</h5>
                        {props.phase2Data.licenses.map((x) => {
                            return (
                                <div className="card w-100">
                                    <div className="card-body " >
                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={institute} />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">{x.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{x.organization}</h6>
                                                <div className="d-flex">
                                                    <h6 className="card-subtitle mb-2 text-muted">Issued: {x.startMonth}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">{x.startYear}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">{" - "}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">{x.endMonth}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">{x.endYear}</h6>
                                                </div>
                                                <h6 className="card-subtitle mb-2 text-muted">{x.credent}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        < br />

                        {props.phase2Data.type == "agency" &&
                            <>
                                <h5>Other Supporting URL’s</h5>
                                {props.phase2Data.supportingUrl.map((x) =>
                                    <>
                                        <div className="card uploaded-file" >
                                            <div className="row w-100">
                                                <div className="col-11 d-flex">
                                                    <div>
                                                        <img className="urlIcon" src={urlIcon} alt="urlIcon" />
                                                    </div>
                                                    <h6 className="urlPrev">{x}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <br />
                                <br />
                            </>
                        }
                        <br />
                        <h5>Other Supporting Material</h5>
                        {props.phase2Data.supporting.map((x) => {
                            return (
                                <>
                                    <div className="card uploaded-file" >
                                        <div className="row w-100">
                                            <div className="col-1 d-flex">
                                                <img className='image-file' src={equalIcon} alt="PDFIcon" />
                                                <img className="fileIcon" src={pdfIcon} alt="urlIcon" />
                                            </div>
                                            <div className="col-9 file-name">
                                                <h6>{x.name}</h6>
                                            </div>
                                            <div className="col-2 file-name">
                                                <p>{x.file.size}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <br />
                        <br />
                        <div className="attach-footer">
                            <Button
                                filled={false}
                                text={"Edit Application"}
                                className=""
                                onClick={() => props.setPages(1)}
                            />
                            <Button
                                filled={true}
                                text={"Submit Application"}
                                onClick={() => props.submitPhase2()}
                                className="cont-btn"
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviewP2

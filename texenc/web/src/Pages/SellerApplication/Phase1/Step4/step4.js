import React, { useEffect, useState } from 'react'
import { DropDown, InputField, Button, Tag } from "../../../../Imports/genericComponents"
import './step4.css'
import axios from "axios"
import { message } from 'antd';
import api from "../../../../services/api"
import { fb, linkdin, pintrest, insta, tiktok, twitter, job, institute, editIcon } from "../../../../Imports/images"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setUserData, setPhase1, setPhase2 } from '../../../../Redux/Slices/userSlice'
const Step4 = (props) => {
    const history = useHistory();
    const [iid, setId] = useState()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    React.useEffect(() => {
        console.log(state)
        let user = window.localStorage.getItem("user");
        console.log(user)
        setId(JSON.parse(user).id);
        console.log(JSON.parse(user).id)
    }, []);
    const handleLogin = () => {

        api
            .post('seller/phase1request', { ...props.formData, applicationSubmitted: true })
            .then((response) => {
                dispatch(setPhase1(response.data))
                message.success("Phase 1 is saved", [2])
                history.push("/seller")

                console.log(response.data)
            }).catch((err) => {
                console.log(err.response)
            })

    }
    return (
        <>

            {props.formData.type == "agency" ?
                <div className="container-fluid ">
                    <h5>Seller Type</h5>
                    <div>
                        <input value={props.formData.type} className="disableInputField" disabled={true} /></div>
                    <br />
                    <h5>Top Skills</h5>
                    <div className="d-inline-flex">
                        {props.formData.skills.map((skill) => {

                            return <Tag className={"tag"} text={skill} color={"#d36455"} />
                        })}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h5>Tell us about your self</h5>
                    <p className="textColor">{props.formData.about}</p>
                    <br />
                    <br />
                    <h5>Total Employee</h5>
                    <p className="textColor">{props.formData.noe} Employees</p>
                    <br />
                    <br />

                    <h5>Best Projects</h5>
                    {props.formData.projects.length > 0 && (
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.projects.map((project) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <h5 className="card-title">{project.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{project.url}</h6>
                                                <p className="card-text">{project.description}</p>
                                            </div>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    )}

                    <br />
                    <br />
                    <br />
                    <h5>Social Media URL’s</h5>
                    <div className="card" >
                        <ul className="list-group list-group-flush">
                            {props.formData.socialMediaUrls.fb && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={fb} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.fb}</div></li>)}
                            {props.formData.socialMediaUrls.twitter && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={twitter} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.twitter}</div></li>)}
                            {props.formData.socialMediaUrls.linkdin && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={linkdin} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.linkdin}</div></li>)}
                            {props.formData.socialMediaUrls.insta && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={insta} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.insta}</div></li>)}
                            {props.formData.socialMediaUrls.printrest && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={pintrest} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.printrest}</div></li>)}
                            {props.formData.socialMediaUrls.tiktok && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={tiktok} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.tiktok}</div></li>)}

                        </ul>
                    </div>
                    <br />
                    <br />{props.formData.applicationSubmitted ? undefined :
                        <row className="d-flex buttonContainer">
                            <Button
                                filled={false}
                                img={editIcon}
                                text={"Edit Application"}
                                className="buttonSpace"
                                onClick={() => props.setStep(1)}
                            />

                            <Button
                                filled={true}
                                text={"Submit Application"}
                                className="ml-auto"
                                onClick={handleLogin}

                            />
                        </row>}
                    <br />
                </div> :
                <div className="container-fluid ">
                    <h5>Seller Type</h5>
                    <div>
                        {console.log(props.formData.type)}
                        <input value={props.formData.type} className="disableInputField" disabled={true} /></div>
                    <br />
                    <h5>Top Skills</h5>
                    <div className="d-inline-flex">
                        {props.formData.skills.map((skill) => {

                            return <Tag className={"tag"} text={skill} color={"#d36455"} />
                        })}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h5>Tell us about your self</h5>
                    <p className="textColor">{props.formData.about}</p>
                    <br />
                    <br />
                    <h5>Language Skills</h5>
                    {props.formData.language.length > 0 && (
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.language.map((language) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="pl-2 col-10">
                                                <p className="card-text">{language.language}-{language.experiance}</p>
                                            </div>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    )}
                    <br />
                    <br />

                    <h5>Experience</h5>
                    {props.formData.experience.length > 0 && (
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.experience.map((experiance) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={job} />
                                            </div>
                                            <div className="col-10">
                                                <h5 className="card-title">{experiance.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{experiance.company}</h6>
                                                <p className="card-text">{experiance.startDate},{experiance.startYear} - {experiance.current ? <>Present</> : <>{experiance.endDate},{experiance.endYear}</>}</p>
                                            </div>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    )}
                    <br />
                    <br />
                    <h5>Education</h5>
                    {props.formData.education.length > 0 && (
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.education.map((education) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={institute} />
                                            </div>
                                            <div className="col-10">
                                                <h5 className="card-title">{education.degree}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{education.institute}</h6>
                                                <p className="card-text">{education.startDate},{education.startYear} - {education.endDate},{education.endYear}</p>
                                            </div>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    )}

                    <br />
                    <br />
                    <br />
                    <h5>Social Media URL’s</h5>
                    <div className="card" >
                        <ul className="list-group list-group-flush">
                            {props.formData.socialMediaUrls.fb && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={fb} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.fb}</div></li>)}
                            {props.formData.socialMediaUrls.twitter && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={twitter} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.twitter}</div></li>)}
                            {props.formData.socialMediaUrls.linkdin && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={linkdin} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.linkdin}</div></li>)}
                            {props.formData.socialMediaUrls.insta && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={insta} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.insta}</div></li>)}
                            {props.formData.socialMediaUrls.printrest && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={pintrest} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.printrest}</div></li>)}
                            {props.formData.socialMediaUrls.tiktok && (<li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={tiktok} /></div><div className="mt-auto mb-auto">{props.formData.socialMediaUrls.tiktok}</div></li>)}

                        </ul>
                    </div>
                    <br />
                    <br />
                    {props.formData.applicationSubmitted ? undefined :
                        <row className="d-flex buttonContainer">
                            <Button
                                img={editIcon}
                                filled={false}
                                text={"Edit Application"}
                                className="buttonSpace"
                                onClick={() => props.setStep(1)}
                            />


                            <Button
                                filled={true}
                                text={"Submit Application"}
                                className="ml-auto"
                                onClick={handleLogin}

                            />

                        </row>}
                    <br />
                </div>

            }
        </>

    )
}

export default Step4

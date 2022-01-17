import React, { useState } from 'react'
import { DropDown, InputField, Button } from "../../../../Imports/genericComponents"
import ModelProject from "./ModelProject/model"
import ModelExperiance from "./ModelExperience/model"
import ModelEducation from "./ModelEducation/model"
import './step3.css'
import {
    PlusOutlined,
    DeleteFilled,
    EditOutlined
} from '@ant-design/icons';
import { fb, linkdin, pintrest, insta, tiktok, twitter, job, institute } from "../../../../Imports/images"
const Step3 = (props) => {
    const [modelProject, setModelProject] = useState(false)
    const [edit, setEdit] = useState(false)
    const [index, setIndex] = useState(false)
    const [project, setProject] = useState({
        "title": "",
        "url": "",
        "description": ""
    })

    const handleAddProject = () => {
        if (edit) {
            setModelProject(false)
            let array = props.formData.projects;
            array[index] = project;

            props.setFormData({ ...props.formData, projects: array })

            setProject({
                "title": "",
                "url": "",
                "description": ""
            })
            setEdit(false)
        }
        else {
            props.setFormData({ ...props.formData, projects: [...props.formData.projects, project] })
            setProject({
                "title": "",
                "url": "",
                "description": ""
            })
            setModelProject(false)
        }
    }
    const [modelExperience, setModelExperience] = useState(false)
    const [experience, setExperience] = useState({
        "title": "",
        "company": "",
        "startDate": "",
        "endDate": "",
        "startYear": "",
        "endYear": "",
        "description": "",
        "current": false,
    })
    const handleAddExperience = () => {
        if (edit) {
            setModelExperience(false)
            let array = props.formData.experience;

            array[index] = experience;
            props.setFormData({ ...props.formData, experience: array })
            setExperience({
                "title": "",
                "company": "",
                "startDate": "",
                "endDate": "",
                "startYear": "",
                "endYear": "",
                "description": "",
                "current": false,
            })
            setEdit(false)
        }
        else {
            props.setFormData({ ...props.formData, experience: [...props.formData.experience, experience] })

            setModelExperience(false)
            setExperience({
                "title": "",
                "company": "",
                "startDate": "",
                "endDate": "",
                "startYear": "",
                "endYear": "",
                "description": "",
                "current": false,
            })
        }
    }
    const [modelEducation, setModelEducation] = useState(false)
    const [education, setEducation] = useState({
        "institute": "",
        "degree": "",
        "startDate": "",
        "endDate": "",
        "startYear": "",
        "endYear": "",
    })
    const handleAddEducation = () => {
        if (edit) {
            setModelEducation(false)
            let array = props.formData.education;
            console.log(array)
            array[index] = education;
            console.log(array)
            props.setFormData({ ...props.formData, education: array })
            setEducation({
                "institute": "",
                "degree": "",
                "startDate": "",
                "endDate": "",
                "startYear": "",
                "endYear": "",
            })
            setEdit(false)
        }
        else {
            props.setFormData({ ...props.formData, education: [...props.formData.education, education] })
            // setAlleducation([...allEducation, education])
            setModelEducation(false)
            setEducation({
                "institute": "",
                "degree": "",
                "startDate": "",
                "endDate": "",
                "startYear": "",
                "endYear": "",
            })
        }
    }

    return (
        <>
            <ModelProject visible={modelProject} handleOk={handleAddProject} handleCancel={() => setModelProject(false)} project={project} setProject={setProject} />
            <ModelExperiance visible={modelExperience} handleOk={handleAddExperience} handleCancel={() => setModelExperience(false)} experience={experience} setExperience={setExperience} />
            <ModelEducation visible={modelEducation} handleOk={handleAddEducation} handleCancel={() => setModelEducation(false)} education={education} setEducation={setEducation} />
            <>
                {props.formData.type == "agency" ?
                    <div className="container-fluid ">
                        <div className="d-flex " >
                            <h5>Best Projects</h5>
                            <p className="textColor pl-2">maximum 3</p>
                        </div>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.projects.map((project) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-10">
                                                <h5 className="card-title">{project.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{project.url}</h6>
                                                <p className="card-text">{project.description}</p>
                                            </div>
                                            <div className="col-2 pt-3 pr-1 rightIcon" >
                                                <EditOutlined className="icon iconedit"

                                                    onClick={() => {
                                                        setEdit(true)
                                                        let array = props.formData.projects;
                                                        let index = array.indexOf(project)
                                                        setIndex(index)
                                                        setProject(array[index])
                                                        setModelProject(true)
                                                    }}


                                                />
                                                <DeleteFilled className="icon icondelet"

                                                    onClick={() => {
                                                        let array = props.formData.projects; // make a separate copy of the array
                                                        let index = array.indexOf(project)
                                                        if (index !== -1) {
                                                            array.splice(index, 1);
                                                            props.setFormData({ ...props.formData, projects: [...array] })
                                                            //    setAlllanguage([...array]);
                                                        }
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </li>)
                                })}
                                <li className="list-group-item">
                                    <Button className="buttonCustomize"
                                        onClick={() => {
                                            setModelProject(true)
                                        }}
                                        filled={false}
                                        img={true}
                                        icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                                        text={"Add Project"} />
                                </li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <br />
                        <h5>Social Media URL’s</h5>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={fb} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.fb} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, fb: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={twitter} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.twitter} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, twitter: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={linkdin} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.linkdin} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, linkdin: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={insta} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.insta} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, insta: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={pintrest} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.printrest} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, printrest: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={tiktok} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.tiktok} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, tiktok: e } }) }} placeHolder={"url"} /></div></li>

                            </ul>
                        </div>
                        <br />
                        <br />
                        <row className="d-flex buttonContainer">
                            <Button
                                filled={false}
                                text={"Back"}
                                className="buttonSpace"
                                onClick={() => props.setStep(2)}
                            />
                            <Button
                                filled={true}
                                text={"Continue"}
                                className="buttonSpace ml-auto"
                                onClick={() => props.setStep(4)}


                            />
                        </row>
                        <br />
                    </div> :
                    <div className="container-fluid ">
                        <div className="d-flex " >
                            <h5>Experience</h5>
                        </div>
                        <div className="card" >
                            <ul className="list-group list-group-flush">

                                {props.formData.experience.length > 0 ? props.formData.experience.map((experience) => {
                                    return (<li className="card-body list-group-item">

                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={job} />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">{experience.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{experience.company}</h6>

                                                <p className="card-text">{experience.startDate},{experience.startYear} - {experience.current ? <>Present</> : <>{experience.endDate},{experience.endYear}</>}</p>
                                            </div>
                                            <div className="col-2 pt-3 pr-1 rightIcon" >
                                                <EditOutlined className="icon iconedit"
                                                    onClick={() => {
                                                        setEdit(true)
                                                        let array = props.formData.experience;
                                                        let index = array.indexOf(experience)
                                                        setIndex(index)
                                                        setExperience(array[index])
                                                        setModelExperience(true)
                                                    }}
                                                />
                                                <DeleteFilled className="icon icondelet"
                                                    onClick={() => {
                                                        let array = props.formData.experience; // make a separate copy of the array
                                                        let index = array.indexOf(experience)
                                                        if (index !== -1) {
                                                            array.splice(index, 1);
                                                            props.setFormData({ ...props.formData, experience: [...array] })
                                                            //    setAlllanguage([...array]);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </li>)
                                }) : undefined}
                                <li className="list-group-item">
                                    <Button className="buttonExperiance"
                                        onClick={() => {
                                            setModelExperience(true)
                                        }}
                                        filled={false}
                                        img={true}
                                        icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                                        text={"Add Experiance"} />
                                </li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className="d-flex " >
                            <h5>Education</h5>
                        </div>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.education.map((education) => {
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={institute} />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">{education.degree}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{education.institute}</h6>
                                                <p className="card-text">{education.startDate},{education.startYear} - {education.endDate},{education.endYear}</p>
                                            </div>
                                            <div className="col-2 pt-3 pr-1 rightIcon" >
                                                <EditOutlined className="icon iconedit"
                                                    onClick={() => {
                                                        setEdit(true)
                                                        let array = props.formData.education;
                                                        let index = array.indexOf(education)
                                                        setIndex(index)
                                                        setEducation(array[index])
                                                        setModelEducation(true)
                                                    }}

                                                />
                                                <DeleteFilled className="icon icondelet" onClick={() => {
                                                    let array = props.formData.education;
                                                    let index = array.indexOf(education)
                                                    if (index !== -1) {
                                                        array.splice(index, 1);
                                                        props.setFormData({ ...props.formData, education: [...array] })
                                                    }
                                                }} />
                                            </div>
                                        </div>
                                    </li>)
                                })}
                                <li className="list-group-item">
                                    <Button className="buttonExperiance"
                                        onClick={() => {
                                            setModelEducation(true)
                                        }}
                                        filled={false}
                                        img={true}
                                        icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                                        text={"Add Education"} />
                                </li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <br />
                        <h5>Social Media URL’s</h5>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={fb} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.fb} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, fb: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={twitter} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.twitter} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, twitter: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={linkdin} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.linkdin} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, linkdin: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={insta} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.insta} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, insta: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={pintrest} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.printrest} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, printrest: e } }) }} placeHolder={"url"} /></div></li>
                                <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={tiktok} /></div><div className="textBoxWidth"><InputField value={props.formData.socialMediaUrls.tiktok} onChange={(e) => { props.setFormData({ ...props.formData, socialMediaUrls: { ...props.formData.socialMediaUrls, tiktok: e } }) }} placeHolder={"url"} /></div></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <row className="d-flex buttonContainer">
                            <Button
                                filled={false}
                                text={"Back"}
                                className="buttonSpace"
                                onClick={() => props.setStep(2)}
                            />
                            <Button
                                filled={true}
                                text={"Continue"}
                                className="buttonSpace ml-auto"
                                onClick={() => props.setStep(4)}

                            />
                        </row>
                        <br />
                    </div>

                }

            </>


        </>
    )
}

export default Step3

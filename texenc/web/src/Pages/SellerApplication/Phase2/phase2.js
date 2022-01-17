import React, { useState } from 'react'
import { Button, DropDown, PhaseVideoCard, Navbar, UploaderImg } from '../../../Imports/genericComponents'
import SkillLevel from './component/skillLevels/skillLevels'
import './phase2.css'
import avatar from '../images/upload.png'

import Attachments from './component/attachments/attachments'
import Experience from './component/experience/experience'
import api from '../../../services/api'
import PreviewP2 from './component/preview/previewP2'


const Phase2 = () => {
    const [pages, setPages] = useState(1);
    const [img, setImg] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    const [phase2Data, setPhase2Data] = useState({
        type: "individual",
        profilePic: "",
        skills: [],
        files: [],
        urls: [],
        licenses: [],
        supportingUrl: [],
        supporting: []

    })

    const submitPhase2 = async () => {

        const { id, type } = user;
        const {
            profilePic,
            skills,
            files,
            urls,
            licenses,
            supportingUrl,
            supporting
        } = phase2Data;
        try {
            var res = await api.post('seller/phase2request', {
                id,
                type: "indvidual",
                applicationSubmitted: true,
                profileImage: profilePic,
                license: licenses,
                portfolioAttachments: files,
                supportingUrls: supportingUrl,
                supportingMaterial: supporting,
                phase2Status: "submitted"
            })
        } catch (error) {
            console.log(error)
        }
    }


    const skillObj = { title: "", level: "" }

    const handleImg = (e) => {
        setPhase2Data({ ...phase2Data, profilePic: e.target.files[0] })
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const step1 = () => {

        const selectSkill = [
            { value: "HTML/CSS", label: "HTML/CSS" },
            { value: "java", label: "java" },
            { value: "c", label: "c" },
        ]
        const selectLevel = [
            { value: "basic", label: "basic" },
            { value: "intermediate", label: "Intermediate" },
            { value: "expert", label: "Expert" }
        ]
        return (
            <>
                <div className="container-fluid">
                    <div className="row pl-5">
                        <div className="col-8">
                            <br />
                            <h1>Seller Application - Phase II</h1>
                            <br />
                            <h4>Profile Picture</h4>
                            <div className="row">
                                <div className=" ms-3 col-3 col-lg-2">
                                    <img className='w-100 h-100' src={phase2Data.profilePic != "" ? img : avatar} />
                                </div>
                                {console.log("phase2data", phase2Data)}
                                <div>
                                    <p>Drop images here or click Browse to upload</p>
                                    <div>
                                        <UploaderImg
                                            handleImg={(e) => handleImg(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <h4 className="skill-heading">Skill levels</h4>
                            {phase2Data.skills.map((x) => {
                                return (
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <DropDown
                                                        values={selectSkill}
                                                        value={x.title}
                                                        placeHolder={"Select Skill"}
                                                        onChange={(e) => {
                                                            let skillArray = phase2Data.skills;
                                                            let index = phase2Data.skills.indexOf(x);
                                                            if (index > -1) {
                                                                skillArray[index] = { title: e, level: x.level }
                                                                setPhase2Data({ ...phase2Data, skills: [...skillArray] })
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <DropDown
                                                        values={selectLevel}
                                                        value={x.level}
                                                        placeHolder={"Select level"}
                                                        onChange={(e) => {
                                                            let skillArray = phase2Data.skills;
                                                            let index = phase2Data.skills.indexOf(x);
                                                            if (index > -1) {
                                                                skillArray[index] = { title: x.title, level: e }
                                                                setPhase2Data({ ...phase2Data, skills: [...skillArray] })
                                                            }


                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })}

                            <div className="card">
                                <div className="card-body">
                                    <Button
                                        filled={false}
                                        text={"+ Add Skill"}
                                        className={"skillLevelbtn"}
                                        onClick={() => setPhase2Data({ ...phase2Data, skills: [...phase2Data.skills, skillObj] })}
                                    />
                                </div>
                            </div>
                            <div>
                                {
                                    <Button
                                        filled={true}
                                        text={"Continue"}
                                        className={"phase2-cont-btn"}
                                        onClick={() => setPages(2)}
                                    />}
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
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {pages == 1 ?
                <>

                    {step1()}
                </>
                :
                pages == 2 ?
                    <Attachments
                        setPages={setPages}
                        phase2Data={phase2Data}
                        setPhase2Data={setPhase2Data}
                        submitPhase2={submitPhase2}
                    />
                    :
                    pages == 3 ?
                        <PreviewP2
                            phase2Data={phase2Data}
                            setPages={setPages}
                            submitPhase2={submitPhase2}
                        />
                        : <></>
            }
        </>
    )
}

export default Phase2

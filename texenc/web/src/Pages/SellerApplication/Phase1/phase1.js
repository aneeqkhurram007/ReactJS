import React, { useState } from 'react'
import { Navbar } from '../../../Imports/genericComponents'
import { Button, DropDown, PhaseVideoCard } from '../../../Imports/genericComponents'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './phase1.css'
import Step2 from "./Step2/step2"
import Step1 from "./Step1/step1"
import Step3 from "./Step3/step3"
import Step4 from "./Step4/step4"
import { Spin } from 'antd';
import { setUserData, setPhase1, setPhase2 } from '../../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../../services/api"
const Phase1 = () => {
    const [loading, setLoading] = useState(true)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState()
    const [step, setStep] = useState(1)
    React.useEffect(() => {
        setLoading(true)
        let user = window.localStorage.getItem("user");
        if (!state.user.user) {
            console.log("check")
            dispatch(setUserData(JSON.parse(user)))
            console.log(state.user.user)

        }
        else {

            api.post('seller/getseller', { "id": JSON.parse(user).id })
                .then((response) => {
                    console.log(response)
                    dispatch(setPhase1(response.data.data.phase1))
                    dispatch(setPhase2(response.data.data.phase2))
                    if (response.data.data.phase1.applicationSubmitted) {
                        console.log(response.data.data.phase1)
                        setFormData(response.data.data.phase1)
                        setLoading(false)
                        setStep(4)
                    } else {
                        setFormData({
                            "id": JSON.parse(user).id,
                            "type": "",
                            "skills": [],
                            "about": "",
                            "noOfEmployees": 0,
                            "language": [],
                            "projects": [],
                            "experience": [],
                            "education": [],
                            "socialMediaUrls": {
                                "fb": "",
                                "linkdin": "",
                                "insta": "",
                                "printrest": "",
                                "tiktok": "",
                                "twitter": "",

                            },

                            "phase1Status": "submitted",
                            "applicationSubmitted": false,
                        })
                    }

                    setLoading(false)
                    console.log("response")
                    console.log("response")
                    console.log("response")
                    // console.log(response.data)

                }).catch((err) => {
                    console.log("error111")
                    console.log("error111")
                    console.log("error111")
                    console.log(err)
                    setLoading(false)
                })

        }
    }, [state.user.user]);



    const skill = [
        {
            value: "react",
            label: "React"
        },
        {
            value: "node",
            label: "Node"
        },
        {
            value: "mern",
            label: "MERN"
        }
    ]
    // const [formData, setFormData] = useState({
    //     "id": null,
    //     "type": "",
    //     "skills": [],
    //     "about": "",
    //     "noOfEmployees": 0,
    //     "language": [],
    //     "projects": [],
    //     "experience": [],
    //     "education": [],
    //     "socialMediaUrls": {
    //         "fb": "",
    //         "linkdin": "",
    //         "insta": "",
    //         "printrest": "",
    //         "tiktok": "",
    //         "twitter": "",

    //     },

    //     "phase1Status": "submitted",
    //     "applicationSubmitted": true,

    // })


    const render = () => {
        if (step == 1) {
            return (<Step1 setStep={setStep} formData={formData} setFormData={setFormData} />)
        } else if (step == 2) {
            return (<Step2 skills={skill} formData={formData} setFormData={setFormData} setStep={setStep} />)
        }
        else if (step == 3) {
            return (<Step3 formData={formData} setFormData={setFormData} setStep={setStep} />)
        }
        else if (step == 4) {
            return (<Step4 formData={formData} setFormData={setFormData} setStep={setStep} />)
        }
    }
    return (
        <>
            {loading ? <Spin className="spin" /> :

                <div className="container-fluid ">
                    <div className="row pl-5 pr-5" >
                        <div className="col-10">
                            <br />
                            <h1>Seller Application </h1>
                        </div>
                        <div className="col-2">
                            <Button
                                filled={false}
                                text={"cancel"}
                                className={"cancelDraftbtn"}
                            />
                        </div>
                    </div>
                    <div className="row pl-5 pr-5" >
                        <div className="col-8 ">


                            {render()}
                            <br />
                            <br />
                            <br />
                        </div>

                        <div className="col-4 sideCard">
                            <PhaseVideoCard className="ml-auto mr-auto" />
                        </div>
                    </div>
                </div>

            }


        </>
    )
}

export default Phase1

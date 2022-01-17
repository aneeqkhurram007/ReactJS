import React, { useState } from 'react'
import './project.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, Stepper } from "../../Imports/genericComponents"
import { Steps, Popover } from 'antd';
import Overview from "./Overview/overview"
import Gallery from "./Gallery/gallery"
import { message } from 'antd';
import api from "../../services/api"
export default function Project(props) {
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const { Step } = Steps;
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState(
        {
            "sellerId": 1,
            "title": "",
            "job": "",
            "category": "",
            "description": "",
            "subCategory": [],
            "time": {
                "time1": null,
                "time2": null,
                "category1": "",
                "category2": "",
            },
            "price": {
                "value": "",
                "currency": "",
            },

            "imagesAndVideos": [],
            "files": [],
            "urls": [],
            "submitted": true
        }
    )
    React.useEffect(() => {
        let user = window.localStorage.getItem("user");
        console.log(user)

        setFormData({ ...formData, sellerId: JSON.parse(user).id })
    }, [])
    const customDot = (dot) => (
        // <Popover
        //     content={
        //         <span>
        //             step {index} status: {status}
        //         </span>
        //     }
        // >
        <span >
            { dot}
        </span>
    );
    const back = () => {
        switch (step) {
            case 1:
                setStep(0)
                break;
            default:
            // code block
        }

    }
    const save = () => {
        switch (step) {
            case 0:
                setStep(1)
                break;
            case 1:
                setLoading(true)
                console.log(formData)
                const {
                    sellerId,
                    title,
                    job,
                    category,
                    subCategory,
                    time,
                    price,
                    imagesAndVideos,
                    files,
                    urls,
                    submitted,
                    description
                } = formData
                api
                    .post('seller/createPortfolio', {
                        sellerId,
                        title,
                        relatedJob: job,
                        category,
                        subCategory,
                        time,
                        budget: price.value,
                        imagesAndVideos,
                        files,
                        description,
                        url: urls,
                        submitted: true,
                    })
                    .then((response) => {

                        message.success("Project Added Sucssfully", [2])
                        history.push("/")
                        setLoading(false)
                        console.log(response.data)
                    }).catch((err) => {
                        setLoading(false)
                        console.log(err.response)
                    })
                console.log(formData)
                break;
                // setStep(2)
                break;
            default:
            // code block
        }

    }
    const steps = ['Project Overview', 'Project Files',];
    return (
        <div className="container-fluid lightbackground ">
            {/* <Navbar /> */}
            <div className="mainContainer" >
                <div className="pt-5">
                    <div className="d-flex ">
                        <h2 >Create New Service</h2>
                        <Button className="ml-auto cancelButton " text={"cancel"} />
                    </div>
                </div>
                <div className="card row pt-3">
                    <Stepper active={step} steps={steps} />
                    {/* <Steps className="width50" current={step} progressDot={customDot}>
                        <Step title="Service Over View" onClick={() => setStep(0)} />
                        < Step title="Scope and Pricing" onClick={() => setStep(1)} />
                        <Step title="Availbility and Description" onClick={() => setStep(2)} />
                        <Step title="Service Gallery" onClick={() => setStep(3)} />
                    </Steps>, */}
                </div>
                <div className="mt-5">
                    {step == 0 && <Overview step={step} formData={formData} setFormData={setFormData} />}
                    {step == 1 && <Gallery step={step} formData={formData} setFormData={setFormData} />}

                </div>
                <div className="mt-5 ">
                    <li className=" list-group-item d-flex">
                        {step == 0 ? undefined : <Button text={"Back"} className="mr-auto" onClick={() => back()} />}
                        <Button className="ml-auto" filled={true} text={"Save & Continue"} onClick={() => save()} />
                    </li>

                </div>

            </div>

        </div>
    )
}


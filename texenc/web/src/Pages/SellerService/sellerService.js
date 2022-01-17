import React, { useState } from 'react'
import './sellerService.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, Stepper } from "../../Imports/genericComponents"
import { Steps, Popover } from 'antd';
import Overview from "./Overview/overview"
import Price from "./Price/price"
import Availbility from "./Availbility/availbility"
import Gallery from "./Gallery/gallery"
import { message } from 'antd';
import api from "../../services/api"
export default function Service(props) {
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const { Step } = Steps;
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState(
        {
            "sellerId": null,
            "title": "",
            "category": "",
            "subCategory": [],
            "searchTags": [],
            "type": "",
            "totalHours": {
                "hours": "",
                "hoursPer": "",
            },
            "description": "",
            "imagesAndVideos": [],
            "files": [],
            "urls": [],
            "silver": {
                "name": "",
                "description": "",
                "time": 0,
                "price": 0,
                "timeper": "",
                "currency": '',
                "deliverable": [],
            },
            "gold": {
                "name": "",
                "description": "",
                "time": 0,
                "price": 0,
                "timeper": "",
                "currency": '',
                "deliverable": [],
            },
            "platinum": {
                "name": "",
                "description": "",
                "time": 0,
                "price": 0,
                "timeper": "",
                "currency": '',
                "deliverable": [],
            },
            "submitted": false
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
            case 2:
                setStep(1)
                break;
            case 3:
                setStep(2)
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
                setStep(2)
                break;
            case 2:
                setStep(3)
                break;
            case 3:
                setLoading(true)
                console.log(formData)
                const {
                    sellerId,
                    title,
                    category,
                    subCategory,
                    searchTags,
                    type,
                    totalHours,
                    description,
                    imagesAndVideos,
                    files,
                    urls,
                    silver,
                    gold,
                    platinum,
                    submitted, } = formData
                api
                    .post('seller/addservice', {
                        sellerId,
                        title,
                        category,
                        subCategory,
                        searchTags,
                        type,
                        noOfHours: totalHours,
                        description,
                        imagesAndVideos,
                        files,
                        url: urls,
                        silver,
                        gold,
                        platinum,
                        submitted: true
                    })
                    .then((response) => {

                        message.success("Service Added Sucssfully", [2])
                        history.push("/")
                        setLoading(false)
                        console.log(response.data)
                    }).catch((err) => {
                        setLoading(false)
                        console.log(err.response)
                    })

                // setStep(2)
                break;
            default:
            // code block
        }

    }
    const steps = ['Service Over View', 'Scope and Pricing', 'Availbility and Description', 'Service Gallery'];
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
                    {step == 1 && <Price step={step} formData={formData} setFormData={setFormData} />}
                    {step == 2 && <Availbility step={step} formData={formData} setFormData={setFormData} />}
                    {step == 3 && <Gallery step={step} formData={formData} setFormData={setFormData} />}

                </div>
                <div className="mt-5 ">
                    <li className=" list-group-item d-flex">
                        {step == 0 ? undefined : <Button text={"Back"} className="mr-auto" onClick={() => back()} />}
                        <Button className="ml-auto" filled={true} text={"Save & Continue"} onClick={() => save()} loading={loading} />
                    </li>

                </div>

            </div>

        </div>
    )
}


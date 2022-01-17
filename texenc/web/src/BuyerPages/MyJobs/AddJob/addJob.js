import React, { useEffect, useState } from 'react'
import './addJob.css';
import { useHistory } from "react-router-dom";
import { Button, InputField, DropDown, Tag, Upload } from "../../../Imports/genericComponents"
import { info, txt, xlsx, pptx, gig1, link, doc, dragImage, projectbutton, pdf } from "../../../Imports/images"

import CloseIcon from '@material-ui/icons/Close';

import api from "../../../services/api"
import Tooltip from '@mui/material/Tooltip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {
    withStyles
} from "@material-ui/core/styles";
import { setUserData } from '../../../Redux/Slices/userSlice';
export default function AddJobs(props) {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const [formData, setFormData] = useState({
        "buyerId": "",
        "title": "",
        "category": "",
        "subCategory": [],
        "sellerType": "",
        "jobType": "",
        "location": "",
        "budget": {
            "price": null,
            "currency": ""
        },
        "projectLength": {
            "time1": null,
            "time2": null,
            "category1": "",
            "category2": "",
        },
        "description": "",
        "attachments": [],

    })
    let multiplePhoto = [formData.attachments]
    useEffect(() => {
        let user = window.localStorage.getItem("user");
        setUser(JSON.parse(user))
        setFormData({ ...formData, buyerId: JSON.parse(user).id })
    }, [])
    const PostJob = () => {
        setLoading(true)
        api.post('buyer/addnewjob', formData)
            .then((response) => {
                console.log(response)
                history.push("/myjobs")
                setLoading(false)
            }).catch((err) => {

                console.log(err)
                setLoading(false)
            })
    }
    const subcategory = [
        {
            value: "React",
            label: "React"
        },
        {
            value: "Node",
            label: "Node"
        },
        {
            value: "Mern",
            label: "MERN"
        }
    ]
    const category = [
        {
            value: "React",
            label: "React"
        },
        {
            value: "Node",
            label: "Node"
        },
        {
            value: "Mern",
            label: "MERN"
        }
    ]
    const location = [
        {
            value: "Lahore",
            label: "Lahore"
        },
        {
            value: "karachi",
            label: "karachi"
        },
        {
            value: "Islamabad",
            label: "Islamabad"
        }
    ]
    const sellerType = [
        {
            value: "Agency",
            label: "Agency"
        },
        {
            value: "Individual",
            label: "Individual"
        }
    ]
    const price = [{
        "value": "PKR",
        "label": "PKR",
    },
    {
        "value": "Dollar",
        "label": "Dollar",
    },


    ]
    const time = [{
        "value": "Year",
        "label": "Year",
    },
    {
        "value": "Month",
        "label": "Month",
    },
    {
        "value": "Week",
        "label": "Week",
    },

    ]
    const TooltipCust = withStyles({
        tooltip: {
            //   color: "lightblue",
            backgroundColor: "#342828"
        }
    })(Tooltip);
    let tipText = "Tip Title here\n Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, \nsed do eiusmod tempor incididunt.\n500 word limit,  "
    return (
        <div className="container-fluid lightbackground maincontainer">
            {/* <Navbar /> */}
            {/* <div className="mainContainer" > */}

            <div className="d-flex pt-1 ">
                <h2 >Post New Job</h2>
                <Button className="ml-auto cancelButton " text={"Cancel"} />
            </div>
            <div className="card ">
                <li className="card-body d-flex " style={{ borderBottom: "1px solid #e9e9e9" }}>
                    <div className="row d-flex" >
                        <h5 className="">Job Overview</h5></div>
                </li>
                <div className="card-body " style={{ width: "70%", marginLeft: "10%" }}>
                    <div className=" d-flex align-items-center mt-3 " >
                        <h6 className=" pr-3  text-right w-25">Title</h6>
                        <div style={{ width: "70%" }}>
                            <InputField type={"simple"} textArea={true} rows={4} value={formData.title} onChange={(e) => setFormData({ ...formData, title: e })} maxlength={40} placeHolder={"What service you are looking for"} /></div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25">Related Category</h6>
                        <div style={{ width: "70%" }}>
                            <DropDown type="simple" placeHolder={"Select Category"} value={formData.category} values={category} onChange={e => {
                                setFormData({ ...formData, category: e })
                            }} /></div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3 text-right w-25">Sub Categories</h6>
                        <div style={{ width: "70%" }}>
                            <DropDown type="simple" multiple={true} placeHolder={"Select Sub Categories"} value={formData.subCategory} values={subcategory} onChange={e => {
                                setFormData({ ...formData, subCategory: e })
                            }} />
                        </div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25"></h6>
                        <div className="width70 d-flex row" >
                            {formData?.subCategory?.map((tag) => {
                                return (
                                    <div className="mb-1" >
                                        <Tag color={"#d36455"} img={true} icon={<CloseIcon fontSize="small" color={"white"} onClick={(e) => {
                                            console.log("jdsfskhdjfhsfhsfk")
                                            let arr = formData.subCategory
                                            let index = arr.indexOf(tag);
                                            if (index !== -1) {
                                                arr.splice(index, 1);
                                                setFormData({ ...formData, subCategory: [...arr] })

                                            }
                                        }} />} text={tag} />
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25">Seller Type</h6>
                        <div style={{ width: "70%" }}>
                            <DropDown type="simple" placeHolder={"Select Category"} value={formData.sellerType} values={sellerType} onChange={e => {
                                setFormData({ ...formData, sellerType: e })
                            }} /></div>
                    </div>
                    <div className=" d-flex  mt-3" >
                        <h6 className=" pr-3 mt-3  text-right w-25">Job Type</h6>
                        <div style={{ width: "70%" }}>
                            <FormControl component="fieldset" className="w-100">
                                <RadioGroup
                                    onChange={(e) => { setFormData({ ...formData, jobType: e.target.value }) }}
                                    aria-label="gender"
                                    // defaultValue="individual"
                                    value={formData.jobType ? formData.jobType : undefined}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="In-Person & Remote" control={<Radio />} label="In-Person & Remote" />
                                    <FormControlLabel value="In-Person only" control={<Radio />} label="In-Person only" />
                                    <FormControlLabel value="Remote only" control={<Radio />} label="Remote only" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="imginfo">
                            <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                                <img src={info} />
                            </TooltipCust>
                        </div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25">Job Location</h6>
                        <div style={{ width: "70%" }}>
                            <DropDown type="simple" placeHolder={"Select Location"} value={formData.location} values={location} onChange={e => {
                                setFormData({ ...formData, location: e })
                            }} /></div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25">Budget</h6>
                        <div style={{ width: "70%" }}>
                            <DropDown type="simple" multiple={false} values={price} placeHolder={"Price"} inputValue={formData.budget.price} value={formData.budget.currency} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, budget: { "price": e, "currency": formData.budget.currency } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, budget: { "price": formData.budget.price, "currency": e } }) }} />
                        </div>
                    </div>
                    <div className=" d-flex align-items-center mt-3" >
                        <h6 className=" pr-3  text-right w-25">Project Length</h6>
                        <div style={{ width: "70%" }} className="d-flex">
                            <div className="width50 pr-1">
                                <DropDown type="simple" values={time} placeHolder={"Time"} inputValue={formData.projectLength.time1} value={formData.projectLength.category1} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, projectLength: { ...formData.projectLength, time1: e } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, projectLength: { ...formData.projectLength, category1: e } }) }} />
                            </div><div className="width50 pl-1">
                                <DropDown type="simple" values={time} placeHolder={"Time"} inputValue={formData.projectLength.time2} value={formData.projectLength.category2} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, projectLength: { ...formData.projectLength, time2: e } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, projectLength: { ...formData.projectLength, category2: e } }) }} />
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex  mt-3 " >
                        <h6 className=" pr-3  pt-1 text-right w-25">Job Description</h6>
                        <div style={{ width: "70%" }}>
                            <InputField type={"simple"} textArea={true} rows={15} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e })} maxlength={1300} placeHolder={"Some description here"} /></div>
                    </div>
                </div>
            </div>

            <div className="card mt-3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row d-flex" >
                            <div className="d-flex">
                                <h5 className="">Attachments</h5><p className="textColor pl-2">maximum 15  optional</p></div>
                            <p className="ml-auto textColor ">0 of 500Mb used</p>


                        </div></li>
                    <li className="list-group-item  mr-5 ml-5"  >
                        <Upload className="mb-3" uploadArea={true} both={true} multiple={true} getUrl={(file) => {
                            multiplePhoto = formData.attachments
                            multiplePhoto.push(file)
                            console.log(multiplePhoto)
                            setFormData({ ...formData, attachments: [...multiplePhoto] })
                        }} />
                        <div className=" d-flex row">
                            {formData.attachments.map((src) => {
                                if (src.type == "mp4" || src.type == "mov" || src.type == "wmv" || src.type == "avi" || src.type == "webm" || src.type == "mkv" || src.type == "png" || src.type == "jpg" || src.type == "tiff" || src.type == "gif") {
                                    return (
                                        <  >

                                            {
                                                src.type == "mp4" || src.type == "mov" || src.type == "wmv" || src.type == "avi" || src.type == "webm" || src.type == "mkv" ?
                                                    // <div style={{ width: "19%", height: "160px", marginRight: "1%" }} className=" mb-2">
                                                    // <span style={{ backgroundColor: "blue" }}>
                                                    <video controls style={{ width: "19%", height: "160px", marginRight: "1%", }} className=" mb-2" >
                                                        <source src={src.src} />
                                                    </video>
                                                    // </span>
                                                    :
                                                    //  <span>
                                                    <img src={src.src} style={{ width: "19%", height: "160px", marginRight: "1%", }} className=" mb-2" />

                                            }
                                        </>

                                    )
                                }

                            })}
                        </div>
                        <ul class="list-group list-group-flush">
                            {formData.attachments.map((src) => {
                                if (src.type == "doc" || src.type == "docx" || src.type == "ppt" || src.type == "txt" || src.type == "xlsx" || src.type == "pdf") {
                                    return (<li class="list-group-item">
                                        {src.type == "doc" && <div className="row"> <img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "docx" && <div className="row"><img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "ppt" && <div className="row"> <img src={pptx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "txt" && <div className="row"> <img src={txt} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "xlsx" && <div className="row"><img src={xlsx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "pdf" && <div className="row"><img src={pdf} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                    </li>)
                                }


                            })}
                        </ul>
                        {/* </div> */}

                    </li>
                </ul>
            </div>
            <div className="mt-3 ">
                <li className=" list-group-item d-flex">
                    <Button className="ml-auto" filled={true} text={"Post Job"} onClick={() => PostJob()} loading={loading} />
                </li>

            </div>

        </div >
    )
}


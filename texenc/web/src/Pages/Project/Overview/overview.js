import { React, useState } from 'react'
import './overview.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, InputField, DropDown, Tag } from "../../../Imports/genericComponents"
import { info } from "../../../Imports/images"
// import { Steps, Popover } from 'antd';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@mui/material/Tooltip';
import {
    withStyles
} from "@material-ui/core/styles";
export default function Overview(props) {
    const category = [
        {
            "value": "Web Development",
            "label": "Web Development"
        },
        {
            "value": "Mobile Development",
            "label": "Mobile Development"
        },
        {
            "value": "Photography",
            "label": "Photography"
        },
        {
            "value": "Businees Development",
            "label": "Businees Development"
        },
        {
            "value": "Amazon",
            "label": "Amazon"
        },
    ]
    const subcategory = [
        {
            "value": "React",
            "label": "React"
        },
        {
            "value": "Figma",
            "label": "Figma"
        },
        {
            "value": "Drop Shipping",
            "label": "Drop Shipping"
        },
        {
            "value": "Businees Development",
            "label": "Businees Development"
        },
        {
            "value": "Android Developer",
            "label": "Android Developer"
        },
    ]
    const tag = [
        {
            "value": "#development",
            "label": "#development"
        },
        {
            "value": "#photography",
            "label": "#photography"
        },
        {
            "value": "#amzon",
            "label": "#amzon"
        },
        {
            "value": "#engneering",
            "label": "#engneering"
        },
        {
            "value": "#automation",
            "label": "#automation"
        },
    ]
    const jobs = [
        {
            "value": "TEXENC",
            "label": "TEXENC"
        },
        {
            "value": "3D Gaming",
            "label": "3D Gaming"
        },
        {
            "value": "Netflix",
            "label": "Netflix"
        },
        {
            "value": "Youtube",
            "label": "Youtube"
        },
    ]
    const time = [{
        "value": "Day",
        "label": "Day",
    },
    {
        "value": "Week",
        "label": "Week",
    },
    {
        "value": "Month",
        "label": "Month",
    }, {
        "value": "Year",
        "label": "Year",
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
    const TooltipCust = withStyles({
        tooltip: {
            //   color: "lightblue",
            backgroundColor: "#342828"
        }
    })(Tooltip);
    let tipText = "Tip Title here\n Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, \nsed do eiusmod tempor incididunt.\n500 word limit,  "
    return (
        <div className="card p-3">
            <div className="" style={{ width: "70%", marginLeft: "10%" }}>
                <div className=" d-flex align-items-center mt-3 " >
                    <h6 className=" pr-3  text-right w-25">Title</h6>
                    <div style={{ width: "70%" }}>
                        <InputField rows={4} value={props.formData.title} onChange={(e) => props.setFormData({ ...props.formData, title: e })} maxlength={40} placeHolder={"Brief but descriptive title"} /></div>
                    <div className="imginfo">
                        <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                            <img src={info} />
                        </TooltipCust>
                    </div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3  text-right w-25">Related Texenn Job</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown placeHolder={"Select Job"} value={props.formData.job} values={jobs} onChange={e => {
                            props.setFormData({ ...props.formData, job: e })
                        }} /></div>
                    <div className="imginfo">
                        <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                            <img src={info} />
                        </TooltipCust>
                    </div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3  text-right w-25">Related Category</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown placeHolder={"Select Category"} value={props.formData.category} values={category} onChange={e => {
                            props.setFormData({ ...props.formData, category: e })
                        }} /></div>
                    <div className="imginfo">
                        <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                            <img src={info} />
                        </TooltipCust>
                    </div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3 text-right w-25">Sub Categories</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown multiple={true} placeHolder={"Select Sub Categories"} value={props.formData.subCategory} values={subcategory} onChange={(e) => props.setFormData({ ...props.formData, subCategory: typeof e === 'string' ? e.split(',') : e, })} /></div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3  text-right w-25"></h6>
                    <div className="width70 d-flex row" >
                        {props.formData?.subCategory?.map((tag) => {
                            return (
                                <div className="mb-1" >
                                    <Tag color={"#d36455"} img={true} icon={<CloseIcon fontSize="small" color={"white"} onClick={(e) => {
                                        console.log("jdsfskhdjfhsfhsfk")
                                        let arr = props.formData.subCategory
                                        let index = arr.indexOf(tag);
                                        if (index !== -1) {
                                            arr.splice(index, 1);
                                            props.setFormData({ ...props.formData, subCategory: [...arr] })

                                        }
                                    }} />} text={tag} />
                                </div>)
                        })}
                    </div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3 text-right w-25">Completion Time</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown values={time} placeHolder={"Time"} inputValue={props.formData.time.time1} value={props.formData.time.category1} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setFormData({ ...props.formData, time: { ...props.formData.time, time1: e } }) }} onChangeSelectore={(e) => { props.setFormData({ ...props.formData, time: { ...props.formData.time, category1: e } }) }} />
                        <DropDown values={time} placeHolder={"Time"} inputValue={props.formData.time.time2} value={props.formData.time.category2} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setFormData({ ...props.formData, time: { ...props.formData.time, time2: e } }) }} onChangeSelectore={(e) => { props.setFormData({ ...props.formData, time: { ...props.formData.time, category2: e } }) }} />

                    </div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3 text-right w-25">Budjet</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown values={price} placeHolder={"Price"} inputValue={props.formData.price.value} value={props.formData.price.currency} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setFormData({ ...props.formData, price: { ...props.formData.price, value: e } }) }} onChangeSelectore={(e) => { props.setFormData({ ...props.formData, price: { ...props.formData.price, currency: e } }) }} />
                    </div>
                </div>
                <div className=" d-flex  mt-3 " >
                    <h6 className=" pr-3 mt-3  text-right w-25">Description</h6>
                    <div style={{ width: "70%" }}>
                        <InputField type={"simple"} value={props.formData.description} textArea={true} rows={6} onChange={(e) => props.setFormData({ ...props.formData, description: e })} maxlength={100} placeHolder={"Some description here"} />
                    </div>
                    <div className=" imginfo">
                        <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                            <img src={info} />
                        </TooltipCust>

                    </div>
                </div>

            </div>
        </div >
    )
}

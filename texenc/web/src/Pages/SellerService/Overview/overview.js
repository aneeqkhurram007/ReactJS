import { React, useState } from 'react'
import './overview.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, InputField, DropDown, Tag } from "../../../Imports/genericComponents"
// import { Steps, Popover } from 'antd';
import CloseIcon from '@material-ui/icons/Close';
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
    return (
        <div className="card p-3">
            <div className="" style={{ width: "70%", marginLeft: "10%" }}>
                <div className=" d-flex align-items-center mt-3 " >
                    <h6 className=" pr-3  text-right w-25">Title</h6>
                    <div style={{ width: "70%" }}>
                        <InputField type={"simple"} textArea={true} rows={4} value={props.formData.title} onChange={(e) => props.setFormData({ ...props.formData, title: e })} maxlength={40} placeHolder={"What service you going to offer..."} /></div>
                </div>
                <div className=" d-flex align-items-center mt-3" >
                    <h6 className=" pr-3  text-right w-25">Related Category</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown placeHolder={"Select Category"} value={props.formData.category} values={category} onChange={e => {
                            props.setFormData({ ...props.formData, category: e })
                        }} /></div>
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
                <div className=" d-flex align-items-center  mt-3 mb-3" >
                    <h6 className="pr-3  text-right w-25">Search Tags</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown multiple={true} placeHolder={"Not more than 6"} values={tag} value={props.formData.searchTags} onChange={(e) => props.setFormData({ ...props.formData, searchTags: typeof e === 'string' ? e.split(',') : e, })} /></div>
                </div>
            </div>
        </div>
    )
}

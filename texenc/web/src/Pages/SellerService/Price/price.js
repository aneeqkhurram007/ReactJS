import React, { useState } from 'react'
import './price.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, InputField, DropDown } from "../../../Imports/genericComponents"
import { goldbadge, silverbadge, platinumbadge } from "../../../Imports/images"
// import { Steps, Popover } from 'antd';
import { Switch } from 'antd';
import Card from "./Card/card"
import { PinDropRounded } from '@material-ui/icons';
export default function Overview(props) {
    const [radius, setRadius] = useState("0px")
    const [packagecheck, setPackagecheck] = useState(false)


    const setsilver = (e) => {
        props.setFormData({ ...props.formData, silver: e })
    }
    const setgold = (e) => {
        props.setFormData({ ...props.formData, gold: e })
    }
    const setplatinum = (e) => {
        props.setFormData({ ...props.formData, platinum: e })
    }
    const setDeliverableAll = (e) => {

        props.setFormData({ ...props.formData, silver: { ...props.formData.silver, deliverable: [...e] }, gold: { ...props.formData.gold, deliverable: [...e] }, platinum: { ...props.formData.platinum, deliverable: [...e] } })
    }
    return (
        <div className="card ">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><div className="row d-flex" >
                    <h5 className="font-weight-bold">Packages</h5>
                    <div className=" ml-auto d-flex" ><h6>3 Packages</h6><Switch defaultChecked={true} className="ml-2" onChange={e => {
                        setPackagecheck(!e)
                        if (e == true) { setRadius("0px") } else {
                            setRadius("2px")
                        }
                    }} /></div>

                </div></li>
                <li class="list-group-item">
                    <div className="row">
                        <div className="col-3">
                            <div className="d-flex " style={{ marginTop: "110px" }}> <h6 className="   text-right w-100">Name</h6></div>
                            <div className="d-flex " style={{ marginTop: "40px" }}> <h6 className="  text-right w-100">Describe you package</h6></div>
                            <div className="d-flex " style={{ marginTop: "160px" }}> <h6 className="   text-right w-100">Delivery Time</h6></div>
                            {props.formData.silver.deliverable.map(() => {
                                return (

                                    <div className="d-flex " style={{ marginTop: "32px" }}> <h6 className="  font-weight-bold text-right w-100">  </h6></div>)
                            })}
                            <div className="d-flex " style={{ marginTop: "90px" }}> <h6 className="   text-right w-100">Price</h6></div>
                        </div>
                        <div className="col-3"><Card package={props.formData.silver} setPackage={setsilver} packagecheck={false} deliverable={props.formData.silver.deliverable} img={silverbadge} packageName={"Silver"} setDeliverable={setDeliverableAll} setCheck={(e) => props.setFormData({ ...props.formData, silver: { ...props.formData.silver, deliverable: e } })} /></div>
                        <div className="col-3"><Card package={props.formData.gold} setPackage={setgold} packagecheck={packagecheck} radius={radius} deliverable={props.formData.gold.deliverable} img={goldbadge} packageName={"Gold"} setDeliverable={setDeliverableAll} setCheck={(e) => props.setFormData({ ...props.formData, gold: { ...props.formData.gold, deliverable: e } })} /></div>
                        <div className="col-3"><Card package={props.formData.platinum} setPackage={setplatinum} packagecheck={packagecheck} radius={radius} deliverable={props.formData.platinum.deliverable} img={platinumbadge} packageName={"Platinum"} setDeliverable={setDeliverableAll} setCheck={(e) => props.setFormData({ ...props.formData, platinum: { ...props.formData.platinum, deliverable: e } })} /></div>
                    </div>


                </li>
            </ul>
        </div>
    )
}

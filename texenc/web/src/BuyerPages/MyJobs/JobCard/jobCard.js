import React, { useState } from 'react'
import './jobCard.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, Stepper, InputField, DropDown, Tag } from "../../../Imports/genericComponents"
import { eye, heart } from "../../../Imports/images"
import moment from "moment"
import { Divider } from 'antd';
import EditIcon from '@material-ui/icons/Edit';

import api from "../../../services/api"

export default function JobCard(props) {
    let service = props.service
    return (
        <div className="cardContainer card p-3">
            <div className="row">
                <h5 className="primaryColor">{service.title}</h5>
                <div className="ml-auto d-flex mb-1">
                    <EditIcon fontSize={"large"} className="icon  ml-auto mr-2" onClick={() => { }} />
                    <Button filled={true} text={"View Offers"} onClick={() => {
                        {
                            props.setJobView(true)
                            props.setFormData(props.service)
                            props.setJob(props.service)
                        }
                    }} />

                </div>
            </div>
            <div className="row pt-2">
                <text className="textColor">Job Type : <span style={{ color: "black" }}>{service.jobType}</span></text>
                <text className="textColor ml-2">Budjet : <span style={{ color: "black" }}>{service.budget.price}</span></text>
                <text className="textColor ml-2">Project Length : <span style={{ color: "black" }}>{service.projectLength.time1}  {service.projectLength.category1}  {service.projectLength.time2}  {service.projectLength.category2}</span></text>
                <text className="textColor ml-2">Offer Recieved : <span style={{ color: "black" }}>{service.offerRecieved}</span></text>
                <text className="textColor ml-2">Avg. Offer : <span style={{ color: "black" }}>{service.budget.price}</span></text>
                <text className="textColor ml-auto">Posted {moment(service.createdAt).fromNow()}</text>
            </div>
            <div className="row pt-2"><text className="textColor ">{service.description}</text></div>
            <div className="row pt-2">
                <text className="textColor ">Required Skills :</text>
                {service.subCategory.map((skill) => (
                    <div>
                        <Tag color={"#F5F5F5"} text={skill} textClass={"tag"} />
                    </div>
                ))}


            </div>
            <div className="row pt-2">
                <Divider />
            </div>
            <div className="row pt-2 align-items-center">
                <img src={eye} className="imgAvatar" /><text className="textColor ml-1 mr-3"> 9999 Views</text><img className="imgAvatar" src={heart} /><text className="textColor ml-1">9999 Saves</text>
            </div>
        </div>
    )
}


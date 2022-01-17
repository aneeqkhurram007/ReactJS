import React, { useState } from 'react'
import './offerCard.css';
import { useHistory } from "react-router-dom";
import { Button, Tag, Avatar } from "../../../../Imports/genericComponents"
import { flag, star } from "../../../../Imports/images"
import moment from "moment"
export default function OfferCard(props) {

    let offer = props.offer
    return (
        <div className="cardContainer mb-0">
            <div className="d-flex">
                <div >
                    <Avatar className="p-0 " src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                </div>
                <div className="col-4  pl-2">
                    <div className="row">  <h6 className="colorBlack">{offer.userName}</h6><text className="textColor ml-2">Expert Vetted Seller</text></div>
                    <div className="row"> <img src={star} /><span style={{ color: "#FFBE5B" }} className="ml-1 mr-1"> 4.4</span><text className="textColor"> (999)</text><div>{offer.agency && <Tag text={"Agency"} className=" pl-1" color={"#9e9e9e"} />}</div></div>
                </div>
            </div>
            <div className="row pt-4">
                <h6 className="colorBlack">Offer Budjet : <text className="textColor">{offer.price.amount}</text></h6>
                <h6 className="colorBlack ml-2">Offer Time : <text className="textColor">{offer.completionTime.time1} {offer.completionTime.category1} {offer.completionTime.time2} {offer.completionTime.category2}</text></h6>
                <h6 className="colorBlack ml-2">Offer Submited : <text className="textColor">{moment(offer.createdAt).fromNow()}</text></h6>
            </div>
            <div className="row pt-2">
                <text className="colorBlack">Cover Letter & Attachments</text>
            </div>
            <div className="row pt-2">
                <text className="textColor">{offer.coverLetter}</text>
            </div>
            <div className="row pt-2">
                <text className="textColor ">Matching Skills :</text>
                {offer.skills?.map((skill) => (
                    <div>
                        <Tag color={"#F5F5F5"} text={skill} textClass={"tag"} className="p-0" />
                    </div>
                ))}


            </div>
            <div className="row pt-4">
                <div className="d-flex align-items-center" ><img className="imgFlag mr-1" src={flag} />Lahore, Punjab Pakistan - 2:18 AM Local Time </div>
                <div className="ml-auto d-flex ">
                    <Button filled={false} text={"View Profile"} className="mr-1" />
                    <Button filled={false} text={"Initiate Chat"} className="mr-1" />
                    <Button filled={true} text={"Hire Seller"} className="mr-1" />
                </div>
            </div>

        </div>
    )
}


import React, { useEffect, useState } from 'react'
import './jobView.css';
import { useHistory } from "react-router-dom";
import { Button, InputField, DropDown, Tag, Upload } from "../../../Imports/genericComponents"
import { info, txt, xlsx, pptx, gig1, link, doc, pdf, img, video } from "../../../Imports/images"
import moment from "moment"
import api from "../../../services/api"
import Tooltip from '@mui/material/Tooltip';
import OfferCard from "./OfferCard/offerCard"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Share from '@material-ui/icons/Share';
import { Table, Spin } from 'antd';
import {
    withStyles
} from "@material-ui/core/styles";
export default function MyJobs(props) {


    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const [formData, setFormData] = useState()
    const [joboffer, setJobOffer] = useState()
    useEffect(() => {
        setLoading(true)

        let user = window.localStorage.getItem("user");
        api.get('buyer/jobdetail/' + props.job.id).then((res) => {
            // dispatch(setAllJobs(res.data.jobs))
            setFormData(res.data.job)
            api.get('buyer/getalljoboffer/' + props.job.id)
                .then((response) => {
                    console.log(response.data.jobOffer)
                    setJobOffer(response.data.jobOffer)
                    setLoading(false)
                })
                .catch((err) => {
                    setJobOffer([])
                    setLoading(false)
                    console.log(err)
                })


        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })

    }, [])
    const sort = [
        {
            "value": "Sort By: Most Recent",
            "label": "Sort By: Most Recent"
        },
        {
            "value": "Sort By: Most Viewed",
            "label": "Sort By: Most Viewed"
        },

    ]

    const columns = [
        {

            render: data => (

                <OfferCard offer={data} />
            )
        }
    ].filter(item => !item.hidden);


    return (

        <div className="container-fluid lightbackground ">

            <>
                {loading && <Spin />}</>

            {!loading && <>
                <div className=" pt-1 pb-4" >
                    <h3 className="mb-0">Job Details</h3>
                    <div className="d-flex " ><ArrowBackIcon className="primaryColor" onClick={() => props.setJobView(false)} /><text className="primaryColor">Job List</text > </div>
                </div>
                <div className="row pb-5">
                    <div className="col-10 " >
                        <div className="card  ml-0" >
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div >

                                    <h5  >{formData.title}</h5>
                                </div>
                                <div className="d-flex align-items-center " >
                                    <div >
                                        <Tag text={"Business Development"} textClass="tagCategory " className="pl-0" />
                                    </div>
                                    <text> {moment(formData.createdAt).fromNow()}</text>
                                </div>
                                <div className="row pt-2">
                                    <text className="textColor">Job Type : <span style={{ color: "black" }}>{formData.jobType}</span></text>
                                    <text className="textColor ml-2">Budjet : <span style={{ color: "black" }}>{formData.budget.price}</span></text>
                                    <text className="textColor ml-2">Project Length : <span style={{ color: "black" }}>{formData.projectLength.time1}  {formData.projectLength.category1}  {formData.projectLength.time2}  {formData.projectLength.category2}</span></text>
                                </div>

                            </div>
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div >

                                    <h6 className="colorBlack">Description</h6>
                                </div>

                                <div  >
                                    <text className="textColor" >{formData.description}</text>
                                </div>
                            </div>
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div >

                                    <h6 className="colorBlack">Attachments:</h6>
                                </div>

                                <div className="row" >
                                    {formData.attachments.map((attach) => {
                                        return (

                                            <>
                                                {
                                                    attach.type == "mp4" || attach.type == "mov" || attach.type == "wmv" || attach.type == "avi" || attach.type == "webm" || attach.type == "mkv" ?
                                                        <div className="width45 card mr-auto mb-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="imgdiv"><img src={video} /></div>
                                                                <text className="font-weight-bold pl-2">{attach.name}</text>
                                                                <text className="ml-auto mr-3">{Math.round(attach.size / 1024) / 1024}Kb</text>
                                                            </div>
                                                        </div> : undefined}
                                                {
                                                    attach.type == "png" || attach.type == "jpg" || attach.type == "tff" || attach.type == "gif" ?
                                                        <div className="width45 card mr-auto mb-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="imgdiv"><img clasName="img" src={img} /></div>
                                                                <text className="font-weight-bold pl-2">{attach.name}</text>
                                                                <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                            </div>
                                                        </div> : undefined}
                                                {attach.type == "ppt" &&
                                                    <div className="width45 card mr-auto mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="imgdiv"><img className="img" src={pptx} /></div>
                                                            <text className="font-weight-bold pl-2">{attach.name}</text>
                                                            <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                        </div>
                                                    </div>}
                                                {attach.type == "doc" || attach.type == "docx" ?
                                                    <div className="width45 card mr-auto mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="imgdiv"><img className="img" src={doc} /></div>
                                                            <text className="font-weight-bold pl-2">{attach.name}</text>
                                                            <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                        </div>
                                                    </div> : undefined}
                                                {attach.type == "txt" &&
                                                    <div className="width45 card mr-auto mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="imgdiv"><img className="img" src={txt} /></div>
                                                            <text className="font-weight-bold pl-2">{attach.name}</text>
                                                            <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                        </div>
                                                    </div>}
                                                {attach.type == "xlsx" &&
                                                    <div className="width45 card mr-auto mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="imgdiv"><img className="img" src={xlsx} /></div>
                                                            <text className="font-weight-bold pl-2"> {attach.name}</text>
                                                            <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                        </div>
                                                    </div>}
                                                {attach.type == "pdf" &&
                                                    <div className="width45 card mr-auto mb-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="imgdiv"><img className="img" src={pdf} /></div>
                                                            <text className="font-weight-bold pl-2"> {attach.name}</text>
                                                            <text className="ml-auto mr-3">{Math.round(attach.size / 1024)}Kb</text>
                                                        </div>
                                                    </div>}
                                            </>)
                                    })}
                                </div>
                            </div>
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div >

                                    <h6 className="colorBlack">Required Skills:</h6>
                                </div>
                                <div className="row pt-2">
                                    {formData.subCategory.map((skill) => (
                                        <div>
                                            <Tag color={"#F5F5F5"} text={skill} textClass={"tag"} className="pl-1 pr-0" />
                                        </div>
                                    ))}


                                </div>

                            </div>

                        </div>
                        <div className="card  ml-0 mt-3" >
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div className="d-flex align-items-center">
                                    <div >

                                        <h4  >Received Offers({joboffer.length})</h4>
                                    </div>
                                    <div className="ml-auto">
                                        <DropDown values={sort} value={"Sort By: Most Recent"} placeHolder={"Sort"} /></div>

                                </div>
                            </div>
                            <div style={{ borderBottom: "1px solid #e9e9e9" }}>

                                <Table dataSource={joboffer} columns={columns} pagination={false} />

                            </div>
                        </div>
                    </div>
                    <div className=" col-2">
                        <div className="card">
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <Button className="buttonEdit mt-2 mb-3" img={true} text={"Edit Job Post"} icon={<EditIcon />} />
                                <Button className="buttonShare" img={true} text={"Share Job"} icon={<Share />} />
                            </div>
                            <div className="card-body " style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #e9e9e9" }}>
                                <text className="blackColor textWight">Offer Recieved : </text>
                                <text className="buttonShare textWight"> {joboffer.length}</text>

                                <text className="blackColor mt-2">Avg. Offer :</text>
                                <text className="buttonShare textWight">{formData.avg}</text>
                                <text className="blackColor mt-2">Lowest Offer Budjet :</text>
                                <text className=" textWight"><span className="underline">{formData.avg}</span></text>

                                <text className="blackColor mt-2">Highest Offer Budjet : </text>
                                <text className=" textWight"><span className="underline">{formData.avg}</span></text>
                            </div>
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <Button className="buttonShare mt-2 mb-3" text={"Pause Offers"} img={true} icon={true} />
                                <Button className="buttonShare" img={true} text={"Close Job"} icon={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </div >
    )
}


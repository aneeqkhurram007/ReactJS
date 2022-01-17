import React, { useEffect, useState } from 'react'
import './jobView.css';
import { useHistory } from "react-router-dom";
import { Button, Tag, } from "../../../Imports/genericComponents"
import { info, txt, xlsx, pptx, gig1, link, doc, pdf, img, video } from "../../../Imports/images"
import moment from "moment"
import api from "../../../services/api"
import SubmitOffer from "./SubmitOffer/model"
import Share from '@material-ui/icons/Share';
import FlagIcon from '@material-ui/icons/Flag';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Table, Spin } from 'antd';
import {
    withStyles
} from "@material-ui/core/styles";
export default function MyJobs(props) {


    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const [formData, setFormData] = useState()
    const [model, setModel] = useState(false)
    useEffect(() => {
        setLoading(true)

        let user = window.localStorage.getItem("user");
        api.get('buyer/jobdetail/' + props.job.id).then((res) => {
            setFormData(res.data.job)

            setLoading(false)

        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })

    }, [])

    const submitOffer = (e) => {

        api.post('seller/sendjoboffer', e)
            .then((response) => {
                console.log(response)
                setModel(false);
                history.push("/findJobs")

            }).catch((err) => {
                setModel(false);

                console.log(err)

            })
    }


    return (

        <div className="container-fluid lightbackground ">

            <>
                {loading && <Spin />}</>

            {!loading && <>
                <SubmitOffer visible={model} handleOk={(e) => submitOffer(e)} handleCancel={() => setModel(false)} jobId={props.job.id} />
                <div className=" pt-1 pb-4 d-flex align-items-center" >
                    <h3 className="mb-0">Job Details</h3>
                    <div className="ml-auto"><Tag color={"#01BEAC"} text={"2 of 10 Job Offers Sent"} /></div>
                    {/* <div className="d-flex " ><ArrowBackIcon className="primaryColor" onClick={() => props.setJobView(false)} /><text className="primaryColor">Job List</text > </div> */}
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
                                    <text className="textColor"> {moment(formData.createdAt).fromNow()}</text>
                                </div>
                                <div className="row pt-2">
                                    <text className="colorBlack">Job Type : <span className="textColor" >{formData.jobType}</span></text>
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

                    </div>
                    <div className=" col-2">
                        <div className="card">
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <Button className=" mt-2 mb-3" filled={true} img={true} text={"Submit Offer"} onClick={() => { setModel(true) }} />
                                <Button className=" mt-2 mb-3 buttonShare" img={true} text={"Save Job"} icon={<FavoriteIcon />} />
                            </div>
                            <div className="card-body " style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #e9e9e9" }}>

                                <text className="blackColor  mt-2" >Budget</text>
                                <text className="textWight textColor" >{formData.budget.price}</text>
                                <text className="blackColor mt-2">Project Length :</text>
                                <text className=" textWight textColor">{formData.projectLength.time1}  {formData.projectLength.category1}  {formData.projectLength.time2}  {formData.projectLength.category2}</text>

                                <text className="blackColor mt-2">Offers sent : </text>
                                <text className=" textWight textColor">1 - 10</text>
                            </div>
                            <div className="card-body " style={{ borderBottom: "1px solid #e9e9e9" }}>

                                <Button className="buttonShare mb-2" img={true} text={"Flag Job"} icon={<FlagIcon />} />
                                <Button className="buttonShare" img={true} text={"Share Job"} icon={<Share />} />

                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </div >
    )
}


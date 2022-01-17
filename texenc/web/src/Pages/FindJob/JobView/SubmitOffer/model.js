import React, { useEffect, useState } from 'react'

import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'

import { useHistory } from "react-router-dom";
import { Button, InputField, DropDown, Tag, Upload, CheckBox } from "../../../../Imports/genericComponents"
import { info, txt, xlsx, pptx, gig1, link, doc, dragImage, projectbutton, pdf } from "../../../../Imports/images"

import CloseIcon from '@material-ui/icons/Close';

import api from "../../../../services/api"
import Tooltip from '@mui/material/Tooltip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {
  withStyles
} from "@material-ui/core/styles";
import { setUserData } from '../../../../Redux/Slices/userSlice';
import { dividerClasses } from '@mui/material';
let tipText = "Tip Title here\n Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, \nsed do eiusmod tempor incididunt.\n500 word limit,  "
const Model = (props) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const [formData, setFormData] = useState({
    "sellerId": "",
    "jobId": "",
    "relatedService": "",
    "price": { "amount": null, "currency": "Dollar" },
    "completionTime": {
      "time1": null,
      "time2": null,
      "category1": "",
      "category2": "",
    },
    "coverLetter": "",
    "attachments": [],


  })
  let multiplePhoto = [formData.attachments]
  useEffect(() => {
    let user = window.localStorage.getItem("user");
    setUser(JSON.parse(user))
    setFormData({ ...formData, sellerId: JSON.parse(user).id, jobId: props.jobId })
  }, [])


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
  return (
    <>
      <Modal title="Submit Offer" visible={props.visible}
        width={900}
        onCancel={props.handleCancel}
        footer={[
          <div className="d-flex align-items-center  p-3">
            <CheckBox text={"Save Draft"} />
            <div className="d-flex ml-auto">
              <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
              <Button text={"Submit Offer"} filled={true} onClick={() => props.handleOk(formData)} />
            </div>
          </div>
        ]}
      >

        <div >

          <h6>Related Service</h6>
          <DropDown type="simple" placeHolder={"Select Your Related Service"} value={formData.relatedService} values={category} onChange={e => {
            setFormData({ ...formData, relatedService: e })
          }} />
          <div className="d-flex mt-3 align-items-center">
            <div className="width50 pr-1">
              <h6>Price Quate</h6>
              <div>
                <DropDown type="simple" multiple={false} values={price} placeHolder={"Price"} inputValue={formData.price.amount} value={formData.price.currency} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, price: { "amount": e, "currency": formData.price.currency } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, price: { "amount": formData.price.amount, "currency": e } }) }} />
              </div>
            </div>
            <div className="width50 pl-1">

              <h6>Completion Time</h6>
              <div className="d-flex align-items-center">
                <div className="w-100 pr-1">

                  <DropDown type="simple" values={time} placeHolder={"Time"} inputValue={formData.completionTime.time1} value={formData.completionTime.category1} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, completionTime: { ...formData.completionTime, time1: e } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, completionTime: { ...formData.completionTime, category1: e } }) }} />
                </div>
                <div className="w-100 pl-1">
                  <DropDown type="simple" values={time} placeHolder={"Time"} inputValue={formData.completionTime.time2} value={formData.completionTime.category2} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { setFormData({ ...formData, completionTime: { ...formData.completionTime, time2: e } }) }} onChangeSelectore={(e) => { setFormData({ ...formData, completionTime: { ...formData.completionTime, category2: e } }) }} />
                </div>
              </div>

            </div>
          </div>
          <div className="mt-2">
            <h6>Cover letter</h6>
            <InputField row={10} placeHolder={"Write Cover letter here"} value={formData.coverLetter} onChange={(e) => { setFormData({ ...formData, coverLetter: e }) }} />
          </div>
          <div className="mt-3">
            <ul class="list-group ">

              <div className="row d-flex" >
                <div className="d-flex">
                  <h6 className="">Attachments</h6><p className="textColor pl-2">optional maximum 10  </p></div>
                <p className="ml-auto textColor ">0 of 300Mb used</p>


              </div>
              <div className="  mr-5 ml-5"  >
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
                      return (<div >
                        {src.type == "doc" && <div className="row"> <img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                        {src.type == "docx" && <div className="row"><img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                        {src.type == "ppt" && <div className="row"> <img src={pptx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                        {src.type == "txt" && <div className="row"> <img src={txt} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                        {src.type == "xlsx" && <div className="row"><img src={xlsx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                        {src.type == "pdf" && <div className="row"><img src={pdf} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                      </div>)
                    }


                  })}
                </ul>


              </div>
            </ul>
          </div>


        </div >

      </Modal>
    </>
  )
}

export default Model

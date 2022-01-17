import { React, useState } from 'react'
import './availbility.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, InputField, DropDown } from "../../../Imports/genericComponents"
import { info } from "../../../Imports/images"
// import { Steps, Popover } from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import {
    withStyles
} from "@material-ui/core/styles";
export default function Overview(props) {
    const time = [{
        "value": "per Day",
        "label": "per Day",
    },
    {
        "value": "per Week",
        "label": "per Week",
    },
    {
        "value": "per Month",
        "label": "per Month",
    }, {
        "value": "per Year",
        "label": "per Year",
    }


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

                <div className=" d-flex  mt-3" >
                    <h6 className=" pr-3 mt-3  text-right w-25">Service Type</h6>
                    <div style={{ width: "70%" }}>
                        <FormControl component="fieldset" className="w-100">
                            <RadioGroup
                                onChange={(e) => { props.setFormData({ ...props.formData, type: e.target.value }) }}
                                aria-label="gender"
                                // defaultValue="individual"
                                value={props.formData.type ? props.formData.type : undefined}
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
                <div className=" d-flex align-items-center  mt-3 mb-3" >
                    <h6 className="pr-3  text-right w-25">Total No. Hours</h6>
                    <div style={{ width: "70%" }}>
                        <DropDown values={time} inputValue={props.formData.totalHours.hours} value={props.formData.totalHours.hoursPer} placeHolder={"hours"} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setFormData({ ...props.formData, totalHours: { ...props.formData.totalHours, hours: e } }) }} onChangeSelectore={(e) => { props.setFormData({ ...props.formData, totalHours: { ...props.formData.totalHours, hoursPer: e } }) }} /></div>
                    <div className="imginfo">
                        <TooltipCust title={<span style={{ whiteSpace: 'pre-line' }}>{tipText}</span>} arrow placement="bottom-start">
                            <img src={info} />
                        </TooltipCust>
                    </div>
                </div>
                <div className=" d-flex  mt-3 " >
                    <h6 className=" pr-3 mt-3  text-right w-25">Service Description</h6>
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
        </div>
    )
}

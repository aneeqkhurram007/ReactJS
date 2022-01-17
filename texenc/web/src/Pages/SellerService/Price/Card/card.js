import { React, useState } from 'react'
import './card.css';
import { InputField, DropDown, Button, CheckBox } from "../../../../Imports/genericComponents"
import { Divider } from 'antd';
import Blur from 'react-css-blur'

import {
    PlusOutlined,

} from '@ant-design/icons';
import Model from "./model"
import { Checkbox } from '@mui/material';
import { CompassCalibrationOutlined } from '@material-ui/icons';
export default function Overview(props) {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(0)
    const time = [{
        "value": "Days",
        "label": "Days",
    },
    {
        "value": "Months",
        "label": "Months",
    }, {
        "value": "Years",
        "label": "Years",
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
    return (
        <div className="card ">
            <Model visible={show} deliverable={props.deliverable} handleCancel={() => setShow(false)} handleOk={(e) => {
                setShow(false)
                props.setDeliverable(e)
            }} setDeliverable={props.setDeliverable} />
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><div className="row d-flex align-items-center " >
                    <img src={props.img} />
                    <p className=" ml-1 mt-auto font-weight-bold">{props.packageName}</p>

                </div></li>
                <Blur radius={props.radius}>
                    <li class="list-group-item lightbackground">

                        <InputField classNamemain="mb-1" disabled={props.packagecheck} value={props.package.name} placeHolder={"Gig Name Here"} className={"mt-2 whitebackGround"} onChange={(e) => { props.setPackage({ ...props.package, name: e }) }} />
                        <InputField classNamemain="mb-1" disabled={props.packagecheck} value={props.package.description} row={7} className={"mt-2 whitebackGround"} placeHolder={"Describe the Gig"} onChange={(e) => { props.setPackage({ ...props.package, description: e }) }} />
                        <DropDown disabled={props.packagecheck} values={time} placeHolder={"Delivery Time"} inputValue={props.package.time} value={props.package.timeper} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setPackage({ ...props.package, time: e }) }} onChangeSelectore={(e) => { props.setPackage({ ...props.package, timeper: e }) }} />
                        {props.deliverable.map((deliver) => {

                            return (<>

                                <Divider className=" " />
                                <div className="d-flex">
                                    <p>{deliver.name}</p>

                                    <CheckBox className="ml-auto" checked={deliver.checked} onChange={(e) => {
                                        let arr = props.deliverable
                                        let index = arr.indexOf(deliver)
                                        arr[index] = { "name": deliver.name, "checked": e }
                                        console.log(arr)
                                        props.setCheck([...arr])

                                    }} />
                                </div>
                            </>
                            )

                        })}
                        <Divider className=" mt-2 " />
                        <Button className="color justify-content-center whitebackGround"
                            onClick={() => { setShow(true) }}
                            loading={props.packagecheck}
                            filled={false}
                            img={true}
                            icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                            text={"Add Deliverable"} />
                        <Divider />
                        <DropDown disabled={props.packagecheck} values={price} placeHolder={"Price"} inputValue={props.package.price} value={props.package.currency} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { props.setPackage({ ...props.package, price: e }) }} onChangeSelectore={(e) => { props.setPackage({ ...props.package, currency: e }) }} />

                    </li>
                </Blur>
            </ul>
        </div>
    )
}

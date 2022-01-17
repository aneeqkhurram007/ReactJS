import { React, useState } from 'react'
import './card.css';
import { InputField, DropDown, Button, CheckBox } from "../../../../Imports/genericComponents"
import { Divider } from 'antd';
import {
    PlusOutlined,

} from '@ant-design/icons';
import Model from "./model"
import { Checkbox } from '@mui/material';
export default function Overview(props) {
    const [show, setShow] = useState(false)
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
            }
            } setDeliverable={props.setDeliverable} />
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><div className="row d-flex align-items-center " >
                    <img src={props.img} />
                    <p className=" ml-1 mt-auto font-weight-bold">{props.package}</p>

                </div></li>
                <li class="list-group-item lightbackground">
                    <InputField placeHolder={"Gig Name Here"} className={"mt-2 whitebackGround"} />
                    <InputField row={7} className={"mt-2 whitebackGround"} placeHolder={"Describe the Gig"} />
                    <DropDown values={time} placeHolder={"Delivery Time"} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { console.log(e) }} onChangeSelectore={(e) => { console.log(e) }} />
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
                        filled={false}
                        img={true}
                        icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                        text={"Add Deliverable"} />
                    <Divider />
                    <DropDown values={price} placeHolder={"Price"} inside={true} className={"mt-2 whitebackGround"} onChange={(e) => { console.log(e) }} onChangeSelectore={(e) => { console.log(e) }} />

                </li>
            </ul>
        </div>
    )
}

import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import {
    PlusOutlined,
} from '@ant-design/icons';
import DeleteIcon from '@material-ui/icons/Delete';

import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { DropDown, Button, InputField } from '../../../../Imports/genericComponents';
import { SliderValueLabel } from '@mui/material';
const Model = (props) => {
    const deliverable = {
        "name": "",
        "checked": false
    }
    const [value, setValue] = useState("")
    const [allDeliverble, setAlldeliverable] = useState(props.deliverable)

    return (
        <>
            <Modal title="Add Deliverables" visible={props.visible}
                width={720}
                onCancel={props.handleCancel}
                footer={[
                    <row className="d-flex buttonContainer p-3">
                        {/* {JSON.stringify(props)} */}
                        <Button key="back" text={"Cancel"} filled={false} onClick={() => props.handleCancel} className="mr-2" />
                        <Button text={"Save Deliverables"} filled={true} onClick={() => props.handleOk(allDeliverble)} /></row>,
                ]}
            >

                <div className="card" >
                    <ul className="list-group list-group-flush">
                        <li className="card-body list-group-item">
                            Deliverables

                    </li>
                        {allDeliverble.map((deliverable) => {
                            return (
                                <li className="card-body list-group-item">
                                    {/* <div className="row"> */}
                                    {deliverable.name == "" ?
                                        <div className="rowDiv">
                                            <InputField value={value} placeHolder={"Name"} className="w-75" onChange={(e) => { setValue(e) }} />
                                            <div className="box ml-auto" ><DoneIcon className="primaryColor"
                                                onClick={() => {
                                                    let arr = allDeliverble
                                                    let index = arr.indexOf(deliverable)
                                                    arr[index] = { "name": value, checked: true }
                                                    setAlldeliverable([...arr])
                                                    setValue("")
                                                }}


                                            /></div>
                                            <div className="box ml-1" ><CloseIcon className="color9e"

                                                onClick={() => {
                                                    let array = allDeliverble; // make a separate copy of the array
                                                    let index = array.indexOf(deliverable)
                                                    if (index !== -1) {
                                                        array.splice(index, 1);
                                                        setAlldeliverable([...array])

                                                    }
                                                }}

                                            /></div>
                                        </div>
                                        : <div className="rowDiv">
                                            <div><h6> {deliverable.name}</h6></div>
                                            <div className="box ml-auto" ><DeleteIcon className="color9e"

                                                onClick={() => {
                                                    let array = allDeliverble; // make a separate copy of the array
                                                    let index = array.indexOf(deliverable)
                                                    if (index !== -1) {
                                                        array.splice(index, 1);
                                                        setAlldeliverable([...array])

                                                    }
                                                }}

                                            /></div>
                                            <div></div>
                                        </div>}
                                    {/* </div> */}
                                </li>)
                        })}
                        <li className="list-group-item">
                            <Button className="buttonExperiance"
                                onClick={() => {
                                    setAlldeliverable([...allDeliverble, deliverable])

                                }}
                                filled={false}
                                img={true}
                                icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                                text={"Add Deliverable"} />
                        </li>
                    </ul>
                </div>
            </Modal>
        </>
    )
}

export default Model

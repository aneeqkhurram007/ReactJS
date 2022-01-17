import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import { fb, twitter, linkdin, insta, pintrest, tiktok } from "../../../../Imports/images"
import { InputField, DropDown, Button } from '../../../../Imports/genericComponents';
const Model = (props) => {
  const skill = [
    {
      value: "react",
      label: "React"
    },
    {
      value: "node",
      label: "Node"
    },
    {
      value: "mern",
      label: "MERN"
    }
  ]

  return (
    <>
      <Modal title="Edit Links" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >
        <div className="card" >
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={fb} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.fb} placeHolder={"url"} /></div></li>
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={twitter} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.twitter} placeHolder={"url"} /></div></li>
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={linkdin} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.linkdin} placeHolder={"url"} /></div></li>
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={insta} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.insta} placeHolder={"url"} /></div></li>
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={pintrest} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.printrest} placeHolder={"url"} /></div></li>
            <li className="list-group-item d-flex "><div className="p-2"><img className="imageSize" src={tiktok} /></div><div className="textBoxWidth"><InputField value={props.socialMediaUrls.tiktok} placeHolder={"url"} /></div></li>

          </ul>
        </div>

      </Modal>
    </>
  )
}

export default Model

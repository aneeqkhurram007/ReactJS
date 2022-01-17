import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import { InputField, Button } from "../../../../../Imports/genericComponents"
const Model = (props) => {


  return (
    <>
      <Modal title="Add Project" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h6>Project Title</h6>
        <InputField value={props.project.title} placeHolder={"Project Title"} onChange={(e) => props.setProject({ ...props.project, title: e })} />
        <br />
        <h6>Project URL</h6>
        <InputField placeHolder={"Project URL"} value={props.project.url} onChange={(e) => props.setProject({ ...props.project, url: e })} />
        <br />
        <div className="d-flex " >
          <h6>Description</h6>
          <p className="textColor pl-2">optional</p>
        </div>
        <InputField placeHolder={"Project URL"} row={8} value={props.project.description} onChange={(e) => props.setProject({ ...props.project, description: e })} />
      </Modal>
    </>
  )
}

export default Model

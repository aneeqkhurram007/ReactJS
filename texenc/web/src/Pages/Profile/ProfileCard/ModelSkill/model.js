import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'

import { DropDown, Button } from '../../../../Imports/genericComponents';
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
      <Modal title="Edit Category" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h6>Categories</h6>
        <DropDown placeHolder={"Select Category"} value={props.skill} onChange={(e) => (console.log(e))} values={skill} multiple={true} />
      </Modal>
    </>
  )
}

export default Model

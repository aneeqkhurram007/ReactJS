import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'

import { DropDown, Button, InputField } from '../../../../Imports/genericComponents';
const Model = (props) => {

  return (
    <>
      <Modal title="Edit Contact Detail" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h5 className="mb-3">Contact Number</h5>
        <InputField placeHolder={"Contact Number"} value={props.number} onChange={props.onChange} />
        <h5 className="mb-3 mt-2">Email</h5>
        <InputField placeHolder={"Email"} value={props.email} onChange={props.onChange} />

      </Modal>
    </>
  )
}

export default Model

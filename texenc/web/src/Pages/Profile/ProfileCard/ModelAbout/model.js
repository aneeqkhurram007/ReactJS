import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'

import { Button, InputField } from '../../../../Imports/genericComponents';
const Model = (props) => {

  return (
    <>
      <Modal title="Edit About" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h5 className="mb-3">About</h5>
        <InputField placeHolder={"some description here"} value={props.about} onChange={(e) => { console.log(e) }} row={16} />

      </Modal>
    </>
  )
}

export default Model

import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import { InputField, Button, CheckBox, DropDown } from "../../../../../Imports/genericComponents"
const Model = (props) => {
  const month = [
    {
      "value": "Jan",
      "label": "January"
    },
    {
      "value": "Feb",
      "label": "February"
    },
    {
      "value": "Mar",
      "label": "March"
    },
    {
      "value": "Apr",
      "label": "April"
    },
    {
      "value": "May",
      "label": "May"
    },
    {
      "value": "Jun",
      "label": "June"
    },
    {
      "value": "Jul",
      "label": "July"
    },
    {
      "value": "Aug",
      "label": "August"
    },
    {
      "value": "Sep",
      "label": "September"
    },
    {
      "value": "Oct",
      "label": "October"
    },
    {
      "value": "Nov",
      "label": "November"
    },
    {
      "value": "Dec",
      "label": "December"
    }
  ]



  const iamyear = () => {
    let year = []

    for (var i = 1950; i < 2022; i++) {
      year.push({
        "value": i,
        "label": i
      })

    }

    return year;
  }

  return (
    <>
      <Modal title="Add Education" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >
        <div className="row">
          <div className="col-6">
            <h6>Institute</h6>
            <InputField value={props.education.institute} placeHolder={"Name"} onChange={(e) => props.setEducation({ ...props.education, institute: e })} />
          </div>
          <div className="col-6">
            <h6>Degree</h6>
            <InputField value={props.education.degree} placeHolder={"Title"} onChange={(e) => props.setEducation({ ...props.education, degree: e })} />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <h6>Start Date</h6>
            <div className="row">
              <div className="col-6">
                <DropDown placeHolder={"Month"} values={month} value={props.education.startDate} onChange={(e) => props.setEducation({ ...props.education, startDate: e })} />
              </div>
              <div className="col-6">
                <DropDown placeHolder={"Year"} values={iamyear()} value={props.education.startYear} onChange={(e) => props.setEducation({ ...props.education, startYear: e })} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <h6>End Date</h6>
            <div className="row">
              <div className="col-6">
                <DropDown placeHolder={"Month"} values={month} value={props.education.endDate} onChange={(e) => {
                  props.setEducation({ ...props.education, endDate: e })
                  console.log(e)
                }} />
              </div>
              <div className="col-6">
                <DropDown placeHolder={"Year"} values={iamyear()} value={props.education.endYear} onChange={(e) => props.setEducation({ ...props.education, endYear: e })} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Model

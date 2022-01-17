import React, { useState, memo } from 'react'
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
      <Modal title="Add Experience" visible={props.visible}
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
            <h6>Job Title</h6>
            <InputField value={props.experience.title} placeHolder={"Title"} onChange={(e) => props.setExperience({ ...props.experience, title: e })} />
          </div>
          <div className="col-6">
            <h6>Company</h6>
            <InputField value={props.experience.company} placeHolder={"Name"} onChange={(e) => props.setExperience({ ...props.experience, company: e })} />
          </div>
        </div>
        <br />
        <CheckBox text={"Currently working here"} checked={props.experience.current} onChange={(e) => props.setExperience({ ...props.experience, current: e })} />
        <br />
        <div className="row">
          <div className="col-6">
            <h6>Start Date</h6>
            <div className="row">
              <div className="col-6">
                <DropDown placeHolder={"Month"} values={month} value={props.experience.startDate} onChange={(e) => props.setExperience({ ...props.experience, startDate: e })} />
              </div>
              <div className="col-6">
                <DropDown placeHolder={"Year"} values={iamyear()} value={props.experience.startYear} onChange={(e) => props.setExperience({ ...props.experience, startYear: e })} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <h6>End Date</h6>
            <div className="row">
              <div className="col-6">
                <DropDown disabled={props.experience.current} placeHolder={"Month"} values={month} value={props.experience.endDate} onChange={(e) => {
                  props.setExperience({ ...props.experience, endDate: e })
                  console.log(e)
                }} />
              </div>
              <div className="col-6">
                <DropDown disabled={props.experience.current} placeHolder={"Year"} values={iamyear()} value={props.experience.endYear} onChange={(e) => props.setExperience({ ...props.experience, endYear: e })} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex " >
          <h6>Description</h6>
          <p className="textColor pl-2">optional</p>
        </div>
        <InputField placeHolder={"description"} value={props.experience.description} row={8} onChange={(e) => props.setExperience({ ...props.experience, description: e })} />
      </Modal>
    </>
  )
}

export default Model

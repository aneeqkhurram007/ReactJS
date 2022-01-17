import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import {
  PlusOutlined,
  DeleteFilled,
  EditOutlined
} from '@ant-design/icons';
import { InputField, Button, CheckBox, DropDown } from '../../../../Imports/genericComponents';
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
      <Modal title="Edit professional Details" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h6 className="font-weight-bold">Experience</h6>
        <div>
          {
            props.experience.map((experience, key) => {
              return (
                <div className="mb-2 mt-2">

                  <h6 style={{ borderBottom: "mb-2 1px solid black" }}>
                    JOB NO {key + 1}
                  </h6>
                  <div className="row">
                    <div className="col-6">
                      <h6>Job Title</h6>
                      <InputField value={experience.title} placeHolder={"Title"} />
                    </div>
                    <div className="col-6">
                      <h6>Company</h6>
                      <InputField value={experience.company} placeHolder={"Name"} />
                    </div>
                  </div>
                  <br />
                  <CheckBox text={"Currently working here"} value={experience.current} />
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <h6>Start Date</h6>
                      <div className="row">
                        <div className="col-6">
                          <DropDown placeHolder={"Month"} values={month} value={experience.startDate} />
                        </div>
                        <div className="col-6">
                          <DropDown placeHolder={"Year"} values={iamyear()} value={experience.startYear} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <h6>End Date</h6>
                      <div className="row">
                        <div className="col-6">
                          <DropDown disabled={experience.current} placeHolder={"Month"} values={month} value={experience.endDate} />
                        </div>
                        <div className="col-6">
                          <DropDown disabled={experience.current} placeHolder={"Year"} values={iamyear()} value={experience.endYear} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  {/* <div className="d-flex " >
                    <h6>Description</h6>
                    <p className="textColor pl-2">optional</p>
                  </div> */}
                  {/* <InputField placeHolder={"description"} value={experience.description} row={8} /> */}
                </div>)
            })
          }
        </div>
        <h6 className="font-weight-bold">Eduction</h6>
        <div>
          {
            props.education.map((education, key) => {
              return (
                <div className="mb-2 mt-2">
                  <h6 style={{ borderBottom: "mb-2 1px solid black" }}>
                    Education {key + 1}
                  </h6>
                  <div className="row">
                    <div className="col-6">
                      <h6>Institute</h6>
                      <InputField value={education.institute} placeHolder={"Name"} />
                    </div>
                    <div className="col-6">
                      <h6>Degree</h6>
                      <InputField value={education.degree} placeHolder={"Title"} />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <h6>Start Date</h6>
                      <div className="row">
                        <div className="col-6">
                          <DropDown placeHolder={"Month"} values={month} value={education.startDate} />
                        </div>
                        <div className="col-6">
                          <DropDown placeHolder={"Year"} values={iamyear()} value={education.startYear} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <h6>End Date</h6>
                      <div className="row">
                        <div className="col-6">
                          <DropDown placeHolder={"Month"} values={month} value={education.endDate} />
                        </div>
                        <div className="col-6">
                          <DropDown placeHolder={"Year"} values={iamyear()} value={education.endYear} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
            })
          }
        </div>
      </Modal>
    </>
  )
}

export default Model

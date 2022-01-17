import React, { useState } from 'react'
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './model.css'
import {
  PlusOutlined,
  DeleteFilled,
  EditOutlined
} from '@ant-design/icons';
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
  const Language = [
    {
      "value": "English",
      "label": "English"
    },
    {
      "value": "Urdu",
      "label": "Urdu"
    },
    {
      "value": "French",
      "label": "French"
    },
    {
      "value": "Dutch",
      "label": "Dutch"
    },
    {
      "value": "Chinese",
      "label": "Chinese"
    },

  ]
  const Experiance = [
    {
      "value": "Expert",
      "label": "Expert"
    },
    {
      "value": "Native",
      "label": "Native"
    },

  ]

  return (
    <>
      <Modal title="Edit Language" visible={props.visible}
        width={720}
        onCancel={props.handleCancel}
        footer={[
          <row className="d-flex buttonContainer p-3">
            {/* {JSON.stringify(props)} */}
            <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
            <Button text={"Save"} filled={true} onClick={props.handleOk} /></row>,
        ]}
      >

        <h6>Language</h6>
        <div className="card" >
          <ul className="list-group list-group-flush">
            {props.language.map((languagee) => {
              return (<li className="card-body list-group-item">
                <div className="row">
                  <div className="col-4">

                    <DropDown value={languagee.language} placeHolder={"Language"} values={Language} onChange={
                      (e) => {
                        console.log(e)
                        // let array = props.formData.language
                        // let index = props.formData.language.indexOf(languagee);
                        // // console.log(index)
                        // if (index > -1) {
                        //   array[index] = { "level": languagee.level, "name": e }
                        //   // console.log(array)
                        //   // setAlllanguage([...array])
                        //   props.setFormData({ ...props.formData, language: [...array] })
                        // }
                      }


                    } />
                  </div>
                  <div className="col-4">
                    <DropDown value={languagee.experiance} placeHolder={"Experiance"} values={Experiance} onChange={(e) => {
                      // let array = props.formData.language
                      // let index = props.formData.language.indexOf(languagee);
                      // console.log(index)
                      // if (index > -1) {
                      // array[index] = { "name": languagee.name, "level": e }
                      // console.log(array)
                      // props.setFormData({ ...props.formData, language: [...array] })
                      //  setAlllanguage([...array])
                      // }


                    }} />

                  </div>
                  <div className="col-2" />
                  <div className="col-2 pt-3 pr-1 rightIcon" >
                    <DeleteFilled className="icon icondelet"
                    // onClick={() => {
                    //   let array = props.formData.language; // make a separate copy of the array
                    //   let index = array.indexOf(languagee)
                    //   if (index !== -1) {
                    //     array.splice(index, 1);
                    //     props.setFormData({ ...props.formData, language: [...array] })
                    //     //    setAlllanguage([...array]);
                    //   }
                    // }}

                    />
                  </div>
                </div>
              </li>)
            })}
            <li className="list-group-item">
              <Button className="buttonExperiance"
                onClick={() => {
                  // props.setFormData({ ...props.formData, language: [...props.formData.language, language] })

                }}
                filled={false}
                img={true}
                icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                text={"Add Language"} />
            </li>
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default Model

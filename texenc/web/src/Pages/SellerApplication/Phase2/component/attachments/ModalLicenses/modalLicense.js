import React, { useState } from 'react'
import { Form, Modal } from 'antd';
import { InputField, Button, FileUploaderArea, CheckBox, DropDown } from '../../../../../../Imports/genericComponents';

const ModalLicense = (props) => {
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

    // const [isDisable, setIsDisable] = useState(null)


    return (
        <div>
            <Modal title="Add License or Certification" visible={props.visible}
                onCancel={props.onCancel}
                onOk={props.onOk}
                footer={[
                    <row className="d-flex buttonContainer p-3">
                        <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
                        <Button text={"Save"} filled={true} onClick={props.handleOkLicenseModal} /></row>,
                ]}
            >
                <div className="suppMaterialModal">
                    <form>
                        <h6>Name</h6>
                        <InputField
                            type={"simple"}
                            onChange={(e) => props.setLicenseObj({ ...props.licenseObj, name: e })}
                            value={props.licenseObj.name}
                        />
                        <br />
                        <h6>Issuing Organization</h6>
                        <InputField
                            type={"simple"}
                            onChange={
                                (e) => props.setLicenseObj({ ...props.licenseObj, organization: e })}
                            value={props.licenseObj.organization}
                        />
                        <br />
                        <CheckBox
                            text={"This credentials does not expire"}
                            checked={props.licenseObj.current}
                            onChange={(e) => props.setLicenseObj({ ...props.licenseObj, current: e })}
                        />
                        <br />
                        <h6>Start Date</h6>
                        <div className="row">
                            <div className="col-3">

                                <DropDown
                                    placeHolder={"Month"}
                                    values={month}
                                    value={props.licenseObj.startMonth}
                                    onChange={(e) => props.setLicenseObj({ ...props.licenseObj, startMonth: e })}
                                // disabled={isDisable}
                                />
                            </div>
                            <div className="col-3">
                                <DropDown
                                    placeHolder={"Year"}
                                    values={iamyear()}
                                    value={props.licenseObj.startYear}
                                    onChange={(e) => props.setLicenseObj({ ...props.licenseObj, startYear: e })}
                                // disabled={isDisable}
                                />
                            </div>

                            <div className="col-3">
                                <DropDown
                                    placeHolder={"Month"}
                                    values={month}
                                    value={props.licenseObj.endMonth}
                                    onChange={(e) => props.setLicenseObj({ ...props.licenseObj, endMonth: e })}
                                    disabled={props.licenseObj.current}
                                />
                            </div>
                            <div className="col-3">
                                <DropDown
                                    placeHolder={"Year"}
                                    values={iamyear()}
                                    value={props.licenseObj.endYear}
                                    onChange={(e) => props.setLicenseObj({ ...props.licenseObj, endYear: e })}
                                    disabled={props.licenseObj.current}
                                />
                            </div>
                        </div>
                        <h6>Credential URL</h6>
                        <InputField
                            type={"simple"}
                            onChange={
                                (e) => props.setLicenseObj({ ...props.licenseObj, credent: e })}
                            value={props.licenseObj.credent}
                        />
                    </form>
                </div>
            </Modal >
        </div >
    )
}

export default ModalLicense

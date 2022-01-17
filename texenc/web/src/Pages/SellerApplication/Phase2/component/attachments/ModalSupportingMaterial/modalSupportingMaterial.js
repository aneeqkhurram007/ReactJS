import React from 'react'
import { InputField, Button, FileUploaderArea, Upload } from '../../../../../../Imports/genericComponents'
import { Form, Modal } from 'antd';




const ModalSupportingMaterial = (props) => {

    const handleFile = (e) => {
        // props.setPhase2Data({ ...props.phase2Data, files: [...props.phase2Data.files, e] })
        // setfile(e)
        console.log("Handle File modal", e);

        props.setSupportingObj({ ...props.supportingObj, file: e })
    }


    return (
        <div>
            <Modal title="Add Supporting Material"
                visible={props.visible}
                onCancel={props.handleCancel}
                onOk={props.onOk}
                footer={[
                    <row className="d-flex buttonContainer p-3">
                        <Button key="back" text={"Cancel"} filled={false} onClick={props.handleCancel} className="mr-2" />
                        <Button text={"Save"} filled={true} onClick={props.handleOkSuppModal} /></row>,
                ]}
            >
                <form>
                    <h5>Name</h5>
                    <InputField
                        type={"simple"}
                        onChange={(e) => props.setSupportingObj({ ...props.supportingObj, name: e })}
                    />


                    <h5>Attachments</h5>
                    <Upload
                        uploadArea={true}
                        files={true}
                        getUrl={(e) => handleFile(e)}
                    />

                </form>
            </Modal>
        </div>
    )
}

export default ModalSupportingMaterial

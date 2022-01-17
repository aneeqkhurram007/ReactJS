import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import { Button } from './../Imports/genericComponents'
// antd
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { imgUpload, fileUpload } from "../Imports/images"
const { Dragger } = Upload;

const S3_BUCKET = 'texenc-files';
const REGION = 'us-east-2';
const ACCESS_KEY = 'AKIA3GXWTNTD2QNH7ZB6';
const SECRET_ACCESS_KEY = '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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = (props) => {

    const [selectedFile, setSelectedFile] = useState();

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => props.getUrl({ name: file.name, size: file.size, AWSLink: data.location }))
            .catch(err => console.error(err))
        // uploadFile(file, config)
        //     .then(data => setSelectedFile({ ...selectedFile, url: data.location }))
        //     .catch(err => console.error(err))
    }
    const handleUploadArea = async (file) => {
        uploadFile(file, config)
            .then(data => {
                let type = data.location.split(".").reverse()[0]
                props.getUrl({ src: data.location, type: type, key: data.key, name: file.name, size: file.size })
            })
            .catch(err => console.error(err))
    }


    return (
        <>
            {props.uploadArea ?
                <div className={`${props.className}`}>

                    <Dragger multiple={props.multiple} accept={props.both ? ".png,.jpg,.tiff,.gif,.mp4,.mov,.wmv,.avi,.webm,.mkv .docx,.doc,.txt,.xlsx,.ppt" : props.images ? ".png,.jpg,.tiff,.gif,.mp4,.mov,.wmv,.avi,.webm,.mkv" : ".docx,.doc,.txt,.xlsx,.ppt"} showUploadList={false}
                        // onChange={(e) => {
                        //     handleUpload(e.file)

                        //     console.log(e.file)
                        // }}
                        action={(e) => {
                            handleUploadArea(e)
                            // setFileList(e);
                        }}
                        listType="picture-card"
                    // fileList={fileList}
                    >
                        {/* // onChange={onChange}> */}
                        <div className="d-flex">

                            <img style={{ width: "50px", height: "50px", }} className="mt-auto mb-auto ml-4" src={props.images ? imgUpload : fileUpload} alt="urlCloud" />
                            <div className="ml-4">
                                {props.both ? <>
                                    <h6 className="ant-upload-text textColor text-left">Drop Images/ Videos here or click Browse to Upload</h6>
                                    <p className="ant-upload-text textColor text-left">Drop Files here or click Browse to Upload</p>
                                    <p className="ant-upload-hint text-left">PNG, JPEG, TIFF,  and GIF Image formats with aspect ratio of 3:2</p>
                                    <p className="ant-upload-hint text-left">MP4, MOV, WMV, AVI, WEBM, and MKV video formats with aspect ratio of 3:2</p>
                                    <p className="ant-upload-hint text-left">PDF, TXT, DOCX, XLSX, and PPTX formats</p>
                                </>

                                    :
                                    <>

                                        {props.images && <h6 className="ant-upload-text textColor text-left">Drop Images/ Videos here or click Browse to Upload</h6>}
                                        {props.files && <p className="ant-upload-text textColor text-left">Drop Files here or click Browse to Upload</p>}
                                        {props.images && <p className="ant-upload-hint text-left">PNG, JPEG, TIFF,  and GIF Image formats with aspect ratio of 3:2</p>}
                                        {props.images && <p className="ant-upload-hint text-left">MP4, MOV, WMV, AVI, WEBM, and MKV video formats with aspect ratio of 3:2</p>}
                                        {props.files && <p className="ant-upload-hint text-left">PDF, TXT, DOCX, XLSX, and PPTX formats</p>}
                                    </>

                                }
                            </div>
                            <Button
                                className="ml-auto mr-3 mt-auto mb-auto"
                                style={{ width: "71px", height: "30px" }}
                                onClick={() => handleUploadArea(selectedFile)}
                                text={"Browse"}
                                classname={"browsebtn"}
                            />
                        </div>

                    </Dragger>

                </div> :
                <>
                    {console.log("file", selectedFile)}
                    <input type="file" onChange={handleFileInput} />
                    <Button
                        onClick={() => handleUpload(selectedFile)}
                        text={"Browse"}
                        classname={"browsebtn"}
                    />
                </>

            }
            {/* {console.log("dragger file", selectedFile)}
            {
                <>
                    <Dragger {...prop}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </>
            } */}
        </>
    )
}

export default UploadImageToS3WithReactS3;

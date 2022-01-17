import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import './fileUploaderArea.css'
import { urlCloud } from './../../Imports/images'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


const FileUploaderArea = (props) => {

    const { Dragger } = Upload;
    const prop = {
        name: 'file',
        // multiple: props.multiple ? props.multiple : true,
        multiple: props.multiple,
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    return (
        <>

            <Dragger {...prop}>
                <div>
                    <img src={urlCloud} alt="urlCloud" />
                    <div>
                        <p className="ant-upload-text">Drop Images/ Videos/ Files here or click Browse to Upload</p>
                        <p className="ant-upload-hint">PNG, JPEG, TIFF,  or GIF Image formats</p>
                        <p className="ant-upload-hint">MP4, MOV, WMV, AVI, WEBM, or MKV video formats</p>
                        <p className="ant-upload-hint">PDF, TXT, DOCX, XLSX, and PPTX formats</p>
                    </div>
                </div>

            </Dragger>

        </>
    )
}

export default FileUploaderArea

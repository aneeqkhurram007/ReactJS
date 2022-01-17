import React, { useState } from 'react'
import { Button, DropDown, PhaseVideoCard, Navbar, FileUploaderArea, InputField, Upload } from '../../../../../Imports/genericComponents'
import UploadedFile from './components/uploadedFile/uploadedFile'
import { urlIcon, pdfIcon, institute, equalIcon } from './../../../../../Imports/images'
import './attachments.css'
import 'react-responsive-modal/styles.css';
import ModalLicense from './ModalLicenses/modalLicense'
import ModalSupportingMaterial from './ModalSupportingMaterial/modalSupportingMaterial'
import { PlusOutlined, DeleteFilled, EditOutlined } from '@ant-design/icons';


const Attachments = (props) => {
    //Modal
    const [modalLicense, setModalLicense] = useState(false);
    const [modalSupporting, setModalSupporting] = useState(false)
    const [file, setfile] = useState({
        name: "",
        size: ""
    })
    const [urlStr, setUrlStr] = useState("")
    const [suppUrlStr, setsuppUrlStr] = useState("")
    const [licenseObj, setLicenseObj] = useState({
        "name": "",
        "organization": "",
        "startMonth": "",
        "endMonth": "",
        "startYear": "",
        "endYear": "",
        "credent": "",
        "current": false,
    })

    const [supportingObj, setSupportingObj] = useState({
        name: '',
        file: ''
    })

    const [edit, setEdit] = useState(false)
    const [index, setIndex] = useState(false)

    const handleFile = (e) => {
        props.setPhase2Data({ ...props.phase2Data, files: [...props.phase2Data.files, e] })
        // setfile(e)
        console.log("Handle File", e);
    }

    //Handle Modals Ok
    const handleOkLicenseModal = (e) => {
        if (edit) {
            setModalLicense(false)
            let array = props.phase2Data.licenses;

            array[index] = licenseObj;
            props.setPhase2Data({ ...props.phase2Data, licenses: array })
            setLicenseObj({
                "name": "",
                "organization": "",
                "startMonth": "",
                "endMonth": "",
                "startYear": "",
                "endYear": "",
                "credent": "",
                "current": false,
            })
            setEdit(false)
        } else {
            props.setPhase2Data({ ...props.phase2Data, licenses: [...props.phase2Data.licenses, licenseObj] })
            setModalLicense(false)
            setLicenseObj({
                "name": "",
                "organization": "",
                "startMonth": "",
                "endMonth": "",
                "startYear": "",
                "endYear": "",
                "credent": "",
                "current": false,
            })
        }


    }

    const handleOkSuppModal = () => {
        if (edit) {

            setModalSupporting(false)
            let array = props.phase2Data.supporting;
            array[index] = supportingObj
            props.setPhase2Data({ ...props.phase2Data, supporting: array })
            setSupportingObj({
                name: '',
                file: ''
            })
            setEdit(false)
        }
        else {
            props.setPhase2Data({ ...props.phase2Data, supporting: [...props.phase2Data.supporting, supportingObj] })
            setModalSupporting(false)
            setSupportingObj({
                name: '',
                file: ''
            })
        }

    }

    return (
        <>
            <>
                <ModalLicense
                    visible={modalLicense}
                    handleCancel={() => setModalLicense(false)}
                    onCancel={() => setModalLicense(false)}
                    setLicenseObj={setLicenseObj}
                    licenseObj={licenseObj}
                    handleOkLicenseModal={handleOkLicenseModal}
                />
                <ModalSupportingMaterial
                    visible={modalSupporting}
                    handleCancel={() => setModalSupporting(false)}
                    onCancel={() => setModalSupporting(false)}
                    supportingObj={supportingObj}
                    setSupportingObj={setSupportingObj}
                    handleOkSuppModal={(e) => handleOkSuppModal(e)}

                />
            </>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <br />
                        <h3>Seller Application - Phase II</h3>
                        <br />
                        <h5>Portfolio attachments</h5>
                        {/* <FileUploaderArea
                        // handleChange={handleChange}
                        /> */}
                        <Upload
                            uploadArea={true}
                            files={true}
                            getUrl={(e) => handleFile(e)}
                        />
                        {props.phase2Data.files.map((x) => {
                            return (
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row file-card">
                                                <div className="col-1 text-right">
                                                    <img src={equalIcon} alt="PDFIcon" />
                                                    <img className="urlIcon" src={pdfIcon} alt="PDFIcon" />
                                                </div>
                                                <div className="col-10 d-flex">
                                                    <h6>{x.name}</h6>
                                                    <p className="file-size">{x.size}</p>
                                                </div>
                                                <div className="col-1">
                                                    <DeleteFilled className="icon icondelet"
                                                        onClick={() => {
                                                            let array = props.phase2Data.files; // make a separate copy of the array
                                                            let index = array.indexOf(x)
                                                            if (index !== -1) {
                                                                array.splice(index, 1);
                                                                props.setPhase2Data({ ...props.phase2Data, files: [...array] })
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                        <br />
                        {/* <UploadedFile
                        /> */}
                        <br />
                        {props.phase2Data.type == "individual" &&
                            <>
                                <h5>Portfolio URL's</h5>
                                {props.phase2Data.urls.map((x) =>
                                    <>
                                        <div className="card uploaded-file" >
                                            <div className="row w-100">
                                                <div className="col-11 d-flex">
                                                    <div>
                                                        <img className="urlIcon" src={urlIcon} alt="urlIcon" />
                                                    </div>
                                                    <h6 className="urlPrev">{x}</h6>
                                                </div>
                                                <div className="col-1">
                                                    <DeleteFilled className="icon icondelet"
                                                        onClick={() => {
                                                            let array = props.phase2Data.urls; // make a separate copy of the array
                                                            let index = array.indexOf(x)
                                                            if (index !== -1) {
                                                                array.splice(index, 1);
                                                                props.setPhase2Data({ ...props.phase2Data, urls: [...array] })
                                                                //    setAlllanguage([...array]);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="card uploaded-file">
                                    <InputField
                                        type={"simple"}
                                        onChange={(e) => {
                                            setUrlStr(e)
                                        }}
                                        value={urlStr}
                                    />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <Button
                                            filled={false}
                                            text={"+ Add URL"}
                                            className="addbtn"
                                            onClick={(e) => {
                                                props.setPhase2Data({ ...props.phase2Data, urls: [...props.phase2Data.urls, urlStr] })
                                                setUrlStr("")
                                            }}
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            </>
                        }

                        <h5>Licenses & Certifications <span className="optional">Optional</span></h5>
                        {props.phase2Data.licenses.map((x) => {
                            return (
                                <div className="card w-100">
                                    <div className="card-body " >
                                        <div className="row">
                                            <div className="col-2 d-flex">
                                                <img src={institute} />
                                            </div>
                                            <div className="col-8">
                                                <h5 className="card-title">{x.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{x.organization}</h6>
                                                <div className="d-flex">
                                                    <h6 className="card-subtitle mb-2 text-muted">Issued: {x.startMonth} {x.startYear}{" - "} {x.current ? <>Present</> : <> {x.endMonth} {x.endYear}</>} </h6>
                                                </div>
                                                <h6 className="card-subtitle mb-2 text-muted">{x.credent}</h6>
                                            </div>
                                            <div className="col-2 cer-dltbtn">
                                                <EditOutlined className="icon iconedit"
                                                    onClick={() => {
                                                        setEdit(true)
                                                        let array = props.phase2Data.licenses;
                                                        let index = array.indexOf(x)
                                                        setIndex(index)
                                                        setLicenseObj(array[index])
                                                        setModalLicense(true)
                                                    }}
                                                />
                                                <DeleteFilled className="icon icondelet"
                                                    onClick={() => {
                                                        let array = props.phase2Data.licenses; // make a separate copy of the array
                                                        let index = array.indexOf(x)
                                                        if (index !== -1) {
                                                            array.splice(index, 1);
                                                            props.setPhase2Data({ ...props.phase2Data, licenses: [...array] })
                                                            //    setAlllanguage([...array]);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                        <div className="card uploaded-file">
                            <Button
                                filled={false}
                                text={"+ Add Certification"}
                                className="addbtn"
                                onClick={() => setModalLicense(true)}
                            />
                        </div>
                        <br />
                        {props.phase2Data.type == "agency" &&
                            <>
                                <h5>Other Supporting URL’s</h5>
                                {props.phase2Data.supportingUrl.map((x) =>
                                    <>
                                        <div className="card uploaded-file" >
                                            <div className="row w-100">
                                                <div className="col-11 d-flex">
                                                    <div>
                                                        <img className="urlIcon" src={urlIcon} alt="urlIcon" />
                                                    </div>
                                                    <h6 className="urlPrev">{x}</h6>
                                                </div>
                                                <div className="col-1">
                                                    <DeleteFilled className="icon icondelet"
                                                        onClick={() => {
                                                            let array = props.phase2Data.supportingUrl; // make a separate copy of the array
                                                            let index = array.indexOf(x)
                                                            if (index !== -1) {
                                                                array.splice(index, 1);
                                                                props.setPhase2Data({ ...props.phase2Data, supportingUrl: [...array] })
                                                                //    setAlllanguage([...array]);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="card uploaded-file">
                                    <InputField
                                        type={"simple"}
                                        onChange={(e) => {
                                            setsuppUrlStr(e)
                                        }}
                                        value={suppUrlStr}
                                    />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <Button
                                            filled={false}
                                            text={"+ Add URL"}
                                            className="addbtn"
                                            onClick={(e) => {
                                                props.setPhase2Data({ ...props.phase2Data, supportingUrl: [...props.phase2Data.supportingUrl, suppUrlStr] })
                                                setUrlStr("")
                                            }}
                                        />
                                    </div>
                                </div>
                                <br />
                            </>
                        }

                        <h5>Other Supporting Material <span className="optional">Optional</span></h5>

                        {props.phase2Data.supporting.map((x) => {
                            return (
                                <>
                                    {console.log('xxxxxx', x)}
                                    <div className="card uploaded-file" >
                                        <div className="row w-100">
                                            <div className="col-10 d-flex">
                                                <div>
                                                    <img className="fileIcon" src={pdfIcon} alt="urlIcon" />
                                                </div>
                                                <h6>{x.name}</h6>
                                            </div>
                                            <div className="col-2">
                                                <EditOutlined className="icon iconedit"
                                                    onClick={() => {
                                                        setEdit(true)
                                                        let array = props.phase2Data.supporting;
                                                        let index = array.indexOf(x)
                                                        setIndex(index)
                                                        setSupportingObj(array[index])
                                                        setModalSupporting(true)
                                                    }}
                                                />
                                                <DeleteFilled className="icon icondelet"
                                                    onClick={() => {
                                                        let array = props.phase2Data.supporting; // make a separate copy of the array
                                                        let index = array.indexOf(x)
                                                        if (index !== -1) {
                                                            array.splice(index, 1);
                                                            props.setPhase2Data({ ...props.phase2Data, supporting: [...array] })
                                                            //    setAlllanguage([...array]);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}

                        <div className="card uploaded-file">
                            <Button
                                filled={false}
                                text={"+ Add Material"}
                                className="addbtn"
                                onClick={() => setModalSupporting(true)}
                            />
                        </div>
                        <br />

                        {/* form end */}
                        <div className="attach-footer">
                            <Button
                                filled={false}
                                text={"Back"}
                                className=""
                                onClick={() => props.setPages(1)}
                            />
                            <Button
                                filled={true}
                                text={"Preview"}
                                onClick={() => props.setPages(3)}
                                className="cont-btn"
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>

                    {/* right side */}
                    < div className="col-4 sideCard" >
                        <Button
                            filled={false}
                            text={"cancel"}
                            className="cancelDraftbtn"
                        />
                        <PhaseVideoCard />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Attachments

import { React, useState } from 'react'
import './gallery.css';
import { useHistory } from "react-router-dom";
import { Button, Navbar, InputField, DropDown, FileUploaderArea, Upload } from "../../../Imports/genericComponents"
import { txt, xlsx, pptx, gig1, link, doc, dragImage, projectbutton } from "../../../Imports/images"
// import { Steps, Popover } from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';
import DeleteIcon from '@material-ui/icons/Delete';

import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

export default function Gallery(props) {
    const url = {
        "title": "",
        "link": "",
        "edit": true
    }


    let multiplePhoto = [...props.formData.imagesAndVideos]
    let mulitplefile = [...props.formData.files]
    return (
        <>
            <div className="card ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row d-flex" >
                            <div className="d-flex">
                                <h6 className="font-weight-bold">Images & Videos</h6><p className="textColor pl-2">maximum 15</p></div>
                            <p className="ml-auto textColor ">0 of 500Mb used</p>


                        </div></li>
                    <li className="list-group-item  mr-5 ml-5"  >
                        <Upload className="mb-3" uploadArea={true} images={true} multiple={true} getUrl={(file) => {
                            multiplePhoto.push(file)
                            console.log(multiplePhoto)
                            props.setFormData({ ...props.formData, imagesAndVideos: [...multiplePhoto] })
                        }} />
                        <div className=" d-flex row">
                            {props.formData.imagesAndVideos.map((src) => {
                                return (
                                    <  >

                                        {
                                            src.type == "mp4" || src.type == "mov" || src.type == "wmv" || src.type == "avi" || src.type == "webm" || src.type == "mkv" ?
                                                // <div style={{ width: "19%", height: "160px", marginRight: "1%" }} className=" mb-2">
                                                // <span style={{ backgroundColor: "blue" }}>
                                                <video controls style={{ width: "19%", height: "160px", marginRight: "1%", }} className=" mb-2" >
                                                    <source src={src.src} />
                                                </video>
                                                // </span>
                                                :
                                                //  <span>
                                                <img src={src.src} style={{ width: "19%", height: "160px", marginRight: "1%", }} className=" mb-2" />

                                        }
                                    </>

                                )

                            })}
                        </div>
                        {/* </div> */}

                    </li>
                </ul>
            </div>
            <div className="card mt-3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="row d-flex" >
                            <div className="d-flex">
                                <h6 className="font-weight-bold">Files</h6><p className="textColor pl-2">maximum 5</p></div>
                            <p className="ml-auto textColor ">0 of 50Mb used</p>


                        </div></li>
                    <li className="list-group-item  mr-5 ml-5 "  >
                        {/* <FileUploaderArea multiple={true} images={true} files={true} /> */}
                        <Upload uploadArea={true} files={true} multiple={true} getUrl={(file) => {
                            mulitplefile.push(file)
                            props.setFormData({ ...props.formData, files: [...mulitplefile] })
                        }} />
                        <div className=" card mt-3">
                            <ul class="list-group list-group-flush">
                                {props.formData.files.map((src) => {

                                    return (<li class="list-group-item">
                                        {src.type == "doc" && <div className="row"> <img src={dragImage} className="ml-2 mr-2 dragImage mt-auto mb-auto" /><img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "docx" && <div className="row"><img src={dragImage} className="ml-2 mr-2 dragImage mt-auto mb-auto" /><img src={doc} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "ppt" && <div className="row"> <img src={dragImage} className="ml-2 mr-2 dragImage mt-auto mb-auto" /><img src={pptx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "txt" && <div className="row"> <img src={dragImage} className="ml-2 mr-2 dragImage mt-auto mb-auto" /><img src={txt} className="docImages mb-2" /> <p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                        {src.type == "xlsx" && <div className="row"><img src={dragImage} className="ml-2 mr-2 dragImage mt-auto mb-auto" /><img src={xlsx} className="docImages mb-2" /><p className="ml-2 mt-auto mb-auto font-weight-normal w-25" >{src.key}</p><p className={"ml-auto mt-auto mb-auto"}>8 Mb</p><img src={projectbutton} className="ml-auto mr-2 " /></div>}
                                    </li>)


                                })}
                            </ul>
                        </div>


                    </li>
                </ul>
            </div>
            <div className="card mt-3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="d-flex " >
                            <h6 className="font-weight-bold ">Showcase URLs</h6><p className="textColor pl-2">maximum 5</p>
                        </div></li>

                    {props.formData.urls?.map((url) => {
                        return (
                            <li className=" list-group-item">
                                {url.edit ?
                                    <div className="d-flex align-items-center" >
                                        <div className="width30">

                                            <InputField size={"small"} value={url.title} placeHolder={"Title(optional)"} onChange={(e) => {
                                                let arr = props.formData.urls
                                                let index = arr.indexOf(url)
                                                arr[index] = { "title": e, "link": arr[index].link, "edit": true }
                                                props.setFormData({ ...props.formData, urls: [...arr] })
                                                // setValue(arr[index])

                                            }} />
                                        </div>
                                        <div className="width50 ml-2">

                                            <InputField size={"small"} value={url.link} placeHolder={"Name"} className="w-100" onChange={(e) => {
                                                let arr = props.formData.urls
                                                let index = arr.indexOf(url)
                                                arr[index] = { "title": arr[index].title, "link": e, "edit": true }
                                                props.setFormData({ ...props.formData, urls: [...arr] })
                                                // setValue(arr[index])
                                            }} />
                                        </div>
                                        <div className="box ml-auto" ><DoneIcon className="primaryColor"
                                            onClick={() => {
                                                let arr = props.formData.urls
                                                let index = arr.indexOf(url)
                                                arr[index] = { "title": url.title, "link": url.link, "edit": false }
                                                props.setFormData({ ...props.formData, urls: [...arr] })

                                            }}


                                        /></div>
                                        <div className="box ml-1" ><CloseIcon className="color9e"

                                            onClick={() => {
                                                let array = props.formData.urls; // make a separate copy of the array
                                                let index = array.indexOf(url)
                                                if (index !== -1) {
                                                    array.splice(index, 1);
                                                    // setAlldeliverable([...array])
                                                    props.setFormData({ ...props.formData, urls: [...array] })

                                                }
                                            }}

                                        /></div>
                                    </div>
                                    :
                                    <div className="d-flex align-items-center" >
                                        <div className=" d-flex align-items-center width30" >
                                            <img src={gig1} className="gigImage" /><h6 className="ml-2">{url.title}</h6>

                                        </div>
                                        <div className="width50 ml-2 d-flex align-items-center">
                                            <img src={link} /><p className=" primaryColor ml-2 mt-auto mb-auto">{url.link.length > 60 ? url.link.substr(0, 60).concat("...") : url.link}</p>

                                        </div>
                                        <div className="ml-auto" ><img src={projectbutton} /></div>

                                    </div>}

                            </li>)
                    })}
                    <li className="list-group-item">
                        <Button className="buttonExperiance"
                            onClick={() => {
                                props.setFormData({ ...props.formData, urls: [...props.formData.urls, url] })

                            }}
                            filled={false}
                            img={true}
                            icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                            text={"Add Url"} />
                    </li>
                    {/* </ul> */}
                    {/* </div> */}

                    {/* </li> */}
                </ul >
            </div >
        </>
    )
}

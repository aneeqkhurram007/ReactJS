import { React, useState } from 'react'
import "antd/dist/antd.css";

import { Button, InputField, CheckBox, Navbar } from '../../../Imports/genericComponents'
import { badge, profile, star, flag, fb, editColor, linkdin, pintrest, insta, tiktok, twitter, job, institute } from '../../../Imports/images'
import './profileCard.css'
import { Divider } from 'antd';
import { Tabs } from 'antd';
import {
    PlusOutlined,
    DeleteFilled,
    EditOutlined
} from '@ant-design/icons';
import EditIcon from '@material-ui/icons/Edit';
import SkillModel from "./ModelSkill/model"
import LanguageModel from "./ModelLangage/model";
import ContactModel from "./ModelContact/model"
import LinkModel from "./ModelLinks/model"
import AboutModel from "./ModelAbout/model"
import PersonalModel from "./ModelPersonal/model"

const { TabPane } = Tabs;
export default function Profile(props) {
    const [modelSkill, setModelSkill] = useState(false)
    const [model, setModel] = useState({
        "skill": false,
        "language": false,
        "contacts": false,
        "links": false,
        "about": false,
        "prsonal": false
    })

    const socialMediaUrls = {
        "fb": "www.fb.com",
        "linkdin": "www.linkdin.com",
        "insta": "www.insta.com",
        "printrest": "wwww.printrest.com",
        "tiktok": "",
        "twitter": "",
    }

    const operations = <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, personal: true }) }} />;

    return (

        <div className={`container-fluid ${props.className}`}>
            <SkillModel visible={model.skill} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, skill: false })} skill={props.categories ? props.categories : []} />
            <LanguageModel visible={model.language} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, language: false })} language={props.language ? props.language : []} />
            {/* <ContactModel visible={model.contacts} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, contacts: false })} number={props.user.phone} email={props.user.email} /> */}
            <LinkModel visible={model.links} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, links: false })} socialMediaUrls={props.socialMediaUrls} />
            <AboutModel visible={model.about} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, about: false })} about={props.about} />
            <PersonalModel visible={model.personal} handleOk={console.log("check")} handleCancel={() => setModel({ ...model, personal: false })} experience={props.experience} education={props.education} />
            <div className="card" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-1">
                                <img src={profile} className="profile" />
                                <img src={badge} className="badgee" />

                            </div>
                            <div className="col-4 p-2 pl-3">
                                <div className="row">  <h4>{props.user.username}</h4></div>
                                <div className="row"> <img src={star} /><span style={{ color: "#FFBE5B" }}> 4.4</span> (999)</div>
                                <div className="row" ><img src={flag} />Lahore, Punjab Pakistan - 2:18 AM Local Time </div>
                            </div>
                            <div className="col-7">
                                <div className="d-flex justify-content-end">
                                    <Button text={"Public View"} />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-4 pl-5 pt-2"  >
                                <div className="row d-flex">
                                    <h6 className="font-weight-bold">My Categories</h6>
                                    <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, skill: true }) }} />
                                </div>
                                {props?.categories?.length > 0 && (
                                    <div className="row">
                                        {props.categories.map((category) => {
                                            return <div className="category mr-1 mb-1">{category}</div>
                                        })}
                                    </div>
                                )}
                                {/* <div className="row"> */}
                                <Divider plain />
                                {/* </div> */}
                                <div className="row d-flex">
                                    <h6 className="font-weight-bold">Languages</h6>
                                    <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, language: true }) }} />
                                </div>
                                {props?.language?.length > 0 && (
                                    <div className="row">
                                        {props.language.map((category) => {
                                            return <div className="d-flex">{category.language}-{category.experiance}</div>
                                        })}
                                    </div>)}
                                {/* <div className="row"> */}
                                <Divider plain />
                                {/* </div> */}

                                <div className="row d-flex">
                                    <h6 className="font-weight-bold">Contacts</h6>
                                    {/* <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, contacts: true }) }} /> */}
                                </div>
                                <div className="row">
                                    Email: {props.user.email}
                                </div>
                                <div className="row">
                                    Phone:{props.user.phone}
                                </div>
                                {/* <div className="row"> */}
                                <Divider plain />
                                {/* </div> */}
                                <div className="row d-flex">
                                    <h6 className="font-weight-bold">Links</h6>
                                    <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, links: true }) }} /></div>
                                <div className="row">
                                    {props.socialMediaUrls.fb && (<img src={fb} className="imgCard mr-1" />)}
                                    {props.socialMediaUrls.linkdin && (<img src={linkdin} className="imgCard mr-1" />)}
                                    {props.socialMediaUrls.printrest && (<img src={pintrest} className="imgCard mr-1" />)}
                                    {props.socialMediaUrls.insta && (<img src={insta} className="imgCard mr-1" />)}
                                    {props.socialMediaUrls.twitter && (<img src={twitter} className="imgCard mr-1" />)}
                                    {props.socialMediaUrls.tiktok && (<img src={tiktok} className="imgCard mr-1" />)}

                                </div>
                            </div>
                            <div className="col-8 border-left pl-5" >
                                <div className="row pt-3 ">
                                    {/* <div className="col-1"></div> */}
                                    <div className="col-3">
                                        <h3 className="font-weight-bold">2 Hour</h3>
                                        <p>Average Response time</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="font-weight-bold">75</h3>
                                        <p>Completed Jobs</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="font-weight-bold">$7.5k</h3>
                                        <p>Total Earned</p>

                                    </div>

                                </div>
                                <Divider plain />
                                <div className="row d-flex">
                                    <h6 className="font-weight-bold">About</h6>
                                    <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" onClick={() => { setModel({ ...model, about: true }) }} />
                                </div>
                                <div className="row">
                                    {props.about}</div>
                                <Divider plain />

                                {/* <div className=""> */}
                                {/* <div className="row"> */}
                                <Tabs defaultActiveKey="1" tabBarExtraContent={operations} >
                                    <TabPane tab="Experience" key="1" className="tab-hover ">
                                        <div className="row">
                                            {props?.experience?.length > 0 && (

                                                < >
                                                    {props.experience.map((experiance) => {
                                                        return (
                                                            <div className="card cardexperience ml-3 mb-2"  >
                                                                <div className="card-body ">
                                                                    <div className="row">
                                                                        <div className="col-2 d-flex">
                                                                            <img src={job} />
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <h5 className="card-title">{experiance.title}</h5>
                                                                            <h6 className="card-subtitle mb-2 text-muted">{experiance.company}</h6>
                                                                            <p className="card-text">{experiance.startDate},{experiance.startYear} - {experiance.current ? <>Present</> : <>{experiance.endDate},{experiance.endYear}</>}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                    })}
                                                </>

                                            )}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Certification" key="2" className="tab-hover">
                                        <div className="row">
                                            {props?.experience?.length > 0 && (

                                                < >
                                                    {props.experience.map((experiance) => {
                                                        return (
                                                            <div className="card cardexperience ml-3 mb-2"  >
                                                                <div className="card-body ">
                                                                    <div className="row">
                                                                        <div className="col-2 d-flex">
                                                                            <img src={job} />
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <h5 className="card-title">{experiance.title}</h5>
                                                                            <h6 className="card-subtitle mb-2 text-muted">{experiance.company}</h6>
                                                                            <p className="card-text">{experiance.startDate},{experiance.startYear} - {experiance.endDate},{experiance.endYear}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                    })}
                                                </>

                                            )}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Education" key="3" className="tab-hover">
                                        <div className="row">
                                            {props?.education?.length > 0 && (

                                                < >
                                                    {props.education.map((education) => {
                                                        return (
                                                            <div className="card cardexperience ml-3 mb-2"  >
                                                                <div className="card-body ">
                                                                    <div className="row">
                                                                        <div className="col-2 d-flex">
                                                                            <img src={institute} />
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <h5 className="card-title">{education.degree}</h5>
                                                                            <h6 className="card-subtitle mb-2 text-muted">{education.institute}</h6>
                                                                            <p className="card-text">{education.startDate},{education.startYear} - {education.endDate},{education.endYear}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                    })}
                                                </>

                                            )}
                                        </div>
                                    </TabPane>
                                </Tabs>
                                {/* <EditIcon color={"#D36455"} fontSize={"large"} className="icon iconedit  ml-auto" /> */}
                                {/* </div> */}
                            </div>
                        </div>


                    </li>
                </ul>
            </div>
        </div >

    )
}

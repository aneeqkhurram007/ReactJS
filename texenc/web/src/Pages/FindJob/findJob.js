import React, { useEffect, useState } from 'react'
import './findJob.css';
import { useHistory } from "react-router-dom";
import { Button, InputField, DropDown, CheckBox, Tag } from "../../Imports/genericComponents"
import { setAllJobs, setUserData } from '../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../services/api"
import { Tabs, Table, Collapse, Slider, Spin } from 'antd';
import ServiceCard from "./JobCard/jobCard";
import { CaretRightOutlined } from '@ant-design/icons';
import JobView from "./JobView/jobView"
import moment from "moment"
export default function MyJobs(props) {
    const dispatch = useDispatch()
    const { TabPane } = Tabs;
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const [range, setRange] = useState([100, 1000])
    const [jobView, setJobView] = useState(false)
    const [formData, setFormData] = useState()
    const [job, setJob] = useState()
    const seller = useSelector(state => state.user)
    useEffect(() => {
        setLoading(true)
        let user = window.localStorage.getItem("user");
        dispatch(setUserData(JSON.parse(user)))

        api.get('buyer/alljobs').then((res) => {
            dispatch(setAllJobs(res.data.data))
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(true)
        })
    }, [])



    const columns = [
        {
            // title: "",
            // key: "data",
            // dataIndex: "data",
            filters: [
                { text: 'In-person', value: 'In-Person only' },
                { text: 'Check', value: 'che' },
            ],
            onFilter: (value, record) => record.jobType.includes(value),
            render: data => (

                <ServiceCard service={data} setJobView={setJobView} setFormData={setFormData} setJob={setJob} />
            )
        }
    ].filter(item => !item.hidden);
    const sort = [
        {
            "value": "Sort By: Most Recent",
            "label": "Sort By: Most Recent"
        },
        {
            "value": "Sort By: Most Viewed",
            "label": "Sort By: Most Viewed"
        },

    ]
    const category = [
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
    const location = [
        {
            value: "Lahore",
            label: "Lahore"
        },
        {
            value: "karachi",
            label: "karachi"
        },
        {
            value: "Islamabad",
            label: "Islamabad"
        }
    ]
    const operations = <div className="ml-auto"><Tag color={"#01BEAC"} text={"2 of 10 Job Offers Sent"} /></div>;
    return (
        <>
            {!seller.allJobs ? <Spin /> : <>
                {!jobView ?
                    <div className="container-fluid lightbackground ">
                        <div className="mt-3">

                            <Tabs defaultActiveKey="1" tabBarExtraContent={operations}  >
                                <TabPane tab="Search" key="1" className="tab-hover ">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="card">

                                                {/* <div className="card-body"> */}
                                                <ul className="list-group  list-group-flush">


                                                    <li className="card-body d-flex list-group-item">

                                                        <h6 className="card-title">Filter by</h6>


                                                    </li>

                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Job type</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo0" rotate={270} />
                                                        </div>
                                                        <div id="demo0" class="collapse">
                                                            <CheckBox className="mb-1" checked={true} text={"In-person"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"Remote"} classText={"classText"} />
                                                        </div>
                                                    </li>
                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Related Category</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo1" rotate={270} />
                                                        </div>
                                                        <div id="demo1" class="collapse">
                                                            <DropDown values={category} onChange={() => { }} placeHolder="Select Category" />
                                                        </div>
                                                    </li>
                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Budjet</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo5" rotate={270} />
                                                        </div>
                                                        <div id="demo5" class="collapse">
                                                            {/* <DropDown values={category} onChange={() => { }} placeHolder="Select Category" /> */}
                                                            <Slider color='#fff' range defaultValue={[100, 10000]} onChange={(e) => {
                                                                let val1 = e[0] * 10
                                                                let val2 = e[1] * 10
                                                                setRange([val1, val2])


                                                            }} />
                                                            <text className="textColor">${range[0]}-${range[1]}</text>
                                                        </div>
                                                    </li>
                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Project Length</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo2" rotate={270} />
                                                        </div>
                                                        <div id="demo2" class="collapse">
                                                            <CheckBox className="mb-1" checked={true} text={"Less than 1 week"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"Less than 1 month"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"1 to 3 Months"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"3 to 6 Months"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"More than 6 months"} classText={"classText"} />
                                                        </div>
                                                    </li>
                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Offers Recieved</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo3" rotate={270} />
                                                        </div>
                                                        <div id="demo3" class="collapse">
                                                            <CheckBox className="mb-1" checked={true} text={"1 - 10"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"10 - 25"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"25 - 100"} classText={"classText"} />
                                                            <CheckBox className="mb-1" checked={false} text={"100+"} classText={"classText"} />

                                                        </div>
                                                    </li>
                                                    <li className="card-body list-group-item">
                                                        <div className="row d-flex">
                                                            <h6 className="card-title">Job Location</h6>
                                                            <CaretRightOutlined className="ml-auto" data-toggle="collapse" data-target="#demo4" rotate={270} />
                                                        </div>
                                                        <div id="demo4" class="collapse">
                                                            <DropDown values={location} onChange={() => { }} placeHolder="Select Job Location" />
                                                        </div>
                                                    </li>

                                                </ul>
                                                {/* </div> */}
                                            </div>
                                        </div>

                                        <div className="col-10">

                                            <div className=" mb-4 align-items-center d-flex">
                                                <div className="w-100">
                                                    <InputField size={"small"} placeHolder={"Search Job here"} />

                                                </div>
                                                <div className="ml-2 ">


                                                    <Button text={"Save Seacrh"} />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6>Job Results</h6>
                                                </div>
                                                <div className="ml-auto d-flex ">

                                                    <div>
                                                        <DropDown values={sort} value={"Sort By: Most Recent"} placeHolder={"Sort"} /></div>
                                                </div>
                                            </div>
                                            <div >
                                                {/* {JSON.stringify(seller.allJobs)} */}
                                                {seller.allJobs && <Table setJobView={setJobView} dataSource={seller.allJobs} columns={columns} className="mt-4" />}
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Saved Jobs" key="2" className="tab-hover">

                                </TabPane>
                            </Tabs>
                        </div>

                        {/* </div> */}

                    </div> :
                    <JobView formData={formData} setFormData={setFormData} setJobView={setJobView} job={job} />
                }</>
            }
        </>
    )
}


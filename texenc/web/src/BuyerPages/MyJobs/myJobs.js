import React, { useEffect, useState } from 'react'
import './myJobs.css';
import { useHistory } from "react-router-dom";
import { Button, InputField, DropDown, CheckBox } from "../../Imports/genericComponents"
import { setBuyerData, setAllJobs } from '../../Redux/Slices/buyerSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../services/api"
import { Tabs, Table, Collapse, Slider, Spin, Input } from 'antd';
import ServiceCard from "./JobCard/jobCard";
import { CaretRightOutlined } from '@ant-design/icons';
import JobView from "./JobView/jobView"
// import { SmileOutlined } from '@ant-design/search';
import Icon from '@ant-design/icons';


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
    const buyer = useSelector(state => state.buyer)
    useEffect(() => {
        setLoading(true)
        let user = window.localStorage.getItem("user");
        dispatch(setBuyerData(JSON.parse(user)))
        api.get('buyer/getalljobsofbuyer/' + JSON.parse(user).id).then((res) => {
            dispatch(setAllJobs(res.data.jobs))
            setLoading(false)
            console.log(res.data)
            console.log(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })
    }, [])
    const [filter, setFilter] = useState([])
    const [dataIndex, setFilDataIndex] = useState("jobType")
    // useEffect(() => {
    //     setLoading(true)
    //     if (!buyer.allJobs) {
    //         let user = window.localStorage.getItem("user");
    //         api.get('buyer/getalljobsofbuyer/' + JSON.parse(user).id).then((res) => {
    //             dispatch(setAllJobs(res.data.jobs))
    //             setLoading(false)
    //         }).catch(err => {
    //             console.log(err.response)
    //             setLoading(false)
    //         })
    //     }
    //     else { setLoading(false) }
    // }, [buyer.allJobs])
    // useEffect(() => {
    //     if (!buyer.buyer) {
    //         let user = window.localStorage.getItem("user");
    //         dispatch(setBuyerData(JSON.parse(user)))
    //     }
    //     else { setLoading(false) }
    // }, [buyer.buyer,])
    // let service = [{
    //     "data": {
    //         title: "Designer Needed to creating graphics for Social media ",
    //         jobType: "In-person",
    //         budjet: "$1000",
    //         length: "3 to 6 Months",
    //         offerRecieved: "10",
    //         avg: "$900",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //         skills: ["Business Models", "Lead Generation", "Legal Consultant"],
    //         paused: false
    //     }
    // },
    // {
    //     "data": {
    //         title: "Designer Needed to creating graphics for Social media ",
    //         jobType: "In-person",
    //         budjet: "$1000",
    //         length: "3 to 6 Months",
    //         offerRecieved: "10",
    //         avg: "$900",
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //         skills: ["Business Models", "Lead Generation", "Legal Consultant"],
    //         paused: false
    //     }
    // },
    // {
    //     "data": {
    //         title: "Designer Needed to creating graphics for Social media ",
    //         jobType: "In-person",
    //         budjet: "$1000",
    //         length: "3 to 6 Months",
    //         offerRecieved: "10",
    //         avg: "$900",
    //         description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //         skills: ["Business Models", "Lead Generation", "Legal Consultant"],
    //         paused: false
    //     }
    // }


    // ]
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input

                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => console.log(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    // onClick={() => handleSearch(selectedKeys, confirm)}
                    // icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
          </Button>
                <Button
                    // onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Reset
          </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
                : false,
        // onFilterDropdownVisibleChange: (visible) => {
        //     if (visible) {
        //         setTimeout(() => searchInput.select());
        //     }
        // }
    })


    const columns = [
        {
            // title: "Data",
            // key: "data",
            // dataIndex: "data",
            filters: [
                { text: 'In-person', value: 'In-Person only' },
                { text: 'Check', value: 'che' },
                { text: 'React', value: 'React' },
                ...filter
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
    return (
        <>
            {!buyer.allJobs ? <Spin /> : <>
                {!jobView ?
                    <div className="container-fluid lightbackground ">

                        <div className="d-flex pt-1">
                            <h2 >My Jobs Posts</h2>
                            <Button className="ml-auto " filled={true} text={"Post New Job"} onClick={() => { history.push("/addjob") }} />
                        </div>
                        <div className="mt-3">

                            <Tabs defaultActiveKey="1"  >
                                <TabPane tab="Open Jobs" key="1" className="tab-hover ">
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
                                                            <CheckBox className="mb-1" onChange={(e) => {
                                                                if (e) { setFilter([...filter, { text: "In-person", value: "In-person" }]) }
                                                            }} text={"In-person"} classText={"classText"} />
                                                            <CheckBox className="mb-1" onChange={(e) => {
                                                                if (e) { setFilter([...filter, { text: "In-Person & Remote", value: "In-Person & Remote" }]) }
                                                            }} text={"In-Person & Remote"} classText={"classText"} />
                                                            <CheckBox className="mb-1" onChange={(e) => {
                                                                if (e) { setFilter([...filter, { text: "In-Person only", value: "In-Person only" }]) }
                                                            }} text={"In-Person only"} classText={"classText"} />
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

                                            <div className="row align-items-center">
                                                <div>
                                                    <h6>{buyer.allJobs.length} jobs</h6>
                                                </div>
                                                <div className="ml-auto d-flex ">
                                                    <div className="mr-2">
                                                        <InputField placeHolder={"Search Job here"} onChange={(e) => { setFilter([{ text: e, value: e }]) }} /></div>
                                                    <div>
                                                        <DropDown values={sort} value={"Sort By: Most Recent"} placeHolder={"Sort"} /></div>
                                                </div>
                                            </div>
                                            <div >
                                                {buyer.allJobs && <Table setJobView={setJobView} showHeader={true} dataSource={buyer.allJobs} columns={columns} className="mt-4" />}
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Closed" key="2" className="tab-hover">
                                    {/* <div className="row">
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
                                        </div> */}
                                </TabPane>
                                <TabPane tab="Completed" key="3" className="tab-hover">
                                    {/* <div className="row">
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
                                        </div> */}
                                </TabPane>
                                <TabPane tab="Drafts" key="3" className="tab-hover">
                                    {/* <div className="row">
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
                                        </div> */}
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


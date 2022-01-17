import React, { useState, } from 'react'
import "antd/dist/antd.css";
import './profile.css';
import { Button, InputField, CheckBox, Navbar, DropDown, Tag } from '../../Imports/genericComponents'
import { profileCover, gig1, gig2, gig3, onestar, project1, project2, project3, project4, likes, projectbutton, star, flag, ratings, ratingstar, buyer } from '../../Imports/images'
import ProfileCard from './ProfileCard/profileCard'
import axios from "axios"
import { Spin } from 'antd';
import { Divider } from 'antd';
import api from "../../services/api"
import { setUserData, setPhase1, setPhase2, setServices, setProjects } from '../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function Profile(props) {
    const dispatch = useDispatch()
    const [iid, setId] = useState()
    const [user, setUser] = useState()
    const [phase1, setPhase01] = useState()
    const [phase2, setPhase02] = useState()
    const [loading, setLoading] = useState(true)
    const state = useSelector(state => state)
    React.useEffect(() => {
        setLoading(true)
        let user = window.localStorage.getItem("user");
        console.log(user)
        setId(JSON.parse(user).id);
        setUser(JSON.parse(user));
        // setLoading(false)
        // let url = `${`
        api.post("seller/getseller", { id: JSON.parse(user).id })
            .then((response) => {
                dispatch(setPhase1(response.data.data.phase1))
                dispatch(setPhase2(response.data.data.phase2))
                setPhase01(response.data.data.phase1)
                setPhase02(response.data.data.phase2)
                // setPhase1(response.data.data.phase1)


                api.get("seller/getallsellerservice/" + JSON.parse(user).id,).then((res) => {
                    dispatch(setServices(res.data.data.services))
                    console.log("res.data.data.portfolio")
                    console.log(res.data.data.services)
                    console.log("res.data.data.portfolio")
                    api.get("seller/getallsellerportfolio/" + JSON.parse(user).id,).then((res) => {
                        dispatch(setProjects(res.data.data.portfolio))
                        // console.log("res.data.data.portfolio")
                        // console.log(res.data.data.portfolio)
                        // console.log("res.data.data.portfolio")
                        setLoading(false)
                    }).catch((err) => {
                        console.log(console.log(err))
                        setLoading(false)
                    })
                }).catch((err) => {
                    console.log(console.log(err))
                    setLoading(false)
                })


            }).catch((err) => {
                setLoading(false)
                // message.error(err.response.data.message, [2],)
                console.log(err.response)
            })
    }, []);
    React.useEffect(() => {
        setPhase01(state.user.phase1)
        setPhase02(state.user.phase2)
    }, [state.user.phase1, state.user.phase2]);
    const Reviews = [
        {
            "name": "Top",
            "level": "Top Reviews"
        },
        {
            "name": "Normal",
            "level": "Normal"
        },
    ]
    const experience = [{
        "title": "React Developer",
        "company": "Amsus",
        "startDate": "May",
        "endDate": "December",
        "startYear": "2017",
        "endYear": "2020",
        "description": "",
        "current": false,
    },
    {
        "title": "Node Developer",
        "company": "Amsus",
        "startDate": "May",
        "endDate": "December",
        "startYear": "2017",
        "endYear": "2020",
        "description": "",
        "current": false,
    },
    {
        "title": "MERN",
        "company": "Amsus",
        "startDate": "May",
        "endDate": "December",
        "startYear": "2017",
        "endYear": "2020",
        "description": "",
        "current": false,
    },

    ]
    const education = [{
        "institute": "Lahore unversity of managment sciences",
        "degree": "Bachelor in computer science (BSCS)",
        "startDate": "Jan",
        "endDate": "Jan",
        "startYear": "2017",
        "endYear": "2021",
    },
    {
        "institute": "Lahore unversity of managment sciences",
        "degree": "Master in computer science (MSCS)",
        "startDate": "Feb",
        "endDate": "Jan",
        "startYear": "2021",
        "endYear": "2023",
    }]
    const categories = [{ "name": "Business Development" }, { "name": "Acadmic Assitance" }, { "name": "English guide" }]
    return (

        <>
            {loading ? <Spin /> :
                <div>
                    <img src={profileCover} className="converPhoto" />
                    <ProfileCard socialMediaUrls={phase1.socialMediaUrls} experience={phase1.experience} user={user} className="margin-top" about={phase1.about} language={phase1.language} education={phase1.education} categories={phase1.skills} />
                    <div className=" container-fluid mt-5">
                        <div className="row d-flex activeserice  ml-1 mr-1">
                            <h5 className="font-weight-bold">Active Services</h5>
                            <Button text={"View All"} />
                        </div>

                        {/* {console.log(state.user)} */}
                        <div className="row d-flex activeserice  pt-3 mr-5 ">
                            {state.user.services?.map((service) =>
                                <div className="card m-auto mb-3" style={{ width: "18rem", }}>
                                    <img class="card-img-top gig-image" src={service.imagesAndVideos[0].src} alt="Card image cap" />
                                    <div class="card-img-overlay " >

                                        <div className="row d-flex"><div>
                                            <Tag color={"#EFA93E"} text={service.type} /></div>
                                            <img className="ml-auto" src={projectbutton} /></div>
                                    </div>
                                    <div class="card-body p-2">
                                        <h6 class=" font-weight-bold">{service.title}</h6>
                                        <div class="row d-flex card-text activeserice">
                                            <p class="card-text">999 Review</p>
                                            <p class="card-text">Starting Price</p>
                                        </div>
                                        <div class="row d-flex card-text activeserice">
                                            <div style={{ display: "flex", flexDirection: "row", }}>
                                                <img src={onestar} style={{ height: "15px", marginTop: "1px" }} />
                                                <p style={{ color: "#FFBE5B", alignSelf: "center" }}>4.4</p>
                                            </div>
                                            <p class="card-text">Rs {service.package.silver.price}</p>
                                        </div>

                                    </div>
                                </div>
                            )}
                            {/* <div class="card m-auto" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={gig1} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row d-flex"><div>
                                        <Tag color={"#EFA93E"} text={"In-person"} /></div>
                                        <img className="ml-auto" src={projectbutton} /></div>
                                </div>
                                <div class="card-body p-2">
                                    <h6 class=" font-weight-bold">I will provide an amazing business</h6>
                                    <div class="row d-flex card-text activeserice">
                                        <p class="card-text">999 Review</p>
                                        <p class="card-text">Starting Price</p>
                                    </div>
                                    <div class="row d-flex card-text activeserice">
                                        <div style={{ display: "flex", flexDirection: "row", }}>
                                            <img src={onestar} style={{ height: "15px", marginTop: "1px" }} />
                                            <p style={{ color: "#FFBE5B", alignSelf: "center" }}>4.4</p>
                                        </div>
                                        <p class="card-text">Rs 99,999.99</p>
                                    </div>

                                </div>
                            </div> */}
                            {/* <div class="card m-auto" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={gig2} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row d-flex"><div>
                                        <Tag color={"#01BEAC"} text={"Remote"} /></div>
                                        <img className="ml-auto" src={projectbutton} /></div>
                                </div>
                                <div class="card-body p-2">
                                    <h6 class=" font-weight-bold">I will provide an amazing business</h6>
                                    <div class="row d-flex card-text activeserice">
                                        <p class="card-text">999 Review</p>
                                        <p class="card-text">Starting Price</p>
                                    </div>
                                    <div class="row d-flex card-text activeserice">
                                        <div style={{ display: "flex", flexDirection: "row", }}>
                                            <img src={onestar} style={{ height: "15px", marginTop: "1px" }} />
                                            <p style={{ color: "#FFBE5B", alignSelf: "center" }}>4.4</p>
                                        </div>
                                        <p class="card-text">Rs 99,999.99</p>
                                    </div>

                                </div>
                            </div> */}
                            {/* <div class="card m-auto" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={gig3} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row d-flex"><div>
                                        <Tag color={"#D36455"} text={"In-person/Remote"} /></div>
                                        <img className="ml-auto" src={projectbutton} /></div>
                                </div>
                                <div class="card-body p-2">
                                    <h6 class=" font-weight-bold">I will provide an amazing business</h6>
                                    <div class="row d-flex card-text activeserice">
                                        <p class="card-text">999 Review</p>
                                        <p class="card-text">Starting Price</p>
                                    </div>
                                    <div class="row d-flex card-text activeserice">
                                        <div style={{ display: "flex", flexDirection: "row", }}>
                                            <img src={onestar} style={{ height: "15px", marginTop: "1px" }} />
                                            <p style={{ color: "#FFBE5B", alignSelf: "center" }}>4.4</p>
                                        </div>
                                        <p class="card-text">Rs 99,999.99</p>
                                    </div>

                                </div>
                            </div> */}
                            {/* <div class="card m-auto" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={gig1} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row d-flex"><div>
                                        <Tag color={"#D36455"} text={"In-person/Remote"} /></div>
                                        <img className="ml-auto" src={projectbutton} /></div>
                                </div>
                                <div class="card-body p-2">
                                    <h6 class=" font-weight-bold">I will provide an amazing business</h6>
                                    <div class="row d-flex card-text activeserice">
                                        <p class="card-text">999 Review</p>
                                        <p class="card-text">Starting Price</p>
                                    </div>
                                    <div class="row d-flex card-text activeserice">
                                        <div style={{ display: "flex", flexDirection: "row", }}>
                                            <img src={onestar} style={{ height: "15px", marginTop: "1px" }} />
                                            <p style={{ color: "#FFBE5B", alignSelf: "center" }}>4.4</p>
                                        </div>
                                        <p class="card-text">Rs 99,999.99</p>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className=" container-fluid mt-5">
                        <div className="row d-flex activeserice  ml-1 mr-1">
                            <h5 className="font-weight-bold">Portfolio Projects</h5>
                            <Button text={"View All"} />
                        </div>
                        <div className="row d-flex activeserice  pt-3 mr-5">
                            {state.user.projects?.map((project) =>

                                <div class="card" style={{ width: "400px", }}>
                                    <img class="card-img-top project-image" src={project.imagesAndVideos[0]?.src ? project.imagesAndVideos[0].src : project1} alt="Card image cap" />
                                    <div class="card-img-overlay " >

                                        <div className="row"><img className="ml-auto" src={projectbutton} /></div>
                                        <div style={{ marginTop: "55%" }} >
                                            <p class="card-text font-weight-bold" style={{ color: "white" }}>{project.description}</p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        {/* <h5 class="card-title">Card title</h5> */}
                                        <div className="row " ><img className="ml-auto" src={likes} /></div>
                                    </div>
                                </div>
                            )}
                            {/* </div> */}
                            {/* <div className="row d-flex activeserice  pt-3 mr-5"> */}
                            {/* <div class="card" style={{ width: "400px", }}>
                                <img class="card-img-top" src={project2} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row"><img className="ml-auto" src={projectbutton} /></div>
                                    <div style={{ marginTop: "55%" }} >
                                        <p class="card-text font-weight-bold" style={{ color: "white" }}>Catch Very long Project Title goes here on two lines</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div className="row " ><img className="ml-auto" src={likes} /></div>
                                </div>
                            </div>
                        
                            <div class="card" style={{ width: "400px", }}>
                                <img class="card-img-top" src={project3} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row"><img className="ml-auto" src={projectbutton} /></div>
                                    <div style={{ marginTop: "55%" }} >
                                        <p class="card-text font-weight-bold" style={{ color: "white" }}>Catch Very long Project Title goes here on two lines</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div className="row " ><img className="ml-auto" src={likes} /></div>
                                </div>
                            </div>

                            <div class="card" style={{ width: "400px", }}>
                                <img class="card-img-top" src={project4} alt="Card image cap" />
                                <div class="card-img-overlay " >

                                    <div className="row"><img className="ml-auto" src={projectbutton} /></div>
                                    <div style={{ marginTop: "55%" }} >
                                        <p class="card-text font-weight-bold" style={{ color: "white" }}>Catch Very long Project Title goes here on two lines</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div className="row " ><img className="ml-auto" src={likes} /></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className=" container-fluid mt-5">
                        <div className="row d-flex activeserice  ml-1 mr-1">
                            <h5 className="font-weight-bold">Reviews by Customers</h5>
                        </div>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-3 pl-5 pt-2"  >
                                            <div className="row ">
                                                <h6 className="font-weight-bold">999 Global Ratings</h6>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <img src={star} /><span style={{ color: "#FFBE5B" }}> 4.4</span>
                                            </div>
                                            <div>
                                                <img src={ratings} style={{ width: "90%" }} />
                                            </div>
                                            {/* <div className="row"> */}
                                            <Divider plain />
                                            {/* </div> */}
                                            <div className="row">
                                                <h6 className="font-weight-bold">Ratings</h6></div>
                                            <div className="row d-flex" style={{ justifyContent: "space-between" }}>
                                                <p>Communication</p><img src={ratingstar} className="mr-5" style={{ height: "15px" }} />
                                            </div>
                                            <div className="row d-flex" style={{ justifyContent: "space-between" }}>
                                                <p>On time Delievery</p><img src={ratingstar} className="mr-5" style={{ height: "15px" }} />
                                            </div>
                                            <div className="row d-flex" style={{ justifyContent: "space-between" }}>
                                                <p>Quality of Service</p><img src={ratingstar} className="mr-5" style={{ height: "15px" }} />
                                            </div>
                                            <Divider plain />

                                        </div>         <div className="col-9 border-left pl-5" >
                                            <div className="row d-flex mt-5" style={{ justifyContent: "space-between" }}>
                                                <div>
                                                    <h5>Reviews</h5>

                                                    <div className="row">
                                                        {categories.map((category) => {
                                                            return <div className="category mr-1 mb-1">{category.name}</div>
                                                        })}
                                                    </div>

                                                </div>
                                                <div style={{ width: "200px" }}>
                                                    <DropDown values={Reviews} placeHolder={"Reviews"} onChange={(e) => console.log(e)} />
                                                </div>

                                            </div>
                                            <Divider plain />
                                            <div className="row ">
                                                <img src={buyer} style={{ width: "100%" }} />
                                            </div>

                                            <Divider plain />
                                            <div className="row ">
                                                <img src={buyer} style={{ width: "100%" }} />
                                            </div>

                                            <Divider plain />
                                            <div className="row ">
                                                <img src={buyer} style={{ width: "100%" }} />
                                            </div>

                                            <Divider plain />
                                            <div className="row ">
                                                <img src={buyer} style={{ width: "100%" }} />
                                            </div>

                                            <Divider plain />

                                        </div>
                                    </div>
                                    {/* </div> */}


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}
        </>
    )
}

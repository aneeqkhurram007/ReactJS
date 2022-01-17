import React, { useEffect, useState } from "react"
import './sellerApplication.css'
import { Spin } from 'antd';
import { Tag, Button, PhaseVideoCard, Navbar } from "../../Imports/genericComponents"
import { logo } from "../../Imports/images"
import { useHistory } from "react-router-dom";
import { setUserData, setPhase1, setPhase2 } from '../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../services/api"
export default function SellerApplication(props) {
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [phase1, setPhase01] = useState()
    const [phase2, setPhase02] = useState()
    React.useEffect(() => {
        setLoading(true)
        let user = window.localStorage.getItem("user");
        if (!state.user.user) {
            console.log("check")
            dispatch(setUserData(JSON.parse(user)))
            console.log(state.user.user)

        }
        else {
            api.post('seller/getseller', { "id": JSON.parse(user).id })
                .then((response) => {
                    dispatch(setPhase1(response.data.data.phase1))
                    dispatch(setPhase2(response.data.data.phase2))
                    setPhase01(response.data.data.phase1)
                    setPhase02(response.data.data.phase2)
                    console.log("response")
                    console.log("response")
                    console.log("response")
                    console.log(response.data)
                    setLoading(false)
                }).catch((err) => {
                    console.log("error111")
                    console.log("error111")
                    console.log("error111")
                    console.log(err)
                    setLoading(false)
                })

        }
    }, [state.user.user]);
    React.useEffect(() => {
        setPhase01(state.user.phase1)
        setPhase02(state.user.phase2)
    }, [state.user.phase1, state.user.phase2]);

    return (
        <div >
            {loading ? <Spin className="spin" /> :
                <>
                    {/* <Navbar /> */}
                    {console.log(phase1)}
                    <div className="row d-flex mt-5" style={{ justifyContent: "space-between" }}>
                        <div className="ml-5 mt-2">
                            <img src={logo} /></div>

                    </div>
                    <div className="container-fluid ">
                        <div className="row pl-5 pr-5" >
                            <div className="col-10">
                                <br />
                                <h1>Seller Application </h1>
                            </div>
                        </div>
                        <div className="row pl-5 pr-5" >
                            <div className="col-8 ">
                                <h5>Mian Application</h5>
                                <div className="container-fluid phase-container">
                                    <div className="row ">
                                        <div className="col-12 col-md-10 p-4 card bg-transparent border-0">
                                            <div className="card-body">
                                                <p className="card-title">Phase 1</p>
                                                <p class="card-text textColor" >Submit your application to become a verified seller on Texenn. Our team will review your application and get back to you within <span style={{ fontWeight: "bold", color: "black" }}>24 hours</span>.</p>
                                                <Button style={{ width: "200px" }} text={phase1?.applicationSubmitted ? "Review Application" : "Submit Application"} filled={true} onClick={() => history.push("/phase1")} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-2 card-body tagContainer" >

                                            <div >
                                                <Tag color={phase1?.applicationSubmitted ? "#01beac" : "#9e9e9e"} text={phase1?.applicationSubmitted ? "submitted" : "not submitted"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="container-fluid phase-container">
                                    <div className="row ">
                                        <div className="col-12 col-md-10 p-4 card bg-transparent border-0">
                                            <div className="card-body">
                                                <p className="card-title">Phase 2</p>
                                                <p class="card-text textColor" >Submit your application to become a verified seller on Texenn. Our team will review your application and get back to you within <span style={{ fontWeight: "bold", color: "black" }}>48 hours</span>. </p>
                                                <Button style={{ width: "200px" }} loading={phase1?.applicationSubmitted ? false : true} text={"Submit Application"} filled={true} onClick={() => history.push("/phase2")} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-2 card-body tagContainer" >

                                            <div >
                                                <Tag color={"#9e9e9e"} text={"not submitted"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-4 sideCard">
                                <PhaseVideoCard className="ml-auto mr-auto" />
                            </div>
                        </div>
                    </div>




                </>
            }

            {/* <div className="container-fluid phase-container">
                <div className="row ">
                    <div className="col-12 col-md-10 p-4 card bg-transparent border-0">
                        <div className="card-body">
                            <p className="card-title">Phase 1</p>
                            <p class="card-text textColor" >Submit your application to become a verified seller on Texenn. Our team will review your application and get back to you within <span style={{ fontWeight: "bold", color: "black" }}>24 hours</span>.</p>
                            <Button style={{ width: "200px" }} text={"Submit Application"} filled={true} />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 card-body d-flex justify-content-end" >

                        <div >
                            <Tag color={"#9e9e9e"} text={"not submitted"} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container-fluid phase-container">
                <div className="row ">
                    <div className="col-12 col-md-10 p-4 card bg-transparent border-0">
                        <div className="card-body">
                            <p className="card-title">Phase 1</p>
                            <p class="card-text textColor" >Submit your application to become a verified seller on Texenn. Our team will review your application and get back to you within <span style={{ fontWeight: "bold", color: "black" }}>48 hours</span>. </p>
                            <Button style={{ width: "200px" }} disabled={true} text={"Submit Application"} filled={true} />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 card-body d-flex justify-content-end" >

                        <div >
                            <Tag color={"#9e9e9e"} text={"not submitted"} />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

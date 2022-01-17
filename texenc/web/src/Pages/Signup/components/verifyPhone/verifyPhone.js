import { React, useState, useEffect } from 'react'
import './verifyPhone.css'
import { Button, InputField } from '../../../../Imports/genericComponents'
import { Divider } from 'antd';
import { Input } from 'antd';
import { message } from 'antd';
import api from "../../../../services/api"
// import OtpInput from 'react-otp-input';
import { useHistory } from "react-router-dom";

const VerifyPhone = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("")
    const [user, setUser] = useState()

    useEffect(() => {
        const user = window.localStorage.getItem("user");
        setUser(JSON.parse(user))
    }, []);
    const handleConfirmPhone = () => {
        setOtp(document.getElementById("ist").value + document.getElementById("sec").value + document.getElementById("third").value + document.getElementById('fourth').value)
        // console.log(document.getElementById("ist").value + document.getElementById("sec").value + document.getElementById("third").value + document.getElementById('fourth').value)
        let body = {
            phone: user.phone,
            verificationCode: otp.toString()
        }
        console.log(body)
        setLoading(true)
        api
            .post(`user/phonenoverification`, body)
            .then((response) => {
                console.log(response.data)
                message.success("You are Verified successfully", [2],)
                history.push("/seller")
                setLoading(false)

            }).catch((err) => {
                setLoading(false)
                console.log(err.response)
                message.error(err.response.data.message, [2],)
            })

    }
    function clickEvent(first, last) {
        if (document.getElementById(first).value) {
            document.getElementById(last).focus();
        }

    }
    return (
        <>
            <div className="container-fluid row">
                <div className="col-8" />
                <div className="col-4 authCard p-5">
                    <div className="">
                        <div className="card shadow" style={{ width: "28rem" }}>
                            <div className="card-body">
                                <form>
                                    <h5 className="card-title">Verify Phone Number</h5>
                                    <p>We have sent a 4-digit OTP to +92**-******</p>
                                    <br />

                                    <div className="otpfields">
                                        <div className="container">
                                            <div className="userInput">
                                                <input type="tel" className="inputt" id='ist' maxlength="1" onKeyUp={() => clickEvent('ist', 'sec')} />
                                                <input type="tel" className="inputt" id="sec" maxlength="1" onKeyUp={() => clickEvent('sec', 'third')} />
                                                <input type="tel" className="inputt" id="third" maxlength="1" onKeyUp={() => clickEvent('third', 'fourth')} />
                                                <input type="tel" className="inputt" id="fourth" maxlength="1" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <Button
                                        loading={loading}
                                        onClick={handleConfirmPhone}
                                        filled={true}
                                        text={"Verify"}
                                    />
                                    <Divider />
                                    <p className="text-center">Didn't receive the code?</p>
                                    <br />
                                    <Button
                                        filled={false}
                                        text={"Resend Again (52s)"}
                                    />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyPhone

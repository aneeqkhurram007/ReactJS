import { React, useState } from 'react'
import "antd/dist/antd.css";
import './login.css';
import { Button, InputField, CheckBox } from '../../Imports/genericComponents'
import { VERIFYEMAIL } from '../../Imports/pages'
import { Divider } from 'antd';
import { message } from 'antd';
import { useHistory } from "react-router-dom";
import { setUserData } from '../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../services/api"
export default function Login(props) {
    const history = useHistory();

    const [verifyEmail, setVerifyEmail] = useState(false);
    const [isPasswordReset, setisPasswordReset] = useState(false)
    const [rememberMe, setRememberme] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const handleLogin = () => {

        let url = `user/login`

        api.post(url, formData)
            .then((response) => {
                console.log(response)
                localStorage.setItem(
                    "token",
                    response.data.token
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                );
                dispatch(setUserData(response.data.data))
                message.success("You have logged in successfully", [2],)
                history.push("/seller")
                console.log(response.data)
            }).catch((err) => {
                message.error(err.response.data.message, [2],)
                console.log(err.response)
            })

    }

    return (
        <div className="backgroundImage">
            {!verifyEmail ?
                <div className="container-fluid row ">
                    {/* <Navbar /> */}
                    <div className="col-8" />
                    <div className="authCard p-5 mt-5 col-4">
                        <div className="">
                            <div className="card shadow" style={{ width: "28rem" }}>
                                <div className="card-body">
                                    <form>
                                        <h5 className="card-title">Sign In</h5>
                                        <br />
                                        <InputField
                                            placeHolder={"Username / Email"}
                                            onChange={(e) => setFormData({ ...formData, email: e })}

                                        />
                                        <br />
                                        <InputField
                                            type={"password"}
                                            placeHolder={"Password"}
                                            onChange={(e) => setFormData({ ...formData, password: e })}
                                        />
                                        <br />
                                        <Button
                                            filled={true}
                                            text={"Sign In"}
                                            onClick={handleLogin}

                                        />
                                        <br />
                                        {!isPasswordReset ?
                                            <>
                                                <div className="d-flex">
                                                    <CheckBox
                                                        value={rememberMe}
                                                        onChange={setRememberme}
                                                        text={"Remember me"}
                                                    />
                                                    <p
                                                        className="primaryColor bold font-weight-bold ml-auto pointer"
                                                        onClick={() => setVerifyEmail(true)}
                                                    >
                                                        Forgot Password?
                                                    </p>
                                                </div>
                                                <Divider plain>OR</Divider>
                                                <div className="d-flex">
                                                    <Button
                                                        className="mx-auto"
                                                        filled={false}
                                                        img={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"}
                                                        text={"Google"}
                                                    />
                                                    <Button
                                                        className="mx-auto"
                                                        filled={false}
                                                        img={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"}
                                                        text={"Facebook"}
                                                    />
                                                    <Button className=" mx-auto"
                                                        filled={false}
                                                        img={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"}
                                                        text={"LinkedIn"}
                                                    />
                                                </div>

                                                <Divider />
                                                <p className="text-center">Not A Member Yet?</p>
                                                <Button
                                                    filled={false}
                                                    text={"Join now"}
                                                    onClick={() => { history.push("/signup") }}
                                                />
                                                <br />
                                            </>
                                            :
                                            <CheckBox
                                                value={rememberMe}
                                                text={"Remember me"}
                                                onChange={setRememberme}
                                            // onChange={(e) => setFormData({ ...setFormData, rememberMe: e })}
                                            />

                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <VERIFYEMAIL />

            }
        </div>
    )
}

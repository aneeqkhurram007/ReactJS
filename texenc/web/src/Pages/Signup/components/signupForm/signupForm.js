import { React, useState, useEffect } from 'react'
import { Divider } from 'antd';
import { Button, InputField } from '../../../../Imports/genericComponents'
import VerifyPhone from '../verifyPhone/verifyPhone'
import { setUserData } from '../../../../Redux/Slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import api from "../../../../services/api"
import { message } from 'antd';
const SignupForm = (props) => {
    const [verifyPhoneNo, setverifyPhoneNo] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setConfirmpassword] = useState("")
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const handleSignUp = () => {
        // setverifyPhoneNo(true)
        setLoading(true)
        api
            .post(`user/signup`, { ...props.formData, type: "buyer" })
            .then((response) => {
                localStorage.setItem(
                    "token",
                    response.data.token
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data)
                );
                dispatch(setUserData(response.data.data))
                message.success("Account created successfuly", [2],)

                setLoading(false)
                setverifyPhoneNo(true)
                console.log(response.data)
            }).catch((err) => {
                setLoading(false)
                message.error(err.response.data.message, [2],)
                console.log(err.response)
            })


    }
    return (
        <>
            {!verifyPhoneNo ?
                <div className="container-fluid row">
                    <div className="col-8" />
                    <div className="p-5 col-4 authCard ">
                        <div className="">
                            <div className="card shadow" style={{ width: "28rem" }}>
                                <div className="card-body">
                                    <form>
                                        <h5 className="card-title">Sign Up</h5>
                                        <br />
                                        <InputField
                                            placeHolder={"First Name"}
                                            onChange={(e) => {
                                                props.setFormData({ ...props.formData, firstName: e })

                                                console.log(props.formData)
                                            }

                                            }
                                        />
                                        <br />
                                        <InputField
                                            placeHolder={"Second Name"}
                                            onChange={(e) => { props.setFormData({ ...props.formData, lastName: e }) }}
                                        />
                                        <br />
                                        <InputField
                                            placeHolder={"Username"}
                                            onChange={(e) => { props.setFormData({ ...props.formData, username: e }) }}
                                        />
                                        <br />
                                        <InputField
                                            formData={props.formData}
                                            value={props.formData.password}
                                            placeHolder={"Password"}
                                            type={"password"}
                                            icon={true}
                                            onChange={(e) => { props.setFormData({ ...props.formData, password: e }) }}
                                        />
                                        <InputField
                                            formData={props.formData}
                                            value={password}
                                            placeHolder={"Confirm Password"}
                                            type={"password"}
                                            icon={false}
                                            onChange={(e) => { setConfirmpassword(e) }}
                                        />
                                        <br />
                                        <Button
                                            // disabled={loading}
                                            loading={loading}
                                            filled={true}
                                            text={"Sign Up"}
                                            onClick={handleSignUp}
                                        />
                                        <br />
                                        <div className="d-flex">
                                            <label>
                                                <input type="checkbox" checked="checked" name="remember" /> I agree to receive emails from texenc
                                            </label>
                                        </div>
                                        <Divider plain>OR Sign up With</Divider>
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
                                        <p className="text-center">Already a member?</p>
                                        <Button
                                            filled={false}
                                            text={"Sign In"}

                                        />
                                        <br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <VerifyPhone />
            }
        </>
    )
}

export default SignupForm

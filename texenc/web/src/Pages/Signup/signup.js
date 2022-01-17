import React, { useEffect, useState } from "react";
import { Button, InputField, PhoneField } from '../../Imports/genericComponents'
import { SINGUPFORM } from '../../Imports/pages';
import { Divider } from 'antd';
import "./signup.css";

import { useHistory } from "react-router-dom";

const Signup = () => {
    const history = useHistory();
    const [Signupcontinue, setSignupContinue] = useState(false)
    const [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "username": "",
        "password": "",
        "phone": ""
    });
    return (
        <div className="backgroundImage">
            {!Signupcontinue ?
                <div className="container-fluid row">
                    <div className="col-8" />
                    <div className="authCard p-5 col-4">
                        <div className="">
                            <div className="card shadow" style={{ width: "28rem" }}>
                                <div className="card-body">
                                    <form>
                                        <h5 className="card-title">Sign Up</h5>
                                        <br />
                                        <InputField
                                            placeHolder={"Email"}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e })
                                            }}
                                        />
                                        <br />
                                        {/* <InputField
                                            placeHolder={"Phone number"}
                                        /> */}
                                        <PhoneField
                                            placeHolder={"Phone-number"}
                                            onChange={(e) => { setFormData({ ...formData, phone: e }) }}
                                        />
                                        <br />
                                        <Button
                                            filled={true}
                                            text={"Continue"}
                                            onClick={() => setSignupContinue(true)}
                                        />
                                        <br />
                                        <div className="d-flex">
                                            <label>
                                                <input type="checkbox" checked="checked" name="remember" /> I agree to receive emails from texenc
                                            </label>
                                            <p
                                                className="primaryColor bold font-weight-bold ml-auto pointer"
                                            >
                                                Forgot Password?
                                            </p>
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
                                            onClick={() => { history.push("/auth") }}
                                        />
                                        <br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <SINGUPFORM formData={formData} setFormData={setFormData} />
            }
        </div>
    )


}

export default Signup;

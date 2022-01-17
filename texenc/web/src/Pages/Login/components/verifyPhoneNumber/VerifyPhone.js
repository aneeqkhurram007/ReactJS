import { React, useState } from 'react'
import { Button, InputField } from '../../../../Imports/genericComponents';
import { VERIFYEMAIL } from '../../../../Imports/pages'
import { Divider } from 'antd';



const VerifyPhone = () => {
    const [verifyEmail, setVerifyEmail] = useState(false);
    return (
        <>
            {!verifyEmail ?
                <div className="container-fluid row ">
                    {/* <Navbar /> */}
                    <div className="col-8" />
                    <div className="authCard p-5 col-4">
                        <div className="">
                            <div className="card shadow" style={{ width: "28rem" }}>
                                <div className="card-body">
                                    <form>
                                        <h5 className="card-title">Verify Phone Number</h5>
                                        <br />
                                        <InputField
                                            placeHolder={"Phone"}
                                        />
                                        <br />
                                        <p
                                            className="primaryColor bold font-weight-bold ml-auto pointer"
                                            onClick={() => setVerifyEmail(true)}
                                        >
                                            Reset using Email
                                        </p>
                                        <Button
                                            filled={true}
                                            text={"COnfirm "}
                                        />
                                        <br />
                                        <p
                                            className="primaryColor bold font-weight-bold ml-auto"
                                        >
                                            Contact Support
                                        </p>
                                        <Divider />
                                        <p className="text-center">Not A Member Yet?</p>
                                        <Button
                                            filled={false}
                                            text={"Join now"}
                                        />
                                        <br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <VERIFYEMAIL />}
        </>
    )
}

export default VerifyPhone

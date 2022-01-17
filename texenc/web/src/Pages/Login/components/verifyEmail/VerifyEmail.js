import { React, useState } from 'react'
import { Button, InputField } from '../../../../Imports/genericComponents';
import { VERIFYPHONE } from '../../../../Imports/pages';

import { Divider } from 'antd';



const VerifyEmail = () => {
    const [verifyPhone, setVerifyPhone] = useState(false);

    return (
        <>
            {!verifyPhone ?
                < div className="row container-fluid">
                    <div className="col-8" />
                    <div className="authCard p-5 col-4">
                        <div className="">
                            <div className="card shadow" style={{ width: "28rem" }}>
                                <div className="card-body">
                                    <form>
                                        <h5 className="card-title">Verify Email</h5>
                                        <br />
                                        <InputField
                                            placeHolder={"Email"}
                                        />
                                        <br />
                                        <p
                                            className="primaryColor bold font-weight-bold ml-auto pointer"
                                            onClick={() => setVerifyPhone(true)}
                                        >
                                            Reset using Phone Number
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
                : <VERIFYPHONE />}
        </>
    )
}

export default VerifyEmail

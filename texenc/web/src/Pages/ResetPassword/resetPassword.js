import React from 'react'
import { Button, InputField } from '../../Imports/genericComponents';
import { Divider } from 'antd';

const ResetPassword = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="">
                        <div className="card shadow" style={{ width: "28rem" }}>
                            <div className="card-body">
                                <form>
                                    <h5 className="card-title">Reset your password</h5>
                                    <br />
                                    <InputField
                                        placeHolder={"New Password"}
                                    />
                                    <br />
                                    <InputField
                                        placeHolder={"New Password"}
                                    />
                                    <br />
                                    <Button
                                        filled={true}
                                        text={"Submit"}
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

export default ResetPassword

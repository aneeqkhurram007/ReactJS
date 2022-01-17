import React, { useState } from 'react'
import { DropDown, InputField, Button } from "../../../../Imports/genericComponents"
import './step2.css'
import {
    PlusOutlined,
    DeleteFilled,
    EditOutlined
} from '@ant-design/icons';
const businessModel = [{ value: "Business Modal", label: "Business Modal" }]
const Step2 = (props) => {
    // const [alllanguage,setAlllanguage]=useState([])
    // const [skills,setSkills]=useState([])
    const [language, setLanguage] = useState({
        "language": "",
        "experiance": ""
    })
    const Language = [
        {
            "value": "English",
            "label": "English"
        },
        {
            "value": "Urdu",
            "label": "Urdu"
        },
        {
            "value": "French",
            "label": "French"
        },
        {
            "value": "Dutch",
            "label": "Dutch"
        },
        {
            "value": "Chinese",
            "label": "Chinese"
        },

    ]
    const Experiance = [
        {
            "value": "Expert",
            "label": "Expert"
        },
        {
            "value": "Native",
            "label": "Native"
        },

    ]

    return (
        <>
            <div className="container-fluid ">
                {props.formData.type == "agency" ?
                    <>
                        <h5>Top Skills</h5>
                        <DropDown placeHolder={"Select Skills"} value={props.formData.skills ? props.formData.skills : []} onChange={(e) => props.setFormData({ ...props.formData, skills: typeof e === 'string' ? e.split(',') : e, })} values={props.skills} multiple={true} />
                        <br />
                        <br />
                        <br />
                        <h5>Tell us about your Agency</h5>
                        <InputField placeHolder={"some description here"} value={props.formData.about} onChange={(e) => { props.setFormData({ ...props.formData, about: e }) }} row={16} />
                        <br />
                        <br />
                        <>
                            <h5>No. of Employees</h5>
                            <InputField placeHolder={"No Of Employee"} value={props.formData.noOfEmployees} onChange={(e) => { props.setFormData({ ...props.formData, noOfEmployees: Number(e) }) }} type={"Number"} />
                        </>
                        <br />
                        <row className="d-flex buttonContainer">
                            <Button
                                filled={false}
                                text={"cancel"}
                                className="buttonSpace"
                                onClick={() => props.setStep(1)}
                            // style={{width:"150px"}}
                            />
                            <Button
                                filled={true}
                                text={"Continue"}
                                // style={{width:"150px"}}
                                className="buttonSpace ml-auto"
                                onClick={() => props.setStep(3)}

                            />
                        </row>
                    </> :
                    <>
                        <div className="d-flex " >
                            <h5>Top Skills</h5>
                            <p className="textColor pl-2">maximum 3</p>
                        </div>
                        {/* <DropDown placeHolder={"Select Skills"} value={null} values={props.skills}/> */}
                        <DropDown placeHolder={"Select Skills"} value={props.formData.skills ? props.formData.skills : []} onChange={(e) => props.setFormData({ ...props.formData, skills: typeof e === 'string' ? e.split(',') : e, })} values={props.skills} multiple={true} />
                        <br />
                        <br />
                        <br />
                        <h5>Tell us about your Yourself</h5>
                        <InputField placeHolder={"some description here"} value={props.formData.about} onChange={(e) => { props.setFormData({ ...props.formData, about: e }) }} row={16} />
                        <br />
                        <br />

                        <h5>Language Skills</h5>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                {props.formData.language?.map((languagee) => {
                                    { console.log(languagee) }
                                    return (<li className="card-body list-group-item">
                                        <div className="row">
                                            <div className="col-4">

                                                <DropDown value={languagee.language} placeHolder={"Language"} values={Language} onChange={
                                                    (e) => {
                                                        let array = props.formData.language
                                                        let index = props.formData.language.indexOf(languagee);
                                                        // console.log(index)
                                                        if (index > -1) {
                                                            array[index] = { "experiance": languagee.experiance, "language": e }
                                                            // console.log(array)
                                                            // setAlllanguage([...array])
                                                            props.setFormData({ ...props.formData, language: [...array] })
                                                        }
                                                    }


                                                } />
                                            </div>
                                            <div className="col-4">
                                                <DropDown value={languagee.experiance} placeHolder={"Experiance"} values={Experiance} onChange={(e) => {
                                                    let array = props.formData.language
                                                    let index = props.formData.language.indexOf(languagee);
                                                    console.log(index)
                                                    if (index > -1) {
                                                        array[index] = { "language": languagee.language, "experiance": e }
                                                        console.log(array)
                                                        props.setFormData({ ...props.formData, language: [...array] })
                                                        //  setAlllanguage([...array])
                                                    }


                                                }} />

                                            </div>
                                            <div className="col-2" />
                                            <div className="col-2 pt-3 pr-1 rightIcon" >
                                                <DeleteFilled className="icon icondelet"
                                                    onClick={() => {
                                                        let array = props.formData.language; // make a separate copy of the array
                                                        let index = array.indexOf(languagee)
                                                        if (index !== -1) {
                                                            array.splice(index, 1);
                                                            props.setFormData({ ...props.formData, language: [...array] })
                                                            //    setAlllanguage([...array]);
                                                        }
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </li>)
                                })}
                                <li className="list-group-item">
                                    <Button className="buttonExperiance"
                                        onClick={() => {
                                            props.setFormData({ ...props.formData, language: [...props.formData.language, language] })
                                            // setAlllanguage([...alllanguage,language])
                                        }}
                                        filled={false}
                                        img={true}
                                        icon={<PlusOutlined color={"#d36455"} className="pt-1" />}
                                        text={"Add Language"} />
                                </li>
                            </ul>
                        </div>


                        <br />
                        <row className="d-flex buttonContainer">
                            <Button
                                filled={false}
                                text={"Back"}
                                className="buttonSpace"
                                onClick={() => props.setStep(1)}
                            // style={{width:"150px"}}
                            />
                            <Button
                                filled={true}
                                text={"Continue"}
                                // style={{width:"150px"}}
                                className="buttonSpace ml-auto"
                                onClick={() => props.setStep(3)}

                            />
                        </row>
                    </>
                }
            </div>




        </>
    )
}

export default React.memo(Step2)

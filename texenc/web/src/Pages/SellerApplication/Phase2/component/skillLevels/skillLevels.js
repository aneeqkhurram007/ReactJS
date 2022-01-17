import { DropDown, Button } from '../../../../../Imports/genericComponents'
import { useState } from 'react';
import { message } from 'antd';


import React from 'react'

const SkillLevel = (props) => {


    const [skill, setSkill] = useState({
        title: "",
        level: ""
    }
    )

    const handlechange = () => {

        props.setSkills(skill)
        setSkill({
            title: "",
            level: ""
        })
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <DropDown
                                values={props.selectSkill}
                                value={skill.title}
                                placeHolder={"select skill"}
                                onChange={(e) => setSkill({ ...skill, title: e })}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <DropDown
                                values={props.selectLevel}
                                value={skill.level}
                                placeHolder={"select Level"}
                                onChange={(e) => setSkill({ ...skill, level: e })}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    < Button
                        filled={false}
                        text={"+ Add Skill"}
                        className={"skillLevelbtn"}
                        onClick={() => handlechange()}
                    />
                </div>
            </div>
        </>
    )
}

export default SkillLevel

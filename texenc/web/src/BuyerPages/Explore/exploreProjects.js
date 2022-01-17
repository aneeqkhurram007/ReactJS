import React, { useState, useEffect } from 'react';
import { Button, DropDown, ProjectCard, ServiceCard } from '../../Imports/genericComponents';
import { searchIcon } from '../../Imports/images'
import ScrollingMenu from './scrollingMenu';

import api from '../../services/api';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './explore.css'


const Explore = () => {

    const [projectsData, setProjectsData] = useState([]);
    const [servicesData, setServicesData] = useState([]);

    useEffect(async () => {
        getProjects();
        getServices();
    }, [])


    const getProjects = async () => {
        try {
            const res = await api.get('seller/getallportfolio');
            if (res.status == 200)
                setProjectsData(res.data.data)
            console.log('projects Data', res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getServices = async () => {
        try {
            const res = await api.get('seller/allservices');
            if (res.status == 200)
                setServicesData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <ScrollingMenu />
            <div className="card">
                <div className="card-body">
                    <div style={{ textAlign: "center" }}>
                        {/* <Input placeholder="search Projects ..." className='searchBar' prefix={<img src={searchIcon} alt="searchIcon" />} /> */}
                        <input placeholder="search Projects ..." className='searchBar' prefix={<img src={searchIcon} alt="searchIcon" />} />
                        <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='d-flex'>
                        <div className="filters">
                            <DropDown
                                // values={selectLevel}
                                // value={x.level}
                                placeHolder={"Filters"}
                            // onChange={(e) => {

                            // }}
                            />
                        </div>
                        <div className='categoryy'>
                            <Button
                                filled={false}
                                text={"Individuals"}
                                className={"skillLevelbtn"}
                            />
                            <Button
                                filled={false}
                                text={"Agencies"}
                                className={"skillLevelbtn ml-1"}
                            />
                        </div>
                        <div className="sorting">
                            <DropDown
                                // values={selectLevel}
                                // value={x.level}

                                placeHolder={"Sort By: Most Viewed"}
                            // onChange={(e) => {

                            // }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='container-fluid'>
                Project:
                <div className="row">
                    {projectsData.map((x) => {
                        return (
                            <div className="col-3">
                                <ProjectCard
                                    projectsData={x}
                                />
                            </div>)
                    })}
                </div>
                <br />
                <br />
                Services:
                <div className="row">
                    {console.log('service', servicesData)}
                    {servicesData.map((x) => {
                        return (
                            <div className="col-3">
                                <ServiceCard
                                    servicesData={x}
                                />
                            </div>)
                    })}
                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default Explore

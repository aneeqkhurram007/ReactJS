import React, { useState, useEffect } from 'react';
import { buyerHomeBackground } from './../../Imports/images'
import { Button, ScrollMenu, ProjectCard, ServiceCard } from './../../Imports/genericComponents'
import { Input, Space } from 'antd';
import api from '../../services/api';
const { Search } = Input;

const BuyerHome = (props) => {

    const onSearch = value => console.log(value);
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


    const Projects = () =>
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

    const Services = () =>
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




    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-6">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Some Heading here single line</h2>
                        <p>This is a Contract position through Upwork’s Talent Innovation Program (TIP). Collaborate with user researchers, product managers, data scientists, developers, and other designers to frame problems and take ideas from ideation through implementation.
                            Demonstrate high quality design practices by ensuring decisions are made with appropriate user insight.
                        </p>
                        <div>
                            <Search placeholder="input search text" onSearch={onSearch} enterButton size="small" />
                            <Button filled={true} text="Buy Services" />
                        </div>
                    </div>


                    {/* right side */}
                    <div className="col-6">
                        <br />
                        <img src={buyerHomeBackground} alt='buyerHomeBackground' />
                    </div>
                </div>



                <div className="row">
                    <ScrollMenu
                        html={Projects()}
                    />
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <ScrollMenu
                        html={Services()}
                    />
                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default BuyerHome

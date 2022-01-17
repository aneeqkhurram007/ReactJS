import React, { useState } from 'react';
import { project4, likes, profile } from './../../Imports/images'
import { Rate } from 'antd';
import './projectCard.css'


const ProjectCard = (props) => {

    const { budget, time, imagesAndVideos } = props.projectsData;
    var projectPhoto = imagesAndVideos[0]?.src;




    return (
        <div>
            <div class="card">
                <div className='project-image card-head' >
                    <img
                        class="card-img-top h-100"
                        src={projectPhoto}
                        alt="Card image cap"
                    />
                </div>
                <div class="card-body">
                    <div class="d-flex">
                        <p className='heading'>Time compition</p>
                        <p className='heading ml-auto'>price</p>
                    </div>
                    {console.log('project card data', time)}
                    <div className="d-flex">
                        <h6>{time.time1 + " " + time.category1 + " " + time.time2 + " " + time.category2}</h6>
                        <h6 className='ml-auto'>{budget}</h6>
                    </div>
                </div>
                <div className="card-body card-footer">
                    <div className="d-flex" >
                        <img className="avatar pr-1" src={profile} />
                        <div>
                            <p className='m-0'><b>AgencyName</b></p>
                            <Rate disabled allowHalf defaultValue={3.4} />
                            <a style={{ color: "#FFBE5B" }}>4.4</a>
                        </div>
                        <img className="ml-auto object-fit-contain" src={likes} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectCard

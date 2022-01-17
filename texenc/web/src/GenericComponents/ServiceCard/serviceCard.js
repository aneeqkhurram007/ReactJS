import React from 'react'
import { project4, likes, profile, badge } from './../../Imports/images'
import { Rate } from 'antd';
import './serviceCard.css';



export default function ServiceCard(props) {

    const { budget, imagesAndVideos, description } = props.servicesData;
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
                    <div className="d-flex" >
                        <img className="avatar" src={profile} alt='avatar' />
                        <p className='agencyName'><b>AgencyName</b></p>
                        <img className="Servicebadge" src={badge} alt='avatar' />
                    </div>
                    <br />
                    <h6>{description}</h6>
                    <div class="d-flex">
                        <p className='heading'>999 review</p>
                        <p className='heading ml-auto'>Starting Price</p>
                    </div>
                    <div className="d-flex" >
                        <div>
                            <Rate disabled allowHalf defaultValue={3.4} />
                        </div>
                        <p className='ml-auto'>Rs. 999,999.99</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

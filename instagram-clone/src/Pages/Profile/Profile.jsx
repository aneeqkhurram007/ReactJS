import React from 'react'
import './Profile.css'
import { ReactComponent as User } from '../../assets/user.svg'
// import { useLocation } from 'react-router'
//Another method of destructuring
const Profile = ({ location: { state: { username, name, email } } }) => {
    // One Method
    // const location = useLocation();
    // const { name, username, email } = location.state
    return (
        <div className="profileDiv">
            <div >
                <User className="user" />
            </div>
            <div className="profileData">
                <div className="username">{username}</div>
                <div className="name">{name}</div>
                <div >{email}</div>
            </div>
        </div>
    )
}

export default Profile

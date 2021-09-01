import React from 'react'
import './Suggestion.css'
import { useHistory } from 'react-router'
const Suggestion = ({ name, username, email }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/${username}`, {
            name, email, username
        })
    }
    return (
        <div className="userDiv">
            <div className="userName" onClick={handleClick}>{username}</div>
            <div className="name">{name}</div>
        </div>
    )
}

export default Suggestion

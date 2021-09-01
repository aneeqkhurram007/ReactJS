import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion/Suggestion';
import './Suggestions.css'
const Suggestions = () => {
    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        setusers(users);
    }
    const [users, setusers] = useState([])
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="Suggestions">
            <div className="title">Suggestions</div>
            {
                users && users.map((currEl) => <Suggestion key={currEl.id} {...currEl} />)
            }
        </div>
    )
}

export default Suggestions

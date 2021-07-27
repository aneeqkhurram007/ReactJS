import React, { useEffect, useState } from 'react'
import Loading from './gitHub/Loading'
import GitHubUsers from './gitHub/GitHubUsers'
import './Project1.css'
const Project1 = () => {

    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true);
    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            setloading(false);
            setusers(await response.json());
        } catch (error) {
            setloading(false);
            console.log("URL Error " + error);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])
    if (loading) {
        return <Loading />
    }
    return <GitHubUsers users={users} />
}
export default Project1;
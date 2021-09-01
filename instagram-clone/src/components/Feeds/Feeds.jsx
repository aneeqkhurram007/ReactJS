import React, { useState, useEffect } from 'react'
import Feed from './Feed/Feed'
import './Feeds.css'
const Feeds = () => {
    const [feeds, setfeeds] = useState([])
    const fetchData = async () => {
        const res = await fetch('https://picsum.photos/v2/list');
        const feeds = await res.json();
        setfeeds(feeds)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="feeds">
            {
                feeds && feeds.map((currEl) => <Feed key={currEl.id} {...currEl} />)
            }
        </div>
    )
}

export default Feeds

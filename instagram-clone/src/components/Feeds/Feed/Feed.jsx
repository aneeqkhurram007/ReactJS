import React from 'react'
import './Feed.css'
const Feed = ({ download_url, author }) => {
    return (
        <div className="divFeed">
            <div className="authorDiv">{author}</div>
            <div className="imgDiv">
                <img src={download_url} alt={author} />
            </div>

        </div>

    )
}

export default Feed

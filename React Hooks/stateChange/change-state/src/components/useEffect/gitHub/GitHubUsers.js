import React from 'react'
const GitHubUsers = ({ users }) => {
    return (
        <>
            <h2>List of GitHub Users</h2>
            {
                users.map((currEl) => {
                    const { login, id, avatar_url, type } = currEl;
                    return (
                        <div key={id} className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={avatar_url} className="img-fluid rounded-start" alt={type} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{login}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}
export default GitHubUsers;
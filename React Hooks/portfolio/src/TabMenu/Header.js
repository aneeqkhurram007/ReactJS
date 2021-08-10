import React from 'react'

const Header = ({ category, filter }) => {
    return (
        <div>
            <div className="d-flex justify-content-around">
                {
                    category.map((ele, i) => <button key={i} className="btn btn-warning" onClick={() => filter(ele)}>{ele}</button>
                    )
                }
            </div>
        </div>

    )
}

export default Header

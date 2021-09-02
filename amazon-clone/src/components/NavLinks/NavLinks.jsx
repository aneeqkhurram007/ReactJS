import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'
const NavLinks = () => {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <NavLink to="/">Today's Deals</NavLink>
                    <NavLink to="/">Customer Service</NavLink>
                    <NavLink to="/">Gift Cards</NavLink>
                    <NavLink to="/">Registry</NavLink>
                    <NavLink to="/">Sell</NavLink>
                </div>

            </div>
        </div>
    )
}

export default NavLinks

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/instagram.svg'
import { ReactComponent as Home } from '../../assets/home.svg'
import { ReactComponent as Explore } from '../../assets/explore.svg'
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div className="divHeader">
                <div>
                    <Logo className="divSvg" />
                </div>
                <div className="linkDiv">
                    <NavLink exact activeClassName='active' to='/'>
                        <Home className="divSvg" />
                    </NavLink>
                    <NavLink exact to='/explore' activeClassName='active'>
                        <Explore className="divSvg" />
                    </NavLink>
                    <button className="buttonHeader">Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header

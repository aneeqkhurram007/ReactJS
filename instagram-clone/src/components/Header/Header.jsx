import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/instagram.svg'
import { ReactComponent as Home } from '../../assets/home.svg'
import { ReactComponent as Explore } from '../../assets/explore.svg'
import { useHistory } from 'react-router'
import './Header.css'
const Header = (props) => {
    const history = useHistory()
    const redirect = () => {
        history.push('/')
    }
    const logout = () => {
        history.push('/')
        props.islog(false);
    }
    return (
        <nav>
            <div className="divHeader">
                <div>
                    <Logo className="divSvg" onClick={redirect} />
                </div>
                <div className="linkDiv">
                    <NavLink exact activeClassName='active' to='/'>
                        <Home className="divSvg" />
                    </NavLink>
                    <NavLink exact to='/explore' activeClassName='active'>
                        <Explore className="divSvg" />
                    </NavLink>
                    <button className="buttonHeader" onClick={logout}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header

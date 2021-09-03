import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { ShoppingBasket } from '@material-ui/icons'
// import { useStateValue } from '../../StateProvider'
import { auth } from '../Firebase/Firebase'
import Cart from '../../Cart'
const Header = () => {
    // const [{ basket, loggedinuser }] = useStateValue();
    // console.log("My Basket", basket);
    const { state } = useContext(Cart);
    const { basket, loggedinuser } = state;
    const logoutuser = () => {
        if (loggedinuser) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* 1st Link */}
                <NavLink to={!loggedinuser && '/login'} className="header__link">
                    <div onClick={logoutuser} className="header__option">
                        <span className="header__optionLineOne" >Hello, {loggedinuser?.email}</span>
                        <span className="header__optionLineTwo" >{loggedinuser ? 'SignOut' : 'SignIn'}</span>
                    </div>
                </NavLink>
                {/* 2nd Link */}
                <NavLink to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Returns</span>
                        <span className="header__optionLineTwo" >& Orders</span>
                    </div>
                </NavLink>


            </div>
            {/* Basket Icon with number of items */}
            <NavLink to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    {/* Number of Items */}
                    <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Header

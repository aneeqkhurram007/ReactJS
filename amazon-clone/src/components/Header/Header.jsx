import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { ShoppingBasket } from '@material-ui/icons'
const Header = () => {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header__logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* 1st Link */}
                <NavLink to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Hello, User</span>
                        <span className="header__optionLineTwo" >Sign</span>
                    </div>
                </NavLink>
                {/* 2nd Link */}
                <NavLink to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Returns</span>
                        <span className="header__optionLineTwo" >& Orders</span>
                    </div>
                </NavLink>
                {/* 3rd Link */}
                <NavLink to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Your</span>
                        <span className="header__optionLineTwo" >Prime</span>
                    </div>
                </NavLink>
            </div>
            {/* Basket Icon with number of items */}
            <NavLink to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    {/* Number of Items */}
                    <span className="header__optionLineTwo header__basketCount">2</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Header

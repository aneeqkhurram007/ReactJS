import React from 'react';
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (<>


        <NavLink exact activeClassName="active_class" to="/" >About Us</NavLink>
        <NavLink exact to="/contact">Contact Us</NavLink>
        <NavLink exact to="/user" activeClassName="active_class" >User</NavLink>
    </>);
}
export default Menu
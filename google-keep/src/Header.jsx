import React from 'react';
import logo from './Images/google_keep1600.png';
const Header = () => {
    return (

        <React.StrictMode>
            <header>
                <img alt="logo" src={logo} width='100' height='100' />
                <h2>Google Keep</h2>
            </header>
        </React.StrictMode>
    );
}
export default Header
import React from 'react';
const Footer = () => {
   
    const year=new Date().getFullYear();
   
    return (
        <React.StrictMode>
            <footer>
                <p>Copyright ©️ {year} </p>
            </footer>
        </React.StrictMode>

    );

}
export default Footer;
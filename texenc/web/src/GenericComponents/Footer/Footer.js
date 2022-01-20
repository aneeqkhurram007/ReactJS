import React from 'react';
import FooterLinks from './components/footerLinks';

const Footer = () => {
    return <div style={{ padding: "2%", textAlign: "left", display: "flex", flexDirection: "column" }}>
        <div>
            <img src="logo.jpg " alt="logo" />

        </div>
        <div style={{ display: "flex", margin: "5%", justifyContent: "space-between" }}>
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src="logo.jpg" alt="" />
            <div style={{ display: "flex", width: "50%", justifyContent: "space-evenly", paddingTop: "2%" }}>
                <h6>Terms of Service</h6>
                <h6>Privacy Policy</h6>
            </div>
        </div>
    </div>;
};

export default Footer;

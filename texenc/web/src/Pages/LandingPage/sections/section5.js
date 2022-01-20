import React from 'react';

const Section5 = () => {
    return <div style={{
        display: 'flex',
        backgroundColor: '#f9f9f9', borderRadius: "10px",
        justifyContent: "space-between", padding: "2%", margin: "2%"
    }}>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "32px" }}>Get time notifications on
                your mobile device with the
                free Texenn Mobile App.</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button style={{ backgroundColor: "black", color: "white", padding: "2%", borderRadius: "5px" }}>Download on the App Store</button>
                <button style={{ backgroundColor: "black", color: "white", padding: "2%", borderRadius: "5px" }}>Get it on the Google Play</button>
            </div>
        </div>
        <div style={{ width: "50%" }}>
            <img style={{ width: "504px", height: "359px" }} src="https://images.unsplash.com/photo-1638888745447-658b478111fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
        </div>
    </div>;
};

export default Section5;

import React from 'react';

const CustomerCard = () => {
    return <div style={{
        display: "flex", filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
    }}>
        <img style={{ height: "334px", width: "533px", borderRadius: "10px" }} src="https://images.unsplash.com/photo-1638905249864-56ec5d896836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div style={{
            display: "flex", justifyContent: "center",
            flexDirection: "column", textAlign: "left", padding: "2%",
            backgroundImage: " linear-gradient(to left,#fefefe,#ffffff)",
            borderRadius: "5px"
        }}>
            <h5>Buyer Name, Description</h5>
            <p style={{ fontStyle: "italic" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit non amet sed? At doloribus incidunt qui quidem quae laboriosam consequatur harum ut ipsa fugit unde, veniam minima ipsum fugiat ea ipsam tenetur dolorem voluptatem.
            </p>
        </div>
    </div>

};

export default CustomerCard;

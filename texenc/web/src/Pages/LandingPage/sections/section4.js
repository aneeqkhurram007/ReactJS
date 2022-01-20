import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CustomerCard from '../components/customerCard';

const Section4 = () => {
    return <div style={{
        display: 'flex',
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "space-evenly",
        marginTop: "2%",
        padding: "2%",
    }}>
        <h1 style={{ fontSize: "32px", margin: "2% 0" }}>Listen what our buyer are saying about us</h1>
        <Carousel internal={3000} autoPlay={true}>
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </Carousel>
    </div>;
};

export default Section4;

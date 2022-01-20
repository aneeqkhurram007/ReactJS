import React from 'react';

const CarouselCard = ({ title, bgColor, btnColor }) => {
    return <div style={{
        borderRadius: "10px",
        backgroundColor: bgColor,
        textAlign: "left",
        display: "flex", height: "50vh", padding: "5% 2%", flexDirection: "column", justifyContent: "space-between"
    }}>
        <section style={{ width: "50%" }}>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est sed voluptatibus nihil culpa debitis dolorem delectus, recusandae libero perferendis voluptatem alias quae soluta ex adipisci sit temporibus iure dolor deleniti corporis unde quisquam! Itaque iusto error nostrum at vero consequuntur ipsa neque dolor veritatis placeat, inventore illo porro incidunt. Dolore amet cumque recusandae similique, tenetur cum molestias animi nisi hic esse sed excepturi perspiciatis provident ratione necessitatibus voluptas velit? Ad eligendi perferendis autem delectus velit hic ipsam ut, voluptates doloribus aperiam saepe quidem, neque quisquam? Accusantium, amet? Laborum obcaecati magnam eius! Dicta dolore laboriosam illo minima quisquam! Deserunt, officiis?</p>
        </section>
        <div style={{ display: 'flex' }}>
            <button style={{
                borderRadius: "5px", padding: "1% 3%",
                marginRight: "2%", border: `1px solid ${btnColor}`, color: "white",
                backgroundColor: btnColor, fontWeight: "bold"
            }}>Buy Services</button>
            <button style={{
                borderRadius: "5px", padding: "1% 3%",
                marginRight: "2%", border: `1px solid ${btnColor}`, fontWeight: "bold",
                color: btnColor
            }}>Apply as Seller</button>
        </div>
        <section>

        </section>
    </div>;
};

export default CarouselCard;

const Section2 = () => {
    return (
        <div style={{
            width: '100vw', height: "100vh", display: 'flex', flexDirection: 'column',
            justifyContent: 'space-evenly', padding: "2%", paddingTop: "10%"
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: "40px" }}>What makes us unique!</h1>
            </div>
            <div style={{
                borderRadius: "10px",
                backgroundColor: "#f8f4f3",
                display: "flex", height: "70%", padding: "5% 2%", flexDirection: "column", justifyContent: "space-between"
            }}>
                <section style={{ width: "50%" }}>
                    <h1>Project Management that you need.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est sed voluptatibus nihil culpa debitis dolorem delectus, recusandae libero perferendis voluptatem alias quae soluta ex adipisci sit temporibus iure dolor deleniti corporis unde quisquam! Itaque iusto error nostrum at vero consequuntur ipsa neque dolor veritatis placeat, inventore illo porro incidunt. Dolore amet cumque recusandae similique, tenetur cum molestias animi nisi hic esse sed excepturi perspiciatis provident ratione necessitatibus voluptas velit? Ad eligendi perferendis autem delectus velit hic ipsam ut, voluptates doloribus aperiam saepe quidem, neque quisquam? Accusantium, amet? Laborum obcaecati magnam eius! Dicta dolore laboriosam illo minima quisquam! Deserunt, officiis?</p>
                </section>
                <div style={{ display: 'flex' }}>
                    <button style={{ borderRadius: "5px", padding: "1% 3%", marginRight: "2%", border: "1px solid #D36455", color: "white", backgroundColor: "#D36455", fontWeight: "bold" }}>Buy Services</button>
                    <button style={{ borderRadius: "5px", padding: "1% 3%", marginRight: "2%", border: "1px solid #D36455", fontWeight: "bold", color: "#D36455" }}>Apply as Seller</button>
                </div>
                <section>

                </section>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1 style={{ fontSize: "40px" }}>Top Services near you</h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Section2

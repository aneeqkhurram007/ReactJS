import { PlusIcon, StarIcon, ThumbUpIcon } from "@heroicons/react/solid"
import './serviceCard.css'
const ServiceCards = () => {
    return (
        <div className="service-card" style={{ padding: "2%" }}>
            <img style={{ width: "100%", height: "40%" }}
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="" />
            <div style={{ display: "flex", padding: "2%", justifyContent: "space-between" }}>
                <section style={{ display: "flex", }}>
                    <section>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" style={{
                            border: "1px transparent", borderRadius: "50px"
                            , height: "48px"
                        }} alt="" />

                    </section>
                    <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "5%" }}>
                        <h5>userName</h5>
                        <h6 style={{ color: "#9e9e9e" }}>Top Rated</h6>
                    </section>

                </section>
                <section style={{ display: "flex", padding: "5% 1%" }}>
                    <ThumbUpIcon style={{ color: "#D36455", height: "28px", marginRight: "10px" }} />
                    <PlusIcon style={{ color: "#9e9e9e", height: "28px" }} />
                </section>
            </div>
            <div style={{ width: "100%", textAlign: "center", padding: "2%" }}>
                <h6 style={{ textAlign: "left", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia.</h6>
                <p style={{ padding: "2%", fontWeight: "700", color: "white", width: "50%", backgroundColor: "#FFBE5B", borderRadius: "5px" }}>In-Person</p>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <section>
                        <h6 style={{ color: "#9e9e9e" }}>999 Review</h6>
                        <div style={{ display: "flex" }}>
                            <StarIcon style={{ height: "28px", color: "#FFBE5B" }} />
                            <h5 style={{ color: "#FFBE5B" }}>4.4</h5>

                        </div>
                    </section>
                    <section>
                        <h6 style={{ color: "#9e9e9e" }}>Starting Price</h6>
                        <h5 style={{ color: "#625555" }}>Rs. 999,999.99</h5>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default ServiceCards

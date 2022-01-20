import ServiceCards from "../components/serviceCards"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from "../components/carouselCard";

const Section2 = () => {
    return (
        <div style={{
            width: '100vw', display: 'flex', flexDirection: 'column',
            justifyContent: 'space-evenly', padding: "2%", paddingTop: "10%"
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: "40px" }}>What makes us unique!</h1>
            </div>

            <Carousel showIndicators={true} showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true}>
                <CarouselCard title="Project Management that you need" bgColor="#f8f4f3" btnColor="#d36355" />
                <CarouselCard title="Not only remote services also In-person" bgColor="#fef5e6" btnColor="#efae4a" />
                <CarouselCard title="Sellers keep 100% of what they earn" bgColor={"#ecfffd"} btnColor="#01bdad" />
                <CarouselCard title="Voice & Video calling of the future" bgColor="#f0f7ff" btnColor="#247add" />
            </Carousel >
            <div style={{ display: "flex", marginTop: "5%", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1 style={{ fontSize: "40px" }}>Top Services near you</h1>
                </div>
                <div style={{
                    height: "40vh",
                    display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))"
                }}>
                    <ServiceCards />
                    <ServiceCards />
                    <ServiceCards />
                    <ServiceCards />
                    <ServiceCards />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                    <button style={{ padding: "10px 20px", color: "#D36455", border: "none", borderRadius: "2px", backgroundColor: "#f8f4f3", fontSize: "22px" }}>View More</button>
                </div>
            </div>

        </div>
    )
}

export default Section2

import Footer from "../../../GenericComponents/Footer/Footer"
import CategoryCard from "../components/categoryCard"
import Section4 from "./section4"
import Section5 from "./section5"

const Section3 = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "5%" }}>
            <h1>Categories</h1>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", height: "80%", marginTop: "5%" }}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    )
}

export default Section3

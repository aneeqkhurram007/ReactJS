import CategoryCard from "../components/categoryCard"

const Section3 = () => {
    return (
        <div style={{ height: "100vh", textAlign: "center", marginTop: "5%" }}>
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
        </div>
    )
}

export default Section3

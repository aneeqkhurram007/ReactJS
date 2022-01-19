const CategoryCard = () => {
    return (
        <div style={{ width: "234px", backgroundImage: "url('https://images.unsplash.com/photo-1642598136720-10f6262288b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')", height: "248px", backgroundRepeat: "no-repeat", backgroundSize: "cover", margin: "5px", display: "flex" }}>
            <div style={{ borderRadius: "5px", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", }}>
                <div></div>
                <div>
                    <h2 style={{ color: "#fff" }}>Business</h2>
                    <h6 style={{ color: "#c4c6c8" }}>11+ Sub Categories</h6>

                </div>
            </div>
        </div>
    )
}

export default CategoryCard

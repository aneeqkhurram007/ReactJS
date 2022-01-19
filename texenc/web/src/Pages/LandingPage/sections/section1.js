import { SearchIcon } from "@heroicons/react/outline"
import SearchButtons from "../components/searchButtons"

const Section1 = () => {
    return (
        <div className="landing-page-main"

        >
            <div className="landing-title-div" style={{
                display: "flex", flexDirection: "column",
                justifyContent: "space-evenly",
                width: "70vw", height: "70vh", marginLeft: "15%"
            }}>
                <div>
                    <h1 style={{ fontSize: "64px" }}>Some heading that goes here 2 lines</h1>
                    <p style={{ fontSize: "24px", color: "#625555" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eveniet natus non quae corporis aliquid harum. Eum maiores, consectetur distinctio quisquam, autem vitae porro id deleniti mollitia perferendis dolorum? Eveniet unde placeat est aperiam eligendi?</p>

                </div>

                <form action="" style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    border: "1px solid #c4c6c8",
                    borderRadius: "5px"
                }}>
                    <SearchIcon style={{
                        height: "30px",
                        margin: "10px",
                        color: "#9e9e9e"
                    }} />
                    <input type="text" style={{
                        padding: "5px",
                        fontSize: "20px",
                        border: "0",
                        flex: "1 1 0%"
                    }} placeholder="Search services" />
                    <button style={{
                        border: "0",
                        padding: "5px 30px", fontSize: "20px",
                        color: "white", backgroundColor: "#D36455"
                    }}>Search</button>
                </form>
                <div style={{
                    display: "flex",
                    textAlign: "center",
                    marginTop: "30px"
                    , flexDirection: "column", justifyContent: "center"
                }}>
                    <h4 style={{ color: "#625555" }}>Popular searches:</h4>
                    <div style={{
                        display: "flex", justifyContent: "center",
                        width: "100%"
                    }}>
                        <SearchButtons text={"App Development"} />
                        <SearchButtons text={"Supply Chain Management"} />
                        <SearchButtons text={"Research and Development"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1

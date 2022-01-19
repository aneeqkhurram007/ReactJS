const SearchButtons = ({ text }) => {
    return (
        <button style={{
            border: "1px solid #D36455", padding: "5px",
            backgroundColor: "white",
            color: "#D36455", borderRadius: "5px", marginRight: "10px",
        }}>
            {text}
        </button>
    )
}

export default SearchButtons

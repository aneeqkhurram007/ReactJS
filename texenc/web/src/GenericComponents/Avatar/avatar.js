import "../Image/image.css";
function Avatar(props) {
    return (
        <div className={`container ${props.className}`}>
            <img src={props.src} style={{ width: 50, height: 50, borderRadius: 50 }} alt={props.alt} />
        </div>
    );
}

export default Avatar;

import "./image.css";
function Image(props) {
  return (
    <div className="container">
      <img src={props.src} style={props.style} alt={props.alt} />
    </div>
  );
}

export default Image;

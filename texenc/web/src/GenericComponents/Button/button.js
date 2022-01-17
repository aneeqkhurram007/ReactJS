
import './button.css'
function Button(props) {
  return (
    <div className={`${props.className}`}>
      {props.filled ?
        <button
          style={props.style}
          type={props.type ? props.type : "button"}
          className={`btn button-container button-filled ${props.className}`}
          onClick={props.onClick}
          disabled={props.loading}
        >
          {props.text}
        </button>
        :

        <>

          {props.img ?
            <button
              style={props.style}
              type={props.type ? props.type : "button"}
              className={`btn button-container  button-image ${props.className}`}
              onClick={props.onClick}
              disabled={props.loading}
            >
              {props.icon ? props.icon : <img src={props.img} />}&ensp;{props.text}</button> :

            <button
              style={props.style}
              type={props.type ? props.type : "button"}
              className={`btn button-container button-nonfilled ${props.className}`}
              onClick={props.onClick}
              disabled={props.loading}
            >
              {props.text}
            </button>
          }
        </>
      }

    </div>
  );
}

export default Button;

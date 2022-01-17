
import './tag.css'
import { Tag } from 'antd';

function Taag(props) {
  return (

    <div className={`container ${props.className}`} >
      {props.img ? <Tag className="d-flex align-items-center" color={props.color}><p className={`mb-0 ${props.textClass}`}>{props.text}</p>{props.icon ? props.icon : <img src={props.img} className="imageTag" onClick={props.onClick} />}</Tag> : <Tag className={props.textClass} color={props.color}>{props.text}</Tag>}
    </div>
  );
}

export default Taag;


import './checkBox.css'
import { Checkbox } from 'antd'
export default function CheckBox(props) {
  return (
    <div className={`d-flex ${props.className}`}>
      <Checkbox className={`check ${props.classText}`} checked={props.checked} value={props.value} onChange={(e) => props.onChange(e.target.checked)} >{props.text}</Checkbox>
    </div>
  );
}



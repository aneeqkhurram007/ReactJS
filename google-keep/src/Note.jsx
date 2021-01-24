import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <React.StrictMode>
            <div className="card" style={{
                margin: "0 30% 30% 30%",
                position: "relative",
                right: "20%",
                color:"black"
            }}>
                <div className="card-body">

                    <h3 className="card-title" >{props.title}</h3>

                    <p className="card-text" >{props.content} </p>
                    <Button onClick={deleteNote} style={{border:"1px solid black"}} >
                        <DeleteRoundedIcon />
                    </Button>
                </div>

            </div>
        </React.StrictMode>
    );
}
export default Note;
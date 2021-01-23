import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
const Note = (props) => {
   
   const deleteNote=()=>{
       props.deleteItem(props.id);
   }
    return (
        <React.StrictMode>
            <div>
                <h3>{props.title}</h3>

                <p>{props.content} </p>
                <Button onClick={deleteNote}>
                    <DeleteRoundedIcon />
                </Button>
            </div>
        </React.StrictMode>
    );
}
export default Note;
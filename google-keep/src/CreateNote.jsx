import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const InputEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevItem) => {
            return {
                ...prevItem,
                [name]: value,
            };
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
    }
    return (
        <React.StrictMode>
            <div style={{ margin: "10%" }}>
                <form>
                    <input type="text" className="form-control" style={{ borderBottom: "0" }} placeholder="Title" name="title" autoComplete="off" value={note.title} onChange={InputEvent} />

                    <textarea rows="" className="form-control" style={{
                        height: "100px",
                        borderTop: "0"
                    }} column="" name="content" placeholder="Write a Note" value={note.content} onChange={InputEvent} >

                    </textarea>

                    <Button onClick={addEvent} className="btn btn-dark" style={{
                        position: "relative",
                        left: "45%",

                    }} >
                        <AddCircleOutlineRoundedIcon style={{
                            fontSize: "4em"
                        }} />
                    </Button>
                </form>
            </div>

        </React.StrictMode>
    );
}
export default CreateNote;
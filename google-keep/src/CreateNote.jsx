import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
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
            title:"",
            content:""
        })
    }
    return (
        <React.StrictMode>
            <div>
                <form>
                    <input type="text" placeholder="Title" name="title" autoComplete="off" value={note.title} onChange={InputEvent} />
                    <br />
                    <textarea rows="" column="" name="content" placeholder="Write a Note" value={note.content} onChange={InputEvent} >

                    </textarea>
                    <br />
                    <Button onClick={addEvent}>
                        <AddCircleOutlineRoundedIcon />
                    </Button>
                </form>
            </div>

        </React.StrictMode>
    );
}
export default CreateNote;
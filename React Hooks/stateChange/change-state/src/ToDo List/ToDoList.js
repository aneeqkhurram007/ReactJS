import React, { useState } from 'react'
import image from '../Images/Google_Keep_icon128_(2015-2020).svg.png';
import { MdAdd, MdDelete } from "react-icons/md";
const ToDoList = () => {

    const [state, setstate] = useState(
        {

            arr: [
                {
                    id: "",
                    value: ""
                }
            ],
            item: ""
        }
    )
    const itemChange = (e) => {
        let value = e.target.value;
        setstate({ ...state, item: value });
    }
    const { arr } = state;

    return (
        <>
            <div>
                <h1>To Do List</h1>
                <div>
                    <figure>
                        <img src={image} alt="todo list" />
                        <figcaption>Add your list here</figcaption>
                    </figure>


                </div>
                <div>
                    <input type="text" placeholder="Add"
                        onChange={itemChange} value={state.item} />
                    <i title="Add Item" style={{ cursor: "pointer" }}
                        onClick={() => {

                            setstate({
                                ...state,
                                arr: [...state.arr, { id: Date.now(), value: state.item }],
                                item: ""
                            })


                        }} >
                        <MdAdd />
                    </i>
                </div>
                <div>

                    {

                        arr.map((currVal) => {
                            const { id, value } = currVal
                            return (
                                <div key={id} >
                                    <h4>{value}</h4>
                                    <i title="Delete Item"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setstate({ ...state, arr: arr.filter((ele) => id !== ele.id) })}  >
                                        <MdDelete />
                                    </i>
                                </div>

                            )
                        })}
                </div>
                <div>
                    <button className="btn btn-danger"
                        onClick={() => setstate({ ...state, arr: [] })} >
                        <span>Remove All</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default ToDoList

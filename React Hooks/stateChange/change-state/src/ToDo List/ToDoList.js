import React, { useState, useEffect } from 'react'
import image from '../Images/Google_Keep_icon128_(2015-2020).svg.png';
import { MdAdd, MdDelete } from "react-icons/md";
import './ToDoList.css'

const getLocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}
const ToDoList = () => {

    // const [state, setstate] = useState(
    //     {

    //         arr: [
    //             {
    //                 id: "",
    //                 value: ""
    //             }
    //         ],
    //         item: ""
    //     }
    // )
    const [temp, settemp] = useState("")
    const [state, setstate] = useState(getLocalItems())
    const itemChange = (e) => {
        let value = e.target.value;
        settemp(value);
    }
    // let temp;
    useEffect(() => {
        // const input = document.getElementById("input");
        // input.value = "";
        // const i = document.querySelector("i");
        // i.addEventListener('click', () => {
        //     temp = input.value;
        // })
        localStorage.setItem('lists', JSON.stringify(state))
    }, [state])

    return (
        <>
            <div className="mainDiv">
                <h1>To Do List</h1>
                <div className="image">
                    <figure>
                        <img src={image} alt="todo list" />
                        <figcaption>Add your list here</figcaption>
                    </figure>


                </div>
                <div className="inputDiv">
                    <input type="text" placeholder="Add"
                        onChange={itemChange} value={temp} id="input" />
                    <i title="Add Item" style={{ cursor: "pointer" }}
                        onClick={() => {
                            if (temp) {
                                setstate([...state, temp])
                                settemp("");
                            }
                        }} >
                        <MdAdd />
                    </i>
                </div>
                <div className="outputDiv">

                    {
                        state.map((currVal, index) => {

                            return (
                                <div key={index} >
                                    <h4>{currVal}
                                        <i title="Delete Item"
                                            style={{ cursor: "pointer", marginLeft: "2%" }}
                                            onClick={() => setstate(state.filter(ele => currVal !== ele))} >
                                            <MdDelete />
                                        </i>
                                    </h4>

                                </div>

                            )
                        })}
                </div>
                <div className="button">
                    <button className="btn btn-danger"
                        onClick={() => setstate([])} >
                        <span>Remove All</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default ToDoList

import React, { useState, useEffect } from 'react'
import image from '../Images/Google_Keep_icon128_(2015-2020).svg.png';
import { MdAdd, MdDelete, MdBorderColor } from "react-icons/md";
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
let inputVal;
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
    const [main, setMain] = useState({
        temp: "",
        state: getLocalItems(),
        show: true
    })
    // const [temp, settemp] = useState("")
    // const [state, setstate] = useState(getLocalItems())
    // const [show, setshow] = useState(true)
    const itemChange = (e) => {
        let value = e.target.value;
        setMain({ ...main, temp: value });
    }
    // let temp;
    useEffect(() => {
        // const input = document.getElementById("input");
        // input.value = "";
        // const i = document.querySelector("i");
        // i.addEventListener('click', () => {
        //     temp = input.value;
        // })
        localStorage.setItem('lists', JSON.stringify(main.state))
    }, [main])

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
                        onChange={itemChange} value={main.temp} id="input" />
                    {
                        main.show ?
                            <i title="Add Item" style={{ cursor: "pointer" }}
                                onClick={() => {
                                    const { state, temp } = main;
                                    if (main.temp) {
                                        // setstate([...state, temp])
                                        // settemp("");
                                        setMain({ ...main, state: [...state, { id: Date.now(), value: temp }], temp: "" })
                                    }
                                }} >
                                <MdAdd />
                            </i>
                            :
                            <i title="Edit Item" style={{ cursor: "pointer" }}
                                onClick={() => {
                                    const { state, temp, } = main;

                                    if (temp) {
                                        // const inputVal = document.getElementById('input').value;

                                        // console.log(state.indexOf(inputVal));
                                        setMain({
                                            ...main, state: state.map((curr) => {
                                                if (curr.id === inputVal) {
                                                    curr.value = temp
                                                }
                                                return curr;
                                            })
                                            , temp: "",
                                            show: true
                                        }

                                        )
                                        // settemp("");
                                        // setshow(true);
                                    }
                                }} >
                                <MdBorderColor />
                            </i>

                    }
                </div>
                <div className="outputDiv">

                    {
                        main.state.map((currVal) => {
                            const { id, value } = currVal;
                            return (
                                <div key={id} >
                                    <h4>{value}

                                        <i title="Edit Itme" style={{ cursor: "pointer", paddingLeft: "5%" }}
                                            onClick={() => {
                                                setMain({ ...main, show: false, temp: value })
                                                // setshow(false);
                                                // settemp(currVal);
                                                inputVal = id
                                                // setstate(state.filter(ele => currVal !== ele))
                                            }}
                                        >
                                            <MdBorderColor />
                                        </i>

                                        <i title="Delete Item"
                                            style={{ cursor: "pointer", marginLeft: "2%" }}
                                            onClick={() => setMain({ ...main, state: main.state.filter(ele => value !== ele.value) })} >
                                            <MdDelete />
                                        </i>
                                    </h4>

                                </div>

                            )
                        })}
                </div>
                <div className="button">
                    <button className="btn btn-danger"
                        onClick={() => setMain({ ...main, state: [] })} >
                        <span>Remove All</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default ToDoList

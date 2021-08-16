import React, { useState } from 'react'
import { addTodo, delTodo, clearAll, editTodo, changeButton } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { IoAdd, IoTrash, IoPencil } from "react-icons/io5";
const ToDo = () => {
    const [state, setstate] = useState('')
    const list = useSelector(state => state.todoReducers)
    const dispatch = useDispatch()
    const buttonReducer = useSelector(state => state.buttonReducer)
    const [id, setid] = useState(0)

    return (
        <>



            <div className="container">
                <div style={{ borderStyle: "solid", borderRadius: "5px" }}>
                    <div>
                        <h1
                            className="font-monospace"
                            style={{
                                borderStyle: "solid",
                                borderColor: "rgb(255, 255, 255)",
                                borderTopColor: "rgb(255,255,255)",
                                borderRightColor: "rgb(255, 255, 255)",
                                borderBottomColor: "rgb(255, 255, 255)",
                                borderLeftColor: "rgb(255, 255, 255",
                                fontSize: "45px",
                                borderRadius: "5px"

                            }} >
                            To Do List&nbsp;
                        </h1>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <input
                            className="bg-white bg-gradient border-light shadow-sm"
                            type="text"
                            placeholder="Add Items..."
                            value={state}
                            onChange={(event) => setstate(event.target.value)}
                            style={{ padding: "1px 2px", borderStyle: "solid", borderRadius: "5px" }}
                        /><i style={{ padding: "10px" }} >
                            {buttonReducer ? <IoAdd onClick={() => {
                                if (state) dispatch(addTodo(state), setstate(''))
                                else alert("Please enter a value")


                            }} /> :
                                <IoPencil onClick={() => {

                                    dispatch(editTodo(id, state), setstate(''))
                                    dispatch(changeButton())
                                }} />}
                        </i>
                    </div>
                    {
                        list.map((elem) => {
                            return (
                                <div key={elem.id} className="d-flex" style={{ padding: "10px", margin: "auto", justifyContent: "center" }}>
                                    <h3 style={{ padding: "10px" }}>{elem.data}</h3>
                                    <i style={{ padding: "14px" }} onClick={() => {
                                        setid(elem.id)
                                        console.log(id);
                                        dispatch(changeButton(), setstate(elem.data))
                                    }
                                    }>
                                        <IoPencil />
                                    </i>
                                    <i style={{ padding: "14px" }} onClick={() => dispatch(delTodo(elem.id))}>
                                        <IoTrash />
                                    </i>
                                </div>
                            )
                        })

                    }
                    <div>
                        <button className="btn btn-light" style={{ padding: "2px", margin: "5px" }} onClick={() => dispatch(clearAll())}>Clear All</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ToDo

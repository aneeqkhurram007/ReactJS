import React, { useState } from 'react'
import { addTodo, delTodo, clearAll } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { IoAdd, IoTrash } from "react-icons/io5";

const ToDo = () => {
    const [state, setstate] = useState('')
    const list = useSelector(state => state.todoReducers)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <div>
                    <figure>
                        <figcaption>To Do App</figcaption>
                    </figure>
                    <div>
                        <input type="text" placeholder="Add Items..." value={state}
                            onChange={(event) => setstate(event.target.value)} />
                        <i onClick={() => dispatch(addTodo(state), setstate(''))}>
                            <IoAdd />
                        </i>
                    </div>
                    <div>
                        {
                            list.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <i onClick={() => dispatch(delTodo(elem.id))}>
                                            <IoTrash />
                                        </i>

                                    </div>
                                )
                            })
                        }

                    </div>
                    <div>
                        <button onClick={() => dispatch(clearAll())}>Clear All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo

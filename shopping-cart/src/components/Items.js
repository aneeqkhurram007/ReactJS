import React from 'react'

const Items = (props) => {
    return (
        <>
            <div>

                <div>
                    <img src={props.img} alt="temp" />
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div>
                    <i>-</i>
                    <input type="text" placeholder="2" />
                    <i>+</i>
                </div>
                <div>
                    <h3>{props.price} </h3>
                </div>
                <div>
                    <i>delete</i>
                </div>

            </div>

            <hr />


        </>
    )
}

export default Items

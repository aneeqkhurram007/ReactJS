import React, { useState } from 'react'
import Menu from './menu'
function GalleryReact() {
    const [state, setstate] = useState(Menu)
    function filter(category) {
        setstate(Menu.filter((ele) => category === ele.category))
    }
    const category = Array.from(new Set(Menu.map((ele) => ele.category).values()));

    return (
        <>
            <h1>Order Menu</h1>
            <hr />
            <div>
                <div className="d-flex justify-content-around">
                    {
                        category.map((ele, i) => <button key={i} className="btn btn-warning" onClick={() => filter(ele)}>{ele}</button>
                        )
                    }
                    <button className="btn btn-warning" onClick={() => setstate(Menu)}>All</button>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="coll-11 mx-auto">
                        <div className="row my-5">
                            <div className="col-12 col-md-6 col-lg-6 col-cl-4 ">
                                {state.map((ele) => {
                                    const { id, name } = ele
                                    return (
                                        <div className="row" key={id}>
                                            <div className="col-12 col-md-12 col-lg-4">
                                                <img className="img-fluid" src="" alt="" />
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-8">
                                                <div className="pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error totam tenetur facere temporibus! Distinctio eveniet impedit tenetur, veritatis rerum officiis sit mollitia commodi rem. Minus dolores voluptatum in neque illo?</p>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryReact

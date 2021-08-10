import React, { useState } from 'react'
import Menu from './menu'
import Header from './Header';
import Items from './Items';
function GalleryReact() {
    const [state, setstate] = useState(Menu)
    function filter(category) {
        if (category === 'all') {
            setstate(Menu);
            return;
        }
        setstate(Menu.filter((ele) => category === ele.category))
    }
    // const category = Array.from(new Set(Menu.map((ele) => ele.category).values()));
    const category = [...new Set(Menu.map((ele) => ele.category).values()), "all"];
    return (
        <>

            <h1>Order Menu</h1>
            <hr />
            <Header category={category} filter={filter} />
            <Items state={state} />
        </>
    )
}

export default GalleryReact

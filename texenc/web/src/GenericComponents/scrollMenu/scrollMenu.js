
import React from 'react';
import { leftArrow, rightArrow, menuIcon } from './../../Imports/images'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Button } from '../../Imports/genericComponents';

import './scrollMenu.css'

function ScrollingMenu(props) {


    const { html } = props
    const getItems = () =>
        Array(1)
            .fill(0)
            .map((_, ind) => ({ id: `element-${ind}` }));


    const [items, setItems] = React.useState(getItems());
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);


    function Item({ onClick, selected, title, itemId }) {
        const visibility = React.useContext(VisibilityContext);

        return (
            <>
                {html}
            </>
        );
    }





    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    return (
        <div className='card scroll-body w-100'>
            <div className='card-body'>
                <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {items.map(({ id }) => (
                        <Item
                            itemId={id} // NOTE: itemId is required for track items
                            title={id}
                            key={id}
                            onClick={handleClick(id)}
                            selected={isItemSelected(id)}
                        />
                    ))}
                </ScrollMenu>
            </div>
        </div>
    );
}








////////Related Function
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <>
            <button
                className='btn slide-button'
                // style={{
                //     display: isFirstItemVisible ? "none" : "block",
                // }}
                disable={isFirstItemVisible}
                onClick={() => scrollPrev()}
            >
                <img src={leftArrow} alt='leftArrow' />
            </button>
        </>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
        <>
            <button
                // style={{
                //     display: isLastItemVisible ? "none" : "block",
                // }}
                className='btn slide-button ml-1'
                onClick={() => scrollNext()}
            >
                <img src={rightArrow} alt='rightArrow' />
            </button>
            <button
                // style={{
                //     display: isLastItemVisible ? "none" : "block",
                // }}
                className='btn slide-Menu-button ml-1'
            >
                <img src={menuIcon} alt='menuButton' />
            </button>
        </>
    );
}
export default ScrollingMenu;
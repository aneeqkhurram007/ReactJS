import React, { useEffect } from 'react'
import StyledButton from '../Styled/StyledButton'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved Data to Cloud!');
        }, 1000);
        return () => {
            console.log('[Conckpit.js] cleanup in useEffect');
        }

    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Conckpit.js] cleanup work in 2nd useEffect");
        }
    })

    const classes = [];

    if (props.people.length <= 2) {
        classes.push('red');
    }

    if (props.people.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>Hi I'm React</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <hr />
            <StyledButton alt={props.toggle} onClick={props.toggleChange} >Toggle State</StyledButton>

        </div>
    );
}
export default Cockpit;
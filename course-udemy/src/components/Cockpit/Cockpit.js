import React from 'react'
import StyledButton from '../Styled/StyledButton'

const Cockpit = (props) => {
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
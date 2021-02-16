import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]


const buildControls = (props) => {
    return (<div className={classes.BuildControls}>
        <strong>Current Price : {props.price.toFixed(2)}</strong>
        {
            controls.map(ctrl => (
                <BuildControl
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    key={ctrl.label}
                    disabled={props.disabled[ctrl.type]}
                    label={ctrl.label} />
            ))
        }
        <button
            className={classes.OrderButton}
            onClick={props.ordered}
            disabled={!props.purchasable} >ORDER NOW</button>
    </div>
    )
}
export default buildControls;
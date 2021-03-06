import React from 'react';

import classes from './BurgerControl';

const BurgerControl= (props)=>(
    <div className={classes.BurgerControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>
    </div>
)

export default BurgerControl;
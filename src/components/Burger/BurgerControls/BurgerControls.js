import React from 'react';

import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.css';

const controls= [
    {label: 'Meat', type:'meat'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'}
]
const burgerControls= (props)=>{
    return (
        <div className={classes.BuildControls}>
            {
                controls.map(ctrl=> <BurgerControl 
                    add={()=>props.addIngredient(ctrl.type)}
                    key={ctrl.label} 
                    type={ctrl.label}/>)
            }
        </div>
    );
}

export default burgerControls;
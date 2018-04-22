import React from 'react';

import BurgerIgredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css';

const burger= (props) =>{
    const transformedIngredients= Object.keys(props.ingredients)
        .map( igKey =>{
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIgredients key={igKey+i} type={igKey}/>
            })
        })
    return (
        <div className={classes.Burger}>
            <BurgerIgredients type="bread-top"/>
            {transformedIngredients}         
            <BurgerIgredients type="bread-bottom"/>
        </div>
    )
}

export default burger;
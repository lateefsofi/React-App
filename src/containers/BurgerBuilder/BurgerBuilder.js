import React, {Component} from 'react';

import Aux from '../../hoc/AuxContainer';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

const INGREDIENT_PRICE= {
    meat: 2,
    salad: 1,
    cheese: 1.5
}
export class BurgerBuilder extends Component{
    state= {
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0
        }, 
        totalPrice: 0
    }

    addIngredientHandler= (type)=>{
        console.log('Addded')
        const updatedINgredients=  {... this.state.ingredients};
        updatedINgredients[type] +=1;
        let price= this.state.totalPrice;
        price += INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedINgredients,
            totalPrice: price
        })
    }

    removeIngredient(type){
        const updatedINgredients= {...this.state.ingredients};

        updatedINgredients[type]>0?updatedINgredients[type] -=1: null;
        let price= this.state.totalPrice;
        price += INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedINgredients,
            totalPrice: price
        })
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls addIngredient={this.addIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;
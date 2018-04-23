import React, {Component} from 'react';

import Aux from '../../hoc/AuxContainer';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

export class BurgerBuilder extends Component{
    state= {
        ingredients: {
            meat: 2,
            salad: 1,
            cheese: 2
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;
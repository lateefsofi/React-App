import React, {Component} from 'react';

import Aux from '../../hoc/AuxContainer';
import Burger from '../../components/Burger/Burger';

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
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
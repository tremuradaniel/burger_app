import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return (
            <Auxiliary>
                <div>Graphical representation of the burger</div>
                <Burger ingredients={ this.state.ingredients } />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;

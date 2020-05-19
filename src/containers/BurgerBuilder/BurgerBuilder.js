import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxiliary>
                <div>Graphical representation of the burger</div>
                <Burger />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;

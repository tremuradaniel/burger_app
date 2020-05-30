import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class component
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update');
    }
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey + 'summary'}>
                    <span 
                        style={{textTransform: "capitalize"}}
                        key={igkey + 'summary'}
                    >{igkey}</span>: {this.props.ingredients[igkey]}
                </li>)
        });
        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price</strong>: $ {this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseCotinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
};

export default  OrderSummary;
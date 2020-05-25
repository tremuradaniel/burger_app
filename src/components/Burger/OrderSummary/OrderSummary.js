import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey + 'summary'}>
                    <span 
                        style={{textTransform: "capitalize"}}
                        key={igkey + 'summary'}
                    >{igkey}</span>: {props.ingredients[igkey]}
                </li>)
        });
    
    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price</strong>: $ {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseCotinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default  orderSummary;
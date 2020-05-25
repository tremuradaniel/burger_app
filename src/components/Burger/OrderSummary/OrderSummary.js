import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li>
                    <span 
                        style={{textTransform: "capitalize"}}
                        key={igkey}
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
            <p>Continue to checkout?</p>
        </Auxiliary>
    );
};

export default  orderSummary;
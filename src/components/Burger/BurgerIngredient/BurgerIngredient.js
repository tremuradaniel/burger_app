import React from 'react';

import classes from './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'breadBottom':
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case 'breadTop':
            ingredient = (
                <div className={classes.BreadBottom}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case 'salad':
            ingredient = <div className={classes.Salad}></div>;
            break;
        case 'bacon':
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
            break;
    }

    return ingredient;
};

export default burgerIngredient;
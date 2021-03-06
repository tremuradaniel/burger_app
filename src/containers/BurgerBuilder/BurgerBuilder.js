import React, { Component } from "react";
import axios from '../../axios-orders';
import { connect } from 'react-redux'; 
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    componentDidMount () {
       this.props.onInitIngredients();
    }

    updatePurchaseState (updatedIngredients) {
        const ingredients = {
            ...updatedIngredients
        }
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            })
        return sum > 0
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState( { purchasing: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }

        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    
    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Fatal error - cannot get ingredients</p> : <Spinner />

        if (this.props.ings) {
            burger =  (
                <Auxiliary>
                    <Burger ingredients={ this.props.ings } />
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        isAuth={this.props.isAuthenticated}
                        purchaseble={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                    />
                </Auxiliary>
            );
            orderSummary = 
                <OrderSummary 
                    ingredients={this.props.ings}
                    price={this.props.price}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseCotinued={this.purchaseContinueHandler}                        
                ></OrderSummary>;
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

const mapStateTopProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => {
            dispatch(actions.addIngredient(ingName))
        },
        onIngredientRemoved: (ingName) => {
            dispatch(actions.removeIngredient(ingName))
        },
        onInitIngredients: () => {
            dispatch(actions.initIngredients())
        },
        onInitPurchase: () => {
            dispatch(actions.purchaseInit())
        },
        onSetAuthRedirectPath: (path) => {
            dispatch(actions.setAuthRedirectPath(path))
        }
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

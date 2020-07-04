import React, { Component } from 'react';
import { 
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/AsyncComponent/AsyncComponent';

import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() =>{
  return import('./containers/Checkout/Checkout')
});

const asyncOrders = asyncComponent(() =>{
  return import('./containers/Checkout/Orders/Orders')
});

const asyncAuth = asyncComponent(() =>{
  return import('./containers/Auth/Auth')
});
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={asyncAuth}></Route>
        <Route path="/" exact component={BurgerBuilder}></Route>
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/orders" exact component={asyncOrders}></Route>
          <Route path="/logout" exact component={Logout}></Route>
          <Route path="/checkout" component={asyncCheckout}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
          <Route path="/auth" exact component={asyncAuth}></Route>
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          <h1>Burger Builder</h1>
          {routes}
        </Layout>
      </div>
    )
  }
}

const mapStateTopProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateTopProps, mapDispatchToProps)(App));

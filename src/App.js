import React, { Component } from 'react';
import { 
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={Auth}></Route>
        <Route path="/" exact component={BurgerBuilder}></Route>
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/orders" exact component={Orders}></Route>
          <Route path="/logout" exact component={Logout}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
          <Route path="/auth" exact component={Auth}></Route>
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

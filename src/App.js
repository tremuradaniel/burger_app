import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <h1>Burger Builder</h1>
          <Route path="/" exact component={BurgerBuilder}></Route>
          <Route path="/orders" exact component={Orders}></Route>
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Layout>
      </div>
    )
  }
}

export default App;

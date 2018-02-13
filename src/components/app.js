import React, { Component } from 'react';
import ProductsList from '../containers/products_list';
import ProductDetail from '../containers/product_detail';
import Greeting from '../containers/greeting';

export default class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <ProductsList />
        <ProductDetail />
      </div>
    );
  }
}

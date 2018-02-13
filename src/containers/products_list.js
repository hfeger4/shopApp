import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct } from '../actions/index';

class ProductsList extends Component{
  renderList(){
    return this.props.products.map((product) => {
      return(
        <li
            key={product.name + product.price}
            onClick={ () => this.props.selectProduct(product)}
            className="list-group-item">{product.name}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
      <div>Shop our featured collection</div>
        <ul className="list-group col-sm-4">
        {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

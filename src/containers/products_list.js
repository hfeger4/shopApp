import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct } from '../actions/index';
import Masonry from 'react-masonry-component';


class ProductsList extends Component{
  renderList(){
    return this.props.products.map((product) => {
      let url = `src/images/${product.filename}`;
      return(
        <li
            key={product.name + product.price}
            onClick={ () => this.props.selectProduct(product)}>
            <img className="images" src={url}/>
            {product.name}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
      <div>Shop our featured collection</div>
        <ul className="list-pictures">
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

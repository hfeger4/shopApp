import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {
  render(){
    if(!this.props.product){
      return <div>product info displayed here</div>;
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>Name: {this.props.product.name}</div>
        <div>Price: {this.props.product.price}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    product: state.activeProduct
  };
}

export default connect(mapStateToProps)(ProductDetail);

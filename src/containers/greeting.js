import React, {Component} from 'react';

class Greeting extends Component{
  render(){
    return(
      <div className="greeting">
        <div><i className="fa fa-shopping-cart fa-2x"></i> Cart.ly</div>
        <div>Your Cart <button>0</button></div>
      </div>
    );
  }
}

export default Greeting;

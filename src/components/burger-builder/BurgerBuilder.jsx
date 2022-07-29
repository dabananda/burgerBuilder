import React, { Component } from 'react';
import Burger from './burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      // { type: 'bread-bottom', amount: 1 },
      { type: 'cheese', amount: 0 },
      { type: 'meat', amount: 0 },
      { type: 'salad', amount: 0 },
      // { type: 'bread-top', amount: 1 },
    ],
  };
  render() {
    const { ingredients } = this.state;
    return (
      <div className="container">
        <Burger ingredients={ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;

import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './burger/Burger';
import Controls from './controls/Controls';
import Summary from './summary/Summary';
import { useNavigate } from 'react-router-dom';

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: 'cheese', amount: 0 },
      { type: 'meat', amount: 0 },
      { type: 'salad', amount: 0 },
    ],
    price: 0,
    isModalOpen: false,
    isSummaryDisabled: true,
  };

  PRICES = {
    cheese: 30,
    meat: 80,
    salad: 20,
  };

  isSummaryDisabledHandler = ingredients => {
    const sum = ingredients.reduce((sum, element) => {
      return (sum += element.amount);
    }, 0);

    this.setState({
      isSummaryDisabled: !(sum > 0),
    });
  };

  moreIngredientsHandler = type => {
    const items = [...this.state.ingredients];
    const newPrice = this.state.price + this.PRICES[type];
    for (let item of items) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({
      ingredients: items,
      price: newPrice,
    });
    this.isSummaryDisabledHandler(items);
  };

  lessIngredientsHandler = type => {
    const items = [...this.state.ingredients];
    let newPrice;
    for (let item of items) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
        newPrice = this.state.price - this.PRICES[type];
      }
    }
    this.setState({
      ingredients: items,
      price: newPrice,
    });
    this.isSummaryDisabledHandler(items);
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  checkout = () => {
    // let navigate = useNavigate()
    this.props.navigate('/checkout');
  };

  render() {
    const { ingredients, isSummaryDisabled } = this.state;

    return (
      <div>
        <div className="container d-flex flex-md-row flex-column">
          <Burger ingredients={ingredients} />
          <Controls
            price={this.state.price}
            isSummaryDisabled={isSummaryDisabled}
            moreIngredientsHandler={this.moreIngredientsHandler}
            lessIngredientsHandler={this.lessIngredientsHandler}
            toggleModal={this.toggleModal}
          />
        </div>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader>Your Order Summery</ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.state.price.toFixed(0)}</h5>
            <Summary ingredients={ingredients} />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={this.checkout}>
              Continue
            </button>
            <button className="btn btn-danger" onClick={this.toggleModal}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// function WithNavigate(props) {
//   let navigate = useNavigate();
//   return <BurgerBuilder {...props} navigate={navigate} />;
// }

// export default BurgerBuilder;

export default function (props) {
  const navigate = useNavigate();
  return <BurgerBuilder {...props} navigate={navigate} />;
}

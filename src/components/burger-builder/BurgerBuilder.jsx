import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Burger from './burger/Burger';
import Controls from './controls/Controls';
import Summary from './summary/Summary';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  lessIngredients,
  moreIngredients,
  updatePurchaseable,
} from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.price,
    purchaseable: state.purchaseable,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moreIngredients: ingredient => dispatch(moreIngredients(ingredient)),
    lessIngredients: ingredient => dispatch(lessIngredients(ingredient)),
    updatePurchaseable: () => dispatch(updatePurchaseable()),
  };
};

class BurgerBuilder extends Component {
  state = {
    isModalOpen: false,
  };

  moreIngredientsHandler = type => {
    this.props.moreIngredients(type), this.props.updatePurchaseable();
  };

  lessIngredientsHandler = type => {
    this.props.lessIngredients(type), this.props.updatePurchaseable();
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  checkoutHandler = () => {
    this.props.navigate('/checkout');
  };

  render() {
    return (
      <div>
        <div className="container d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            price={this.props.price}
            purchaseable={this.props.purchaseable}
            moreIngredientsHandler={this.moreIngredientsHandler}
            lessIngredientsHandler={this.lessIngredientsHandler}
            toggleModal={this.toggleModal}
          />
        </div>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader>Your Order Summery</ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.props.price.toFixed(0)}</h5>
            <Summary ingredients={this.props.ingredients} />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={this.checkoutHandler}>
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

// export default BurgerBuilder;
function navigation(props) {
  const navigate = useNavigate();
  return <BurgerBuilder {...props} navigate={navigate} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation);

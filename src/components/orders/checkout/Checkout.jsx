import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import Spinner from '../../spinner/Spinner';
import { resetIngredients } from '../../../redux/actionCreators';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.price,
    purchaseable: state.purchaseable,
    userId: state.userId,
    token: state.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetIngredients: () => dispatch(resetIngredients()),
  };
};

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: '',
      phone: '',
      paymentType: 'Cash On Delivery',
    },
    isLoading: false,
    isOpen: false,
    modalMessage: '',
  };

  goBackHandler = () => {
    this.props.navigate('/');
  };

  inputChangeHandler = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    const orderDetails = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: this.state.values,
      time: new Date(),
      userId: this.props.userId,
    };

    // creating orderDetails on google firebase
    axios
      .post(
        'https://burger-builder-c9b33-default-rtdb.asia-southeast1.firebasedatabase.app/orderDetails.json?auth=' +
          this.props.token,
        orderDetails
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isLoading: false,
            isOpen: true,
            modalMessage: 'Orderd Successfully 🤩',
          });
          this.props.resetIngredients();
        } else {
          this.setState({
            isLoading: false,
            isOpen: true,
            modalMessage: 'Something went wrong!!! Please order again.',
          });
        }
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isOpen: true,
          modalMessage: 'Something went wrong!!! Please order again.',
        });
      });
  };

  render() {
    const form = (
      <div>
        <h3 className="my-3">Total: {this.props.price} TK</h3>
        <form>
          <select
            name="paymentType"
            value={this.state.values.paymentType}
            className="form-select form-select-lg mb-3"
            onChange={event => this.inputChangeHandler(event)}>
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Online Payment">Online Payment</option>
          </select>
          <div className="form-floating mb-3">
            <input
              name="phone"
              value={this.state.values.phone}
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              onChange={event => this.inputChangeHandler(event)}
            />
            <label>Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              name="deliveryAddress"
              value={this.state.values.deliveryAddress}
              className="form-control"
              placeholder="Delivery Address"
              onChange={event => this.inputChangeHandler(event)}
              style={{ height: '100px' }}
            />
            <label>Delivery Address</label>
          </div>
          <button
            className="btn btn-secondary me-2"
            onClick={this.goBackHandler}>
            Go Back
          </button>
          <button
            className="btn"
            onClick={event => this.submitHandler(event)}
            disabled={this.props.purchaseable}
            style={{ backgroundColor: '#D70F64', color: '#fff' }}>
            Place Order
          </button>
        </form>
      </div>
    );

    return (
      <div className="container">
        {this.state.isLoading ? <Spinner /> : form}
        <Modal
          isOpen={this.state.isOpen}
          centered={true}
          onClick={this.goBackHandler}>
          <ModalBody>{this.state.modalMessage}</ModalBody>
        </Modal>
      </div>
    );
  }
}

function navigator(props) {
  const navigate = useNavigate();
  return <Checkout {...props} navigate={navigate} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(navigator);

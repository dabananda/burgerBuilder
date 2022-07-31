import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: '',
      phone: '',
      paymentType: 'Cash On Delivery',
    },
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
  };

  render() {
    return (
      <div className="container">
        <h3 className="mb-4 mt-3">Checkout</h3>
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
            style={{ backgroundColor: '#D70F64', color: '#fff' }}>
            Place Order
          </button>
        </form>
      </div>
    );
  }
}

function navigator(props) {
  const navigate = useNavigate();
  return <Checkout {...props} navigate={navigate} />;
}

export default navigator;

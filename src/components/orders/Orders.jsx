import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreators';
import Order from './Order';
import Spinner from '../spinner/Spinner.jsx';

const mapStateToProps = state => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError,
    token: state.token,
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
  };
};
class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  }
  render() {
    let orders = null;
    if (this.props.orderError) {
      orders = (
        <div className="card mt-5 text-center">
          <div className="card-body">
            <h3>Ops! Failed to load orders ☹</h3>
          </div>
        </div>
      );
    } else {
      if (this.props.orders.length === 0) {
        orders = (
          <div className="card mt-5 text-center">
            <div className="card-body">
              <h3>You have no order ☹</h3>
            </div>
          </div>
        );
      } else {
        orders = this.props.orders.map(order => {
          return <Order order={order} key={order.id} />;
        });
      }
    }

    return (
      <div className="container">
        {this.props.orderLoading ? <Spinner /> : orders}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

import React from 'react';

const Order = props => {
  const { order } = props;
  let ingredients = order.ingredients.map(ingredient => {
    return (
        <span
          className="border rounded p-1 px-2 me-2"
          key={ingredient.type}
          style={{ textTransform: 'capitalize' }}>
          {ingredient.type} X {ingredient.amount}
        </span>
    );
  });
  return (
    <div className="card my-3">
      <div className="card-body">
        <p>Order ID: {order.id}</p>
        <p>Ingredients: {ingredients}</p>
        <p>Total Price: {order.price}</p>
        <p>Payment Type: {order.customer.paymentType}</p>
        <p>Phone: {order.customer.phone}</p>
        <p>Delivery Adress: {order.customer.deliveryAddress}</p>
        <p className="mb-0">Order Time: {order.time}</p>
      </div>
    </div>
  );
};

export default Order;

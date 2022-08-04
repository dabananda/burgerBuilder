import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerBuilder from './burger-builder/BurgerBuilder';
import Header from './header/Header';
import Orders from './orders/Orders';
import Checkout from './orders/checkout/Checkout';
import Auth from './auth/Auth';

const MainComponent = props => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default MainComponent;

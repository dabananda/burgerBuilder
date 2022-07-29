import React from 'react';
import BurgerBuilder from './burger-builder/BurgerBuilder';
import Header from './header/Header';

const MainComponent = (props) => {
  return (
    <div>
      <Header />
      <BurgerBuilder />
    </div>
  );
};

export default MainComponent;
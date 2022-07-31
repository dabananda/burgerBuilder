import React from 'react';
import Ingredient from '../ingredient/Ingredient';

const Burger = props => {
  const { ingredients } = props;
  let innerIngredients = ingredients
    .map(ingredient => {
      const ingredientAmount = [...Array(ingredient.amount).keys()];
      return ingredientAmount.map(() => {
        return <Ingredient type={ingredient.type} key={Math.random()} />;
      });
    })
    .reduce((arr, item) => {
      return arr.concat(item);
    }, []);

  if (innerIngredients.length === 0) {
    innerIngredients = (
      <p className="text-center my-3">Please add some ingredients</p>
    );
  }

  return (
    <div
      className="my-5 overflow-auto"
      style={{
        maxHeight: '300px',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
      }}>
      <Ingredient type="bread-top" />
      {innerIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

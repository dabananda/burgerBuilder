import React from 'react';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
];

const BuildControl = props => {
  const { moreIngredientsHandler, lessIngredientsHandler } = props;

  return (
    <div className="text-dark d-flex justify-content-between my-2">
      <div>{props.label}</div>
      <div>
        <button
          className="btn btn-success mx-1"
          onClick={moreIngredientsHandler}>
          More
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={lessIngredientsHandler}>
          Less
        </button>
      </div>
    </div>
  );
};

const Controls = props => {
  const { price, purchaseable } = props;
  const { moreIngredientsHandler, lessIngredientsHandler, toggleModal } = props;
  console.log(purchaseable);

  return (
    <div
      className="card text-center w-75 my-5 mx-auto text-light"
      style={{ background: '#D70F64' }}>
      <div className="card-header">Add Ingredients</div>
      <div className="card-body bg-light">
        {controls.map(item => {
          return (
            <BuildControl
              label={item.label}
              type={item.type}
              key={Math.random()}
              moreIngredientsHandler={() => moreIngredientsHandler(item.type)}
              lessIngredientsHandler={() => lessIngredientsHandler(item.type)}
            />
          );
        })}
      </div>
      <div className="card-footer text-light">
        <p>Price: {price} TK</p>
        <button
          className="btn btn-primary"
          disabled={purchaseable}
          onClick={toggleModal}>
          Order Summery
        </button>
      </div>
    </div>
  );
};

export default Controls;

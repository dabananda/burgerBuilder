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
          className="btn mx-1"
          onClick={moreIngredientsHandler}
          style={{ backgroundColor: '#D70F64', color: '#fff' }}>
          More
        </button>
        <button
          className="btn btn-secondary mx-1"
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

  return (
    <div>
      <div
        className="card text-center mt-5 mx-auto text-light"
        style={{ background: '#D70F64' }}>
        <div className="card-header">Add Ingredients</div>
        <div className="card-body p-2 bg-light">
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
        <div className="card-footer text-light">Price: {price} TK</div>
      </div>
      <button
        className="btn my-2 d-block w-100"
        disabled={purchaseable}
        onClick={toggleModal}
        style={{ backgroundColor: '#D70F64', color: '#fff' }}>
        Order Summary
      </button>
    </div>
  );
};

export default Controls;

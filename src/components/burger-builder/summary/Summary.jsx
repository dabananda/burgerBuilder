import React from 'react';

const Summary = props => {
  const { ingredients } = props;
  const items = ingredients.map(item => {
    return (
      <li key={item.type}>
        <span style={{ textTransform: 'capitalize' }}>
          {item.type} X {item.amount}
        </span>
      </li>
    );
  });
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default Summary;

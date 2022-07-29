import React from 'react';
import BreadBottom from '../../../assets/images/bottom.png';
import Cheese from '../../../assets/images/cheese.png';
import Meat from '../../../assets/images/meat.png';
import Salad from '../../../assets/images/salad.png';
import BreadTop from '../../../assets/images/top.png';

const Ingredient = props => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = (
        <div>
          <img src={BreadBottom} alt="Bread Bottom" className="w-100" />
        </div>
      );
      break;
    case 'bread-top':
      ingredient = (
        <div>
          <img src={BreadTop} alt="Bread Top" className="w-100" />
        </div>
      );
      break;
    case 'cheese':
      ingredient = (
        <div>
          <img src={Cheese} alt="Cheese" className="w-100" />
        </div>
      );
      break;
    case 'meat':
      ingredient = (
        <div>
          <img src={Meat} alt="Meat" className="w-100" />
        </div>
      );
      break;
    case 'salad':
      ingredient = (
        <div>
          <img src={Salad} alt="Salad" className="w-100" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }

  return <div className='w-75 mx-auto'>{ingredient}</div>;
};

export default Ingredient;

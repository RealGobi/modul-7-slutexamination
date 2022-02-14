// import of packagers
import React from 'react';

// import of images
import { ReactComponent as Bag } from '../../assets/graphics/bag.svg';

// import of css
import './cart-button.css';

const CartButton = () => {
  let count = 1;
  return (
    <div className='round-button-container'>
      <span className='round-button'>
        <span className='round-button-counter'>{count}</span>
        <Bag />
      </span>
    </div>
  )
}

export default CartButton;
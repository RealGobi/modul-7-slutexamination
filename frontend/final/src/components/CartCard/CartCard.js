import React from 'react'

import {ReactComponent as Up} from '../../assets/graphics/arrow-up.svg'
import {ReactComponent as Down} from '../../assets/graphics/arrow-down.svg'
import './cart-card.css';

const CartCard = ({title, amount, sum}) => {
  return (
    <div className='cart-card-grid'>
      <h2 className='cart-card-title'>{title}</h2>
    <span className='cart-card-buttons'>
      <Up />
      {amount}
      <Down />
    </span>
    <p className='cart-card-sum'>{sum}kr</p>
  </div>
  )
}

export default CartCard
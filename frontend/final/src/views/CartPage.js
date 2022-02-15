import React from 'react'
import CartCard from '../components/CartCard/CartCard';

import './view.css';

const CartPage = () => {
  return (
    <div className='cart-page'>
      <div>
        <h1 style={{textAlign: 'center', margin: '40px 0'}}>Din beställning</h1>
        <CartCard title='Brygg kaffe' amount={2} sum={98} />
        <CartCard title='Americano' amount={1} sum={68} />
        <CartCard title='Bakelse m. sås' amount={3} sum={128} />
      </div>
      <div className='cart-page-sum'>
          <h2 className='cart-page-sum-title'>Totalt</h2> <h2>288kr</h2>
          <p>inkl moms + drönarleverans</p>
      </div>
      <span className='center-everything'>
        <button className='cart-page-button'>Take my money!</button>
      </span>
    </div>
  )
}

export default CartPage
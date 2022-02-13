// import packages
import React from 'react'

// import css
import './menu-item.css'

const MenuItem = ({title, description, price, unit}) => {
  return (
    <div className='grid-container-menu-item'>
      <div className='button-menu-item'>+</div>
        <span className='dot'>
          <div className='title-menu-item'>{title}</div>
        </span>
      <div className='description-menu-item'>{description}</div>
      <div className='price-menu-item'>{price}{unit ? unit : 'kr'}</div>
    </div>
  )
}

export default MenuItem
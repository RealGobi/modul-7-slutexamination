// import of packages
import React from 'react';

// import of css
import './popup.css';

/**
 * 
 * @param {*} trigger boolean to show or hide popup
 * @param {*} children content in popup
 * @param {*} close close popup
 * @returns 
 */

const Popup = ({trigger, children, close}) => {
  return ( trigger ? (
    <div className='overlay-popup'>
      <div className='content-popup'>
        { children }
        <span onClick={close}>X</span>
      </div>
    </div>
  ) : null 
  )
}

export default Popup
// impport of packages
import React, { useEffect, useState } from 'react';

// import of components
import MenuItem from '../components/MenuItem/MenuItem';

// import of svg
import {ReactComponent as HeaderBg} from '../assets/graphics/graphics-header.svg';
import {ReactComponent as FooterBg} from '../assets/graphics/graphics-footer.svg';

// import of css
import './view.css';
import CartButton from '../components/CartButton/CartButton';
import Popup from '../components/PopUp/Popup';
import CartPage from './CartPage';

const MenuPage = () => {
  // get menu from api
  const [menu, setMenu] = useState([]);

  // handle open or cloose popup
  const [isShow, setIsShow] = useState(false);

  // set error
  const [error, setError] = useState([]);

  useEffect(() => {
    // fetch on page load
    fetchMenu()
  }, [])
  

  const fetchMenu = async () => {
     fetch('http://localhost:5000/api/beans')
        // GET request using fetch 
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            setMenu(data)
        })
        .catch(error => {
            setError(error)
            console.error('There was an error when communicating wit api: ', error);
        });
  }

  return (
    <div className='menu-page' >
      <span id='top'>
        <HeaderBg />
        <span onClick={()=> setIsShow(true)}>
          <CartButton />
        </span>
        <Popup trigger={isShow} close={()=> setIsShow(false)}>
          rgergerger
        </Popup>
      </span>
        <div className='menu-container'>
          <h1 className='header-menu'>Meny</h1>
          <div className='menu-content'>
            {
              menu.menu && menu.menu.length > 0 ? menu.menu.map(item => {
                console.log(item);
                return (
                  <span key={item.id}>
                    <MenuItem title={item.title} description={item.desc} price={item.price} />
                  </span>
                )
              })
              : 'Menyn är inte färdigsnickra än'
            }
          </div>
        </div>
      <span id='foot'>
        <FooterBg />
      </span>
    </div>
  )
}

export default MenuPage
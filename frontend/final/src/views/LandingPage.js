// import of packages
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// import of svg
import {ReactComponent as LeftBg} from '../assets/graphics/intro-graphic-left.svg';
import {ReactComponent as RigthBg} from '../assets/graphics/intro-graphic-right.svg';
import { ReactComponent as Airbean } from '../assets/graphics/airbean-landing.svg';

// impoty of files
import RoutingPath from '../Routes/RoutingPath';

// import of css
import './view.css';


const LandingPage = () => {

  let navigate = useNavigate();


  useEffect(()=> {
    setTimeout(() => {
      // vavigate to menu after 3 sec
      navigate(RoutingPath.MenuPageUrl)
    }, 3000);
  },[])

  return (
    <div className='landing-page'>
        <LeftBg />
          <span>
            <Airbean />
          </span>
        <RigthBg />
    </div>
  )
}

export default LandingPage
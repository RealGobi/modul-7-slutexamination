import React from 'react'
import { Routes, Route } from "react-router-dom";

import CartPage from '../views/CartPage';
import Error from '../views/Error';
import LandingPage from '../views/LandingPage';
import MenuPage from '../views/MenuPage';
import StatusPage from '../views/StatusPage';

import RoutingPath from './RoutingPath';

const Navigation = () => {
  return (
    <Routes>
      <Route exact path={RoutingPath.LandingPageUrl} element={<LandingPage />} />
      <Route exact path={RoutingPath.MenuPageUrl} element={<MenuPage />} />
      <Route ecact path={RoutingPath.CartPageUrl} element={<CartPage />} />
      <Route exact path={RoutingPath.StatusPageUrl} element={<StatusPage />} />
      <Route path={RoutingPath.ErrorPageUrl} element={<Error />} />
    </Routes>  
    )
}

export default Navigation
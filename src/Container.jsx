import React from 'react';
import Auth from "./pages/Auth";
import Account from './layouts/Navigation';
import { useSelector } from 'react-redux';

import { isAuthenticated } from './store/modules/accountReducer';

export default function Container () {
  const isAuth = useSelector(isAuthenticated)
  return (isAuth ? <Account /> : <Auth /> )
}

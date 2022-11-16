import React from 'react';
import { useRoutes } from 'react-router-dom';
import Landing from './components/Landing'
import Pricing from './components/Pricing'

export const RouteList = () => {
  return useRoutes([
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/',
      element: <Landing />
    },
  ]);
};

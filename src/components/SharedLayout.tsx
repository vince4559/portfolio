import { Outlet } from 'react-router-dom'

import { Navigation } from './Navigation';

export const SharedLayout = () => {
  return(
    <>
      <Navigation />
      <Outlet />
     
    </>
  )
};

import { Outlet } from 'react-router-dom'
import { Footer } from './Footer';

import { Navigation } from './Navigation';

export const SharedLayout = () => {
  return(
    <>
      <Navigation />
      <Outlet />
     <Footer />
    </>
  )
};

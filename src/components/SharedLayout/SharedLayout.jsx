import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar';
import Nav from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Nav>
      <NavBar />

      <Outlet />
    </Nav>
  );
};

export default SharedLayout;

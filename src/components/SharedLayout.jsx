import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: green;

  &.active {
    color: red;
  }
`;

const SharedLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <StyledLink to="/trending/get-trending"> Home </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies"> Movies </StyledLink>
          </li>
          
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;

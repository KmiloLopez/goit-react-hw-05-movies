import {LinksContainer, StyledLink, } from "components/NavBar/NavBar.styled"


function NavBar(){
    return(
        <LinksContainer>
        <li>
            <StyledLink to="/trending/get-trending"> Home </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies"> Movies </StyledLink>
          </li>
        </LinksContainer>
    )
}
export default NavBar;
import { Nav, NaviLink } from "./AuthNav.styled";

export const AuthNav = () => {

  return (
    <Nav>
      <NaviLink to="/login">Log In</NaviLink>
      <NaviLink to="/register">Sign Up</NaviLink>      
    </Nav>
  );
};

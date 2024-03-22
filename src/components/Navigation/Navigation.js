import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Nav, NaviLink } from "./Navigation.styled";

export const Navigation = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <NaviLink to="/">Home</NaviLink>
      {isLoggedIn && (
        <NaviLink to="/contacts">Contacts</NaviLink>
      )}
    </Nav>
  );
};

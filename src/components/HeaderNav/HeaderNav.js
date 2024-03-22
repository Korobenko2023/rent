import { Header, Navigation, NaviLink } from "./HeaderNav.styled";

export const HeaderNav = () => {
 
  return (
    <Header>
      <Navigation>
        <NaviLink to="/">Home</NaviLink>
        <NaviLink to="/catalog">Catalog</NaviLink>
        <NaviLink to="/favorites">Favorite</NaviLink>
      </Navigation>
    </Header>
  );
};




import { useSelector } from "react-redux";
import { Header } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "components/Navigation/Navigation";

export const HeaderNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
    </Header>
  );
};




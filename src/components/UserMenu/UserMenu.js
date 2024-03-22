import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { UserMenuButton, UserMenuDiv, UserMenuP } from "./UserMenu.staled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
    <UserMenuDiv>
      <UserMenuP>Welcome, {user.email}</UserMenuP>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>Logout</UserMenuButton>
    </UserMenuDiv>
  );
};
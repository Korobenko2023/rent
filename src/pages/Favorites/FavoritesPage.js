import { useSelector } from "react-redux";
import { selectFavorites } from "redux/autos/selectors";
import { FavoritesDiv, FavoritesTitle } from "./FavoritesPage.styled";
import { Favorites } from "components/Favorites/Favorites";

export default function FavoritesPage() {
    const favorites = useSelector(selectFavorites);

  return (
      <FavoritesDiv> 
          <FavoritesTitle>Your favorite auto</FavoritesTitle>
          {favorites.length > 0 && <Favorites favorites={favorites} />}
      </FavoritesDiv>
    );
}
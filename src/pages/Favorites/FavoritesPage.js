import { useSelector } from "react-redux";
import { selectFavorites } from "redux/autos/selectors";
import { FavoritesDiv } from "./FavoritesPage.styled";
import { Favorites } from "components/Favorites/Favorites";

export default function FavoritesPage() {
    const favorites = useSelector(selectFavorites);

  return (
      <FavoritesDiv> 
          {favorites.length > 0 ? (
              <Favorites favorites={favorites} />
          ) : (
              <h2>You have no favorites campers </h2>
          )}
      </FavoritesDiv>
    );
}
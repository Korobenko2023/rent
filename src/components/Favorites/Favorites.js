import { AutoCard } from "components/AutoCard/AutoCard";
import { FavoritesDiv, FavoritesUl } from "./Favorites.styled";

export const Favorites = ({ favorites }) => {
  return (
    <FavoritesDiv>
       <h2>Your favorites campers</h2>
      <FavoritesUl>
        {favorites.map((item) => (
          <li key={item._id}>
            <AutoCard auto={item} />
          </li>
        ))}
      </FavoritesUl>
    </FavoritesDiv>
  );
};
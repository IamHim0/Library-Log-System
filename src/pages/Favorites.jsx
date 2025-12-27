import {
  FavoritesProvider,
  useFavoritesContext,
} from "../css/contexts/FavoritesContext";

const Favorites = () => {
  const favorites = useFavoritesContext;
  return <div>Favorites</div>;
};

export default Favorites;

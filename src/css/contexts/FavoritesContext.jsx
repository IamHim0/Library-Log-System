import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const value = {
    favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

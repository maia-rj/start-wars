import { create } from "zustand";

type Character = {
  name: string;
  height: string;
};

type State = {
  characters: Character[];
  favorites: Character[];
  setCharacters: (characters: Character[]) => void;
  setFavorites: (favorites: Character[]) => void;
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
};

export const useStore = create<State>((set) => ({
  characters: [],
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  setCharacters: (characters) => set({ characters }),
  setFavorites: (favorites) => set({ favorites }),
  addFavorite: (character) =>
    set((state) => {
      const newFavorites = [...state.favorites, character];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),
  removeFavorite: (character) =>
    set((state) => {
      const newFavorites = state.favorites.filter(
        (fav) => fav.name !== character.name
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),
}));

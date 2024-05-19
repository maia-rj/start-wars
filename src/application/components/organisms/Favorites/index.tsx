import React from "react";
import CharacterCard from "../CharacterCard";
import { NoFavoritesMessage } from "./styles";
import { useStore } from "@infrastructure/store/useStore";
import { ContainerCards } from "@components/styles/StyledComponents";

const Favorites: React.FC = () => {
  const favorites = useStore((state) => state.favorites);

  return (
    <ContainerCards>
      {favorites.length === 0 ? (
        <NoFavoritesMessage>Sem personagens favoritos.</NoFavoritesMessage>
      ) : (
        favorites.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            isFavorite={true}
          />
        ))
      )}
    </ContainerCards>
  );
};

export default Favorites;

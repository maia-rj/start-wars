import React from 'react';
import CharacterCard from '../CharacterCard';
import { useStore } from '@infrastructure/store/useStore';
import { ContainerCards } from '@components/styles/StyledComponents';

const CharacterList: React.FC = () => {
  const { characters, favorites } = useStore();

  return (
    <ContainerCards>
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
          isFavorite={favorites.some(fav => fav.name === character.name)}
        />
      ))}
    </ContainerCards>
  );
};

export default CharacterList;

import React from 'react';
import { useStore } from '../../store/useStore';
import CharacterCard from '../CharacterCard';

const CharacterList: React.FC = () => {
  const { characters, favorites } = useStore();

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
          isFavorite={favorites.some(fav => fav.name === character.name)}
        />
      ))}
    </div>
  );
};

export default CharacterList;

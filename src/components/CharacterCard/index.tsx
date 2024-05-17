import React from 'react';
import styled from 'styled-components';
import { useStore } from '../../store/useStore';

type CharacterCardProps = {
  character: {
    name: string;
    height: string;
  };
  isFavorite: boolean;
};

const Card = styled.div`
  // Estilos do card
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite }) => {
  const { addFavorite, removeFavorite } = useStore();

  return (
    <Card>
      <h3>{character.name}</h3>
      <p>Height: {character.height}</p>
      <button onClick={() => isFavorite ? removeFavorite(character) : addFavorite(character)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </Card>
  );
};

export default CharacterCard;

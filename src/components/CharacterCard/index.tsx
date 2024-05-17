import React from 'react';
import { useStore } from '../../store/useStore';
import { Button, Card, CardActions, CardContent, CardSubtitle, CardTitle } from './styles';

type CharacterCardProps = {
  character: {
    name: string;
    height: string;
  };
  isFavorite: boolean;
};


const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite }) => {
    const { addFavorite, removeFavorite } = useStore();
  
    return (
      <Card>
        <CardContent>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>Height: {character.height}</CardSubtitle>
        </CardContent>
        <CardActions>
          <Button onClick={() => isFavorite ? removeFavorite(character) : addFavorite(character)}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default CharacterCard;
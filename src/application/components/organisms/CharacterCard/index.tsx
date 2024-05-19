import React from "react";
import { Card, CardContent, CardTitle } from "@components/styles/StyledComponents";
import { FavoriteIcon, FavoriteIconWrapper } from "./styles";
import { mdiStar, mdiStarOutline } from "@mdi/js";
import Tooltip from "@atoms/Tooltip";
import { useStore } from "@infrastructure/store/useStore";

type CharacterCardProps = {
  character: {
    name: string;
    height: string;
  };
  isFavorite: boolean;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  isFavorite,
}) => {
  const { addFavorite, removeFavorite } = useStore();

  const convertHeight = (height: string): string => {
    if (height.toLowerCase() === "unknown") {
      return "Altura desconhecida";
    }
    const heightInCm = parseInt(height, 10);
    const heightInM = heightInCm / 100;
    return `${heightInM.toFixed(2).replace(".", ",")} m`;
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <Card>
      <FavoriteIconWrapper
        onClick={handleFavoriteClick}
        role="button"
        aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <Tooltip
          text={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <FavoriteIcon
            path={isFavorite ? mdiStar : mdiStarOutline}
            size={1}
            $isFavorite={isFavorite}
          />
        </Tooltip>
      </FavoriteIconWrapper>
      <CardTitle>{character.name}</CardTitle>
      <CardContent>Altura: {convertHeight(character.height)}</CardContent>
    </Card>
  );
};

export default CharacterCard;

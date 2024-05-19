import Icon from "@mdi/react";
import styled from "styled-components";

export const FavoriteIcon = styled(Icon)<{ $isFavorite: boolean }>`
  color: ${(props) => (props.$isFavorite ? "gold" : "grey")};

  &:hover {
    color: gold;
  }
`;

export const FavoriteIconWrapper = styled.div`
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  align-self: flex-end;
`;

import { colors } from "@components/styles/StyledComponents";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #3700b3;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 16px;
  color: #333;
`;

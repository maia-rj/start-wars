import { colors } from "@components/styles/StyledComponents";
import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Tab = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? colors.primary : "#ccc")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.$active ? "#3700b3" : "#bbb")};
  }
`;

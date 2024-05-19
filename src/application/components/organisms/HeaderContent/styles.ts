import styled from "styled-components";
import Tabs from "@components/molecules/Tabs";
import { colors } from "@components/styles/StyledComponents";

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 80px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.text};
  margin: 0;
  align-self: center;
`;

export const TabsComponent = styled(Tabs)`
  position: absolute;
  top: 80px;
  right: 5%;
`;

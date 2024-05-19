import styled from "styled-components";

export const colors = {
  primary: "#7000FF",
  secondary: "#172b4d",
  accent: "#ff5630",
  background: "#f4f5f7",
  text: "#333333",
};

export const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.secondary};
  }

  &:disabled {
    background-color: ${colors.accent};
    cursor: not-allowed;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: ${colors.text};
  margin-bottom: 10px;
  margin-top: 32px;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: ${colors.text};
`;

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${colors.background};
`;

export const CardSubtitle = styled.p`
  margin: 8px 0;
  font-size: 0.875rem;
  color: ${colors.text};
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

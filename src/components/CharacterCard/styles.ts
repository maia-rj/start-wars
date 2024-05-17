import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 16px;
  background-color: #f5f5f5;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

export const CardSubtitle = styled.p`
  margin: 8px 0;
  font-size: 0.875rem;
  color: #666;
`;

export const Button = styled.button`
  background-color: #6200ea;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #3700b3;
  }
`;

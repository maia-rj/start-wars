import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Message = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease;
`;

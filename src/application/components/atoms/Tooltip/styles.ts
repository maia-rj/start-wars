import styled from "styled-components";

export const TooltipContainer = styled.div`
  visibility: hidden;
  width: 140px;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 14px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipContainer} {
    visibility: visible;
    opacity: 1;
  }
`;

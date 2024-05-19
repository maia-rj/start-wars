import React, { useState } from 'react';
import { TooltipContainer, TooltipWrapper } from './styles';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <TooltipWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      {isHovered && <TooltipContainer data-testid="tooltip">{text}</TooltipContainer>}
    </TooltipWrapper>
  );
};

export default Tooltip;

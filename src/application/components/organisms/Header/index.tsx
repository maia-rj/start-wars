import React from 'react';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { HeaderContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo width="150" />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;

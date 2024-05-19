
import React from 'react';
import { LoaderStyle, LoadingContainer } from './styles';

const Loader: React.FC = () => {
  return (
    <LoadingContainer data-testid="loading-container">
      <LoaderStyle data-testid="loader-style" />
    </LoadingContainer>
  );
};

export default Loader;

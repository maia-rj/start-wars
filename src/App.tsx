import React from 'react';
import HomePage from './application/pages/HomePage';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
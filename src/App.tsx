import React from 'react';
import HomePage from './application/pages/HomePage';
import GlobalStyle from './GlobalStyle';
import { ToastProvider } from 'application/context/toast';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <GlobalStyle />
      <HomePage />
    </ToastProvider>
  );
};

export default App;
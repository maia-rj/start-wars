
import React from 'react';
import GlobalStyle from './GlobalStyle';
import CharacterList from './components/CharacterList';

const App: React.FC = () => {

  return (
    <div>
      <GlobalStyle/>
      <h1>Star Wars Characters</h1>
      <CharacterList />
    </div>
  );
};

export default App;

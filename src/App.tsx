import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, totalPages } = useFetchCharacters(currentPage);
  return (
    <div>
      <GlobalStyle />
      <h1>Star Wars Characters</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <CharacterList />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;

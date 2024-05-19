import { useFetchCharacters } from "@hooks/useFetchCharacters";
import React, { useState } from "react";
import { ErrorMessage, HomePageContainer } from "./styles";
import Header from "@components/organisms/Header";
import HeaderContent from "@components/organisms/HeaderContent";
import Loader from "@components/atoms/Loader";
import Favorites from "@components/organisms/Favorites";
import CharacterList from "@components/organisms/CharacterList";
import Pagination from "@components/molecules/Pagination";


const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, totalPages } = useFetchCharacters(currentPage);
  const [activeTab, setActiveTab] = useState('all');
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };
  return (
    <HomePageContainer>
      <Header />
      <HeaderContent activeTab={activeTab} onTabChange={handleTabChange}/>
      {loading && <Loader/>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <>
          {activeTab === 'favorites' ? (
            <Favorites />
          ) : (
            <>
              <CharacterList />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </>
      )}
    </HomePageContainer>
  );
};

export default HomePage;

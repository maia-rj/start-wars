import React from "react";
import { HeaderContentContainer, TabsComponent, Title } from "./styles";


type HeaderContentProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const HeaderContent: React.FC<HeaderContentProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { label: "Todos os Personagens", value: "all" },
    { label: "Favoritos", value: "favorites" },
  ];
  return (
    <HeaderContentContainer>
      <Title>Personagens de Star Wars</Title>
      <TabsComponent activeTab={activeTab} onTabChange={onTabChange} tabs={tabs} />
    </HeaderContentContainer>
  );
};

export default HeaderContent;

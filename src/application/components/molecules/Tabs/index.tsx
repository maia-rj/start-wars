import React from 'react';
import { Tab, TabsContainer } from './styles';

type TabsProps = {
    className?: string;
    tabs: { label: string; value: string }[];
    activeTab: string;
    onTabChange: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, tabs, className}) => {
  return (
    <TabsContainer className={className}>
    {tabs.map((tab) => (
      <Tab
        key={tab.value}
        $active={activeTab === tab.value}
        onClick={() => onTabChange(tab.value)}
      >
        {tab.label}
      </Tab>
    ))}
  </TabsContainer>
  );
};

export default Tabs;

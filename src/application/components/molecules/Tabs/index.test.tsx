import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './index';

describe('Tabs Component', () => {
  const onTabChange = jest.fn();

  const tabs = [
    { label: 'Tab 1', value: 'tab1' },
    { label: 'Tab 2', value: 'tab2' },
    { label: 'Tab 3', value: 'tab3' },
  ];

  beforeEach(() => {
    onTabChange.mockClear();
  });

  test('renders the tabs correctly', () => {
    render(<Tabs activeTab="tab1" onTabChange={onTabChange} tabs={tabs} />);

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  test('highlights the active tab', () => {
    render(<Tabs activeTab="tab2" onTabChange={onTabChange} tabs={tabs} />);

    const activeTab = screen.getByText('Tab 2');
    expect(activeTab).toHaveStyle('background-color: rgb(55, 0, 179)');
    expect(activeTab).toHaveStyle('color: white');
  });

  test('calls onTabChange with the correct value when a tab is clicked', () => {
    render(<Tabs activeTab="tab1" onTabChange={onTabChange} tabs={tabs} />);

    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);

    expect(onTabChange).toHaveBeenCalledWith('tab2');
  });

  test('applies the correct styles to inactive tabs', () => {
    render(<Tabs activeTab="tab1" onTabChange={onTabChange} tabs={tabs} />);

    const inactiveTab = screen.getByText('Tab 2');
    expect(inactiveTab).toHaveStyle('background-color: rgb(187, 187, 187)');
    expect(inactiveTab).toHaveStyle('color: black');
  });
});

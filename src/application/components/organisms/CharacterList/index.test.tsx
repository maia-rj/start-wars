import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '.';
import { useStore } from '@infrastructure/store/useStore';

jest.mock('@infrastructure/store/useStore');

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

describe('CharacterList Component', () => {
  const mockCharacters = [
    { name: 'Luke Skywalker', height: '172' },
    { name: 'Darth Vader', height: '202' },
    { name: 'Yoda', height: 'unknown' },
  ];

  const mockFavorites = [
    { name: 'Luke Skywalker', height: '172' },
  ];

  beforeEach(() => {
    mockUseStore.mockReturnValue({
      characters: mockCharacters,
      favorites: mockFavorites,
    } as any);
    jest.clearAllMocks();
  });

  test('renders the list of characters correctly', () => {
    render(<CharacterList />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
    expect(screen.getByText('Yoda')).toBeInTheDocument();
  });

  test('identifies favorite characters correctly', () => {
    render(<CharacterList />);

    const favoriteIcon = screen.getAllByRole('button').filter(button => 
      button.getAttribute('aria-label') === 'Remover dos favoritos'
    );
    expect(favoriteIcon.length).toBe(1);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});

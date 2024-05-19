import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from '.';
import { useStore } from '@infrastructure/store/useStore';

jest.mock('@infrastructure/store/useStore');

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

describe('CharacterCard Component', () => {
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();

  beforeEach(() => {
    mockUseStore.mockReturnValue({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
    } as any);
    jest.clearAllMocks();
  });

  test('renders character name and height in meters', () => {
    const character = { name: 'Luke Skywalker', height: '172' };
    render(<CharacterCard character={character} isFavorite={false} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Altura: 1,72 m')).toBeInTheDocument();
  });

  test('renders "Altura desconhecida" when height is unknown', () => {
    const character = { name: 'Yoda', height: 'unknown' };
    render(<CharacterCard character={character} isFavorite={false} />);

    expect(screen.getByText('Yoda')).toBeInTheDocument();
    expect(screen.getByText(/Altura desconhecida/i)).toBeInTheDocument();
  });

  test('calls addFavorite when the star icon is clicked and the character is not a favorite', () => {
    const character = { name: 'Luke Skywalker', height: '172' };
    render(<CharacterCard character={character} isFavorite={false} />);

    const starIcon = screen.getByRole('button', { name: /Adicionar aos favoritos/i });
    fireEvent.click(starIcon);

    expect(mockAddFavorite).toHaveBeenCalledWith(character);
  });

  test('calls removeFavorite when the star icon is clicked and the character is a favorite', () => {
    const character = { name: 'Luke Skywalker', height: '172' };
    render(<CharacterCard character={character} isFavorite={true} />);

    const starIcon = screen.getByRole('button', { name: /Remover dos favoritos/i });
    fireEvent.click(starIcon);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(character);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { useStore } from '../../store/useStore';
import CharacterList from '.';

jest.mock('../../store/useStore');

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

describe('CharacterList', () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      characters: [
        { name: 'Luke Skywalker', height: '172' },
        { name: 'Darth Vader', height: '202' }
      ],
      favorites: []
    } as any);
  });

  test('renders list of characters', () => {
    render(<CharacterList />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });
});

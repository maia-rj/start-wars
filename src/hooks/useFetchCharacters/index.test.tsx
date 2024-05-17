import { render, screen, waitFor } from '@testing-library/react';
import swapiService from '../../services/swapi/swapiService';
import { useFetchCharacters } from '.';
import { useStore } from '../../store/useStore';
import { useEffect } from 'react';

jest.mock('../../services/swapi/swapiService');
jest.mock('../../store/useStore');

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

const TestComponent = ({ page }: { page: number }) => {
  const { loading, error } = useFetchCharacters(page);

  useEffect(() => {
    // Apenas para acionar o hook
  }, [loading, error]);

  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
    </div>
  );
};

describe('useFetchCharacters', () => {
  const mockSetCharacters = jest.fn();
  const mockGetCharacters = swapiService.getCharacters as jest.MockedFunction<typeof swapiService.getCharacters>;

  beforeEach(() => {
    mockUseStore.mockReturnValue({
      setCharacters: mockSetCharacters,
    } as any);
    jest.clearAllMocks();
  });

  test('fetches characters successfully', async () => {
    const characters = [
      { name: 'Luke Skywalker', height: '172' },
      { name: 'Darth Vader', height: '202' },
    ];
    mockGetCharacters.mockResolvedValue({ results: characters });

    render(<TestComponent page={1} />);

    await waitFor(() => expect(mockSetCharacters).toHaveBeenCalledWith(characters));
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Failed to fetch characters')).not.toBeInTheDocument();
  });

  test('handles fetch error', async () => {
    mockGetCharacters.mockRejectedValue(new Error('Failed to fetch characters'));

    render(<TestComponent page={1} />);

    await waitFor(() => expect(mockSetCharacters).not.toHaveBeenCalled());
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Failed to fetch characters')).toBeInTheDocument();
  });
});

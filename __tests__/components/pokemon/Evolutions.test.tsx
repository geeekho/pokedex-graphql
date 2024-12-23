import React from 'react';
import { render, screen } from '@testing-library/react';
import { searchGraphPokemonEvolution } from '@/utils/pokemon';
import { mockEvolutionData, mockPokemonSprites } from '@/__mocks__/pokemon';
import Evolutions from '@/components/pokemon/tabs/Evolutions';

interface Props {
  color: string;
  evolutionId?: number;
}

// Mocking the required API utility functions
jest.mock('@/utils/pokemon', () => ({
  getPokemonSprites: jest.fn(() => Promise.resolve(mockPokemonSprites)),
  searchGraphPokemonEvolution: jest.fn(() =>
    Promise.resolve(mockEvolutionData)
  ),
}));

async function resolvedComponent(Component: React.FC<Props>, props: Props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

describe('Evolutions Component', () => {
  const mockEvolutionId = 1;
  const mockColor = '#F85888';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders evolution details after loading', async () => {
    const EvolutionsResolved = await resolvedComponent(Evolutions, {
      color: mockColor,
      evolutionId: mockEvolutionId,
    });

    render(<EvolutionsResolved />);

    // Check if the evolution names are rendered
    expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Ivysaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Venusaur/i)).toBeInTheDocument();

    // Check if the image is rendered correctly (mocked sprite)
    const encodedUrl = encodeURIComponent(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute(
      'src',
      `/_next/image?url=${encodedUrl}&w=256&q=75`
    );
  });

  it('does not fetch evolution data if no evolutionId is provided', async () => {
    const EvolutionsResolved = await resolvedComponent(Evolutions, {
      color: mockColor,
      evolutionId: undefined,
    });

    render(<EvolutionsResolved />);
    // Verify that no evolutions are rendered
    expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ivysaur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/venusaur/i)).not.toBeInTheDocument();
  });

  it('handles errors gracefully', async () => {
    // Simulate an error in the API call
    (searchGraphPokemonEvolution as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to fetch')
    );
    const EvolutionsResolved = await resolvedComponent(Evolutions, {
      color: mockColor,
      evolutionId: mockEvolutionId,
    });

    render(<EvolutionsResolved />);

    // Ensure that no evolutions are rendered and an error is logged in the console (optional)
    expect(screen.queryByText(/Bulbasaur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ivysaur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Venusaur/i)).not.toBeInTheDocument();
  });
});

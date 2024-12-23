// ClientPokemonCard.test.tsx
import { render, screen } from '@testing-library/react';
import { PokemonProps } from '@/types/pokemon'; // Ensure this path is correct
import PokemonCard from '@/components/test/ClientPokemonCard';

// Mock data for the Pokemon component
const mockPokemon: PokemonProps = {
  id: 1,
  name: 'Pikachu',
  height: 4,
  weight: 60,
  types: [
    {
      type: { name: 'electric' },
      slot: 0,
    },
  ],
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png?w=384&q=75',
  defaultText: 'A yellow electric Pokémon.',
  details: {
    stats: [
      { base_stat: 35, stat: { name: 'hp' } },
      { base_stat: 55, stat: { name: 'attack' } },
      { base_stat: 40, stat: { name: 'defense' } },
    ],
  },
};

describe('PokemonCard', () => {
  test('renders the PokemonCard with correct data', () => {
    // Render the component
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();

    const image = screen.getByAltText('Pikachu');
    const encodedUrl = encodeURIComponent(mockPokemon.image);
    expect(image).toHaveAttribute(
      'src',
      `/_next/image?url=${encodedUrl}&w=384&q=75`
    );
    expect(image).toHaveAttribute('alt', 'Pikachu'); // Check for alt text

    expect(screen.getByText(mockPokemon.defaultText)).toBeInTheDocument();

    expect(screen.getByText('electric')).toBeInTheDocument();
  });
});

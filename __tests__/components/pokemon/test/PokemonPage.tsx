import PokemonPage from '@/components/test/PokemonPage';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('PokemonPage', () => {
  it('renders the page correctly with valid pokemon data', async () => {
    render(<PokemonPage />);

    // Check if the page loads the Pokémon name, image, and stats
    const pokemonName = await screen.findByText('Bulbasaur');
    expect(pokemonName).toBeInTheDocument();

    const encodedUrl = encodeURIComponent(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`
    );

    // image: ,
    const pokemonImage = screen.getByAltText('Bulbasaur');
    expect(pokemonImage).toHaveAttribute(
      'src',
      `/_next/image?url=${encodedUrl}&w=384&q=75`
    );

    const pokemonDescription = screen.getByText(
      'Bulbasaur can be found in the wild in various types of grasslands.'
    );
    expect(pokemonDescription).toBeInTheDocument();

    // Check if the link back to home is present
    const backButton = screen.getByRole('link');
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/');
  });

  it('should apply custom background color based on pokemon type', async () => {
    render(<PokemonPage />);

    // Check if the background style is applied correctly based on Pokemon type
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveStyle({
      '--custom-bg-color': '#78C850', // Replace with the actual color logic
    });
  });
});

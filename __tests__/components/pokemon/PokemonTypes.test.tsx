// PokemonTypes.test.tsx
import { render, screen } from '@testing-library/react';
import { Type } from '@/types/pokemon';
import PokemonTypes from '@/components/pokemon/PokemonTypes';

// Mocking the color mapping
jest.mock('@/utils/constants', () => ({
  typeToColor: {
    fire: 'red',
    water: 'blue',
    grass: 'green',
    electric: 'yellow',
    // add more types for testing
  },
}));

describe('PokemonTypes Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockTypes: Type[] = [
    {
      type: { name: 'fire' },
      slot: 0,
    },
    {
      type: { name: 'water' },
      slot: 0,
    },
    {
      type: { name: 'grass' },
      slot: 0,
    },
  ];

  it('renders the correct number of Pokemon types', () => {
    render(<PokemonTypes types={mockTypes} />);

    // Check if the correct number of PokemonType components are rendered
    expect(screen.getAllByText(/fire|water|grass/i)).toHaveLength(3);
  });

  it('renders the PokemonType component with the correct background color', () => {
    render(<PokemonTypes types={mockTypes} />);

    // Verify if the colors are applied correctly based on the type
    const fireType = screen.getByText('fire');
    const waterType = screen.getByText('water');
    const grassType = screen.getByText('grass');

    // Verify the background colors
    expect(fireType).toHaveStyle('background-color: red');
    expect(waterType).toHaveStyle('background-color: blue');
    expect(grassType).toHaveStyle('background-color: green');
  });

  it('renders PokemonType component with correct styles', () => {
    render(<PokemonTypes types={mockTypes} />);

    const fireType = screen.getByText('fire');
    const waterType = screen.getByText('water');

    // Verify that the types are rendered with the correct text and styles
    expect(fireType).toHaveClass(
      'rounded-full py-2 px-12 text-white uppercase text-base font-normal pointer-events-none sm:max-w-fit'
    );
    expect(waterType).toHaveClass(
      'rounded-full py-2 px-12 text-white uppercase text-base font-normal pointer-events-none sm:max-w-fit'
    );
  });
});

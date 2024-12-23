// DetailsSection.test.tsx
import { render, screen } from '@testing-library/react';
import { PokemonProps } from '@/types/pokemon';
import { DetailsTabsEnum } from '@/utils/constants';
import DetailsSection from '@/components/pokemon/DetailsSection';
// Mocking the child components to isolate the test to only the Tabs behavior
jest.mock('@/components/pokemon/tabs/Stats', () => ({
  __esModule: true,
  default: () => <div>Stats Content</div>,
}));

jest.mock('@/components/pokemon/tabs/Evolutions', () => ({
  __esModule: true,
  default: () => <div>Evolutions Content</div>,
}));

describe('DetailsSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const color = '#78C850';
  const mockPokemon: PokemonProps = {
    name: 'bulbasaur',
    id: 1,
    weight: 40,
    height: 16,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    defaultText: '',
    details: {
      stats: [
        { stat: { name: 'hp' }, base_stat: 45 },
        { stat: { name: 'attack' }, base_stat: 49 },
        { stat: { name: 'defense' }, base_stat: 49 },
        { stat: { name: 'special-attack' }, base_stat: 65 },
        { stat: { name: 'special-defense' }, base_stat: 65 },
        { stat: { name: 'speed' }, base_stat: 45 },
      ],
    },
    types: [],
    evolutionChainId: 1,
  };

  it('should render all tabs', () => {
    render(<DetailsSection pokemon={mockPokemon} color={color} />);

    // Check if all tab labels are rendered
    expect(screen.getByText(DetailsTabsEnum.STATS)).toBeInTheDocument();
    expect(screen.getByText(DetailsTabsEnum.EVOLUTIONS)).toBeInTheDocument();
    expect(screen.getByText(DetailsTabsEnum.MOVES)).toBeInTheDocument();
  });

  it('should render content of the first tab (Stats) by default', () => {
    render(<DetailsSection pokemon={mockPokemon} color={color} />);

    // Verify that the Stats content is shown by default
    expect(screen.getByText('Stats Content')).toBeInTheDocument();
  });

  it('should apply custom color to the active tab', () => {
    render(<DetailsSection pokemon={mockPokemon} color={color} />);

    const activeTab = screen.getByText(DetailsTabsEnum.STATS);
    expect(activeTab).toHaveStyle(`--custom-active-color: ${color}`);
  });
});

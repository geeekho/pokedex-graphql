// Stats.test.tsx
import { render, screen } from '@testing-library/react';
import { Stat } from '@/types/pokemon';
import { statShortcut } from '@/utils/constants';
import Stats from '@/components/pokemon/tabs/Stats';

describe('Stats', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const stats: Stat[] = [
    { base_stat: 35, stat: { name: 'hp' } },
    { base_stat: 55, stat: { name: 'attack' } },
    { base_stat: 45, stat: { name: 'defense' } },
  ];

  const color = 'rgb(255, 223, 186)';

  it('should render all stats correctly with shortcuts', () => {
    render(<Stats stats={stats} color={color} />);

    stats.forEach((stat) => {
      const shortcut = statShortcut[stat.stat.name];
      expect(screen.getByText(shortcut)).toBeInTheDocument();
    });

    stats.forEach((stat) => {
      expect(screen.getByText(stat.base_stat.toString())).toBeInTheDocument();
    });
  });

  it('should handle empty stats gracefully', () => {
    render(<Stats stats={[]} color={color} />);

    const statItems = screen.queryAllByRole('listitem');
    expect(statItems).toHaveLength(0); // No stats to render
  });
});

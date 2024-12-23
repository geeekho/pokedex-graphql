/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from '@/types/pokemon';
import { getPokemonBackgroundColor } from '@/utils/color.helper';
import { typeToColor } from '@/utils/constants';

// Mock Type and TypeToColor for testing if needed
jest.mock('@/utils/constants', () => ({
  typeToColor: {
    grass: '#78C850', // Grass color mock
    fire: '#F08030', // Fire color mock
    water: '#6890F0', // Water color mock
  },
}));

describe('getPokemonBackgroundColor', () => {
  it('should return the correct color for a valid type', () => {
    const types: Type[] = [
      {
        type: { name: 'fire' },
        slot: 0,
      },
    ];
    const color = getPokemonBackgroundColor(types);

    expect(color).toBe('#F08030'); // fire type should return its mapped color
  });

  it('should return the default color (grass) if no types are provided', () => {
    const types: Type[] = [];
    const color = getPokemonBackgroundColor(types);

    expect(color).toBe('#78C850'); // Default to grass color if no types are provided
  });

  it('should return the default color (grass) if an invalid type is provided', () => {
    const types: Type[] = [
      {
        type: { name: 'dragon' },
        slot: 0,
      },
    ]; // Assume 'dragon' is not in typeToColor
    const color = getPokemonBackgroundColor(types);

    expect(color).toBe('#78C850'); // Should default to grass color
  });
});

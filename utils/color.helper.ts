import { Type } from '@/types/pokemon';
import { typeToColor } from './constants';

export const getPokemonBackgroundColor = (types: Type[]): string => {
  // Ensure pokemonData and types array exist
  if (types.length > 0) {
    const typeName = types[0].type.name; // Get the first type's name
    return typeToColor[typeName.toLowerCase()] || typeToColor['grass']; // Return mapped color or default to grass color
  }
  return typeToColor['grass']; // Default to grass type color
};

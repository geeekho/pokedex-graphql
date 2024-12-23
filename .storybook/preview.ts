import type { Preview } from '@storybook/react';
import result from '../jest-test-results.json'; // Path to Jest results
import { withTests } from '@storybook/addon-jest';
// import { mockEvolutionData, mockPokemonSprites } from '../__mocks__/pokemon';
// import * as pokemonUtils from '../utils/pokemon'; // Import the module to mock

import '../app/globals.css';

const preview: Preview = {
  decorators: [withTests({ results: result })],

  parameters: {
    test: {
      dangerouslyIgnoreUnhandledErrors: true, // Enable this globally
    },
    //?SERVER ACTION MOCKING: still debugging
    // moduleMock: {
    //   mock: () => {
    //     jest
    //       .spyOn(pokemonUtils, 'searchGraphPokemonEvolution')
    //       .mockResolvedValue(Promise.resolve(mockEvolutionData));
    //     jest
    //       .spyOn(pokemonUtils, 'getPokemonSprites')
    //       .mockResolvedValue(Promise.resolve(mockPokemonSprites));
    //   },
    // },
  },
};

export default preview;

/**
 * Ce décorateur `withMockedApolloProvider` est utilisé pour fournir un contexte Apollo
 * simulé dans les histoires Storybook. Il permet de remplacer le provider Apollo classique
 * par une version qui utilise des données simulées, facilitant ainsi les tests et le
 * développement sans effectuer de requêtes réseau réelles.
 *
 * Il est spécialement conçu pour fonctionner avec le composant __POC__Evolutions et
 * simuler les requêtes Apollo (GET_POKEMON_EVOLUTION_CHAIN et GET_POKEMON_SPRITES_ID)
 * afin de tester le comportement des composants dans Storybook.
 *
 * Ce décorateur s'assure que les composants Storybook utilisant Apollo Client reçoivent
 * les réponses simulées appropriées, ce qui permet de tester leur rendu sans dépendre
 * des erreurs potentielles liées à la version expérimentale d'Apollo Client pour le SSR.
 */

import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import {
  GET_POKEMON_EVOLUTION_CHAIN,
  GET_POKEMON_SPRITES_ID,
} from '../../lib/queries';
import { mockPokemonSprites } from '../../__mocks__/pokemon';

export const withMockedApolloProvider = (Story) => {
  // mocks.ts

  const mockEvolutionChainResponse = {
    data: {
      chain: [
        {
          __typename: 'pokemon_v2_evolutionchain',
          id: 420,
          pokemon: {
            __typename: 'pokemon_v2_pokemonspecies_aggregate',
            nodes: [
              {
                __typename: 'pokemon_v2_pokemonspecies',
                name: 'guzzlord',
                id: 799,
                order: 799,
              },
            ],
          },
        },
      ],
    },
  };

  const mocks = [
    {
      request: {
        query: GET_POKEMON_EVOLUTION_CHAIN,
        variables: { id: 1 }, // adjust based on the query variables
      },
      result: {
        data: mockEvolutionChainResponse,
      },
    },
    {
      request: {
        query: GET_POKEMON_SPRITES_ID,
        variables: { id: 1 }, // adjust based on the query variables
      },
      result: {
        data: mockPokemonSprites,
      },
    },
  ];

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Story />
    </MockedProvider>
  );
};

/**
 * Ce composant Storybook utilise le composant __POC__Evolutions pour tester l'intégration
 * des requêtes Apollo (GET_POKEMON_EVOLUTION_CHAIN et GET_POKEMON_SPRITES_ID) dans
 * un environnement isolé sans exécuter de requêtes réseau réelles.
 *
 * Le composant __POC__Evolutions, qui sert de preuve de concept, permet de simuler
 * les fonctions Apollo et d'éviter les erreurs liées à l'utilisation de la version
 * expérimentale d'Apollo Client pour le SSR, comme rencontré dans 'lib/apolloClient'.
 *
 * L'objectif ici est de valider le comportement du composant "Evolutions" dans Storybook
 * en simulant les réponses des requêtes Apollo afin de faciliter les tests et le développement.
 */

// import React from 'react';
// import { withMockedApolloProvider } from '@/.storybook/decorators/WithMockedApolloProvider'; // Import the mock provider decorator
// import Evolutions from '@/components/test/ClientEvolutions';
// import { Meta } from '@storybook/react';

// const meta: Meta<typeof Evolutions> = {
//   title: 'Pokemon/Components/Evolutions',
//   component: Evolutions,
//   decorators: [withMockedApolloProvider],
//   args: {
//     color: '#4CAF50', // Green color as a default active color
//     evolutionId: 1,
//   },
// };

// export default meta;

// export const Default = () => (
//   <Evolutions color="green" evolutionId={1} /> // Pass props to your component
// );

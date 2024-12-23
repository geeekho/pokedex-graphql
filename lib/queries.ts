import { gql } from '@apollo/client';

export const GET_POKEMON_DETAILS = gql`
  query pokemon_details($idOrName: String) {
    species: pokemon_v2_pokemonspecies(where: { name: { _eq: $idOrName } }) {
      evolution_chain_id
      pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
        nodes {
          name
          id
          stats: pokemon_v2_pokemonstats {
            base_stat
            stat: pokemon_v2_stat {
              name
            }
          }
          types: pokemon_v2_pokemontypes {
            slot
            type: pokemon_v2_type {
              name
            }
          }
        }
      }
      flavorText: pokemon_v2_pokemonspeciesflavortexts(
        where: {
          pokemon_v2_language: { name: { _eq: "en" } }
          pokemon_v2_version: { name: { _eq: "firered" } }
        }
      ) {
        flavor_text
      }
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query pokemon_details($idOrName: Int) {
    species: pokemon_v2_pokemonspecies(where: { id: { _eq: $idOrName } }) {
      evolution_chain_id
      pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
        nodes {
          name
          id
          stats: pokemon_v2_pokemonstats {
            base_stat
            stat: pokemon_v2_stat {
              name
            }
          }
          types: pokemon_v2_pokemontypes {
            slot
            type: pokemon_v2_type {
              name
            }
          }
        }
      }
      flavorText: pokemon_v2_pokemonspeciesflavortexts(
        where: {
          pokemon_v2_language: { name: { _eq: "en" } }
          pokemon_v2_version: { name: { _eq: "firered" } }
        }
      ) {
        flavor_text
      }
    }
  }
`;

export const GET_POKEMON_EVOLUTION_CHAIN = gql`
  query pokemon_evolution($id: Int) {
    chain: pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {
      id # Evolution chain ID
      pokemon: pokemon_v2_pokemonspecies_aggregate(order_by: { order: asc }) {
        nodes {
          name # Names of the Pokémon in the evolution chain
          id # IDs of the Pokémon species in the evolution chain
          order
        }
      }
    }
  }
`;

export const GET_POKEMON_SPRITES_ID = gql`
  query pokemon_evolution($id: Int) {
    sprites: pokemon_v2_pokemonsprites(where: { pokemon_id: { _eq: $id } }) {
      sprites
    }
  }
`;

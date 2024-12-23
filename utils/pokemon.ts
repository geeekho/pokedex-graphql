import 'server-only';
import { memoize } from 'nextjs-better-unstable-cache';
import {
  GET_POKEMON_BY_ID,
  GET_POKEMON_DETAILS,
  GET_POKEMON_EVOLUTION_CHAIN,
  GET_POKEMON_SPRITES_ID,
} from '@/lib/queries';
import { query } from '@/lib/apolloClient';
import {
  EvolutionChainResponse,
  PokemonDetailsResponse,
  SpritesResponse,
} from '@/types/pokemon';

export const searchGraphPokemon = memoize(
  async (value: string, isId: boolean): Promise<PokemonDetailsResponse> => {
    const res = await query({
      query: isId ? GET_POKEMON_BY_ID : GET_POKEMON_DETAILS,
      variables: { idOrName: isId ? +value : value },
    });
    return res;
  },
  {
    persist: true,
    revalidateTags: (query) => [`pokemon:graph:${query}`],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'pokemon:graph:search',
  }
);
export const searchGraphPokemonEvolution = memoize(
  async (id: number): Promise<EvolutionChainResponse> => {
    const res = await query({
      query: GET_POKEMON_EVOLUTION_CHAIN,
      variables: { id },
    });
    return res;
  },
  {
    persist: true,
    revalidateTags: (query) => [`pokemon:evolution:${query}`],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'pokemon:graph:evolution',
  }
);
export const getPokemonSprites = memoize(
  async (id: number): Promise<SpritesResponse> => {
    const res = await query({
      query: GET_POKEMON_SPRITES_ID,
      variables: { id },
    });
    return res;
  },
  {
    persist: true,
    revalidateTags: (query) => [`pokemon:sprites:${query}`],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'pokemon:graph:sprites',
  }
);

import PokemonCard from '@/components/pokemon/PokemonCard';
import LoadingState from '@/components/ui/loadingState';
import { PokemonProps } from '@/types/pokemon';
import { getPokemonBackgroundColor } from '@/utils/color.helper';
import { searchGraphPokemon } from '@/utils/pokemon';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ filter: string }>; // Assuming params is a Promise
}

export async function generateMetadata({ params }: PageProps) {
  const { filter } = await params;
  if (!filter || filter.length === 0) return notFound();
  const isId = !isNaN(+filter);
  const title = !isId
    ? filter
    : (await searchGraphPokemon(filter, isId)).data.species[0].pokemon.nodes[0]
        .name;
  return {
    title: `${title[0].toUpperCase() + title.slice(1)}`,
  };
}

const PokemonPage = async ({ params }: PageProps) => {
  // Extract the route parameter 'filter' from the URL
  const { filter } = await params;
  if (!filter || filter.length === 0) return notFound();

  let loading = true;
  const isId = !isNaN(+filter);
  let pokemonData: PokemonProps = {
    id: -99,
    name: '',
    height: -99,
    weight: -99,
    types: [],
    image: '',
    defaultText: '',
    details: {
      stats: [],
    },
  };
  try {
    loading = true;
    const basicData = await searchGraphPokemon(filter, isId);
    if (
      !basicData.data ||
      !basicData.data.species ||
      basicData.data.species.length === 0
    ) {
      notFound();
    }
    const pokemonFromBasicData = basicData.data.species[0].pokemon.nodes[0];

    pokemonData = {
      id: pokemonFromBasicData.id ?? 0, // Default to 0 if id is undefined or null
      name: pokemonFromBasicData.name ?? 'Unknown', // Default to 'Unknown' if name is undefined
      height: pokemonFromBasicData.height ?? 0, // Default to 0 if height is undefined or null
      weight: pokemonFromBasicData.weight ?? 0, // Default to 0 if weight is undefined or null
      types: pokemonFromBasicData.types ?? [], // Default to an empty array if types is undefined
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonFromBasicData.id}.png`,
      evolutionChainId: basicData.data.species?.[0]?.evolution_chain_id ?? 0, // Default to 0 if evolutionChainId is missing
      defaultText:
        basicData.data.species?.[0]?.flavorText?.[0]?.flavor_text ??
        'No description available', // Default if description is missing
      details: {
        stats: pokemonFromBasicData.stats ?? [], // Default to an empty array if stats is undefined
      },
    };
  } catch {
    notFound();
  } finally {
    loading = false;
  }

  return (
    <main
      className={`flex min-h-screen w-full flex-col gap-2 p-4`}
      style={
        {
          '--custom-bg-color': `${getPokemonBackgroundColor(
            (pokemonData && pokemonData?.types) ?? []
          )}`,
          backgroundColor: 'var(--custom-bg-color)',
        } as React.CSSProperties
      }
    >
      {loading ? (
        <div className="w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <LoadingState className="w-12 h-12 text-white" />
        </div>
      ) : (
        <div className="flex flex-col m-auto">
          <Link href={'/'} className=" text-white pb-2 w-fit">
            <ChevronLeft className="" size={50} />
          </Link>
          <PokemonCard pokemon={pokemonData} />
        </div>
      )}
    </main>
  );
};

export default PokemonPage;

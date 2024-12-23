import {
  EvolutionChainResponse,
  EvolutionItem,
  SpritesResponse,
} from '@/types/pokemon';
import {
  getPokemonSprites,
  searchGraphPokemonEvolution,
} from '@/utils/pokemon';
import Image from 'next/image';

interface Props {
  color: string;
  evolutionId?: number;
}

const Evolutions = async ({ color, evolutionId }: Props) => {
  const evolutionDetails: EvolutionItem[] = [];
  try {
    if (evolutionId) {
      const evolutionChain: EvolutionChainResponse =
        await searchGraphPokemonEvolution(evolutionId);
      if (evolutionChain && evolutionChain.data.chain[0].pokemon.nodes) {
        const promises = evolutionChain.data.chain[0].pokemon.nodes.map(
          async (pokemon) => {
            const sprite: SpritesResponse = await getPokemonSprites(pokemon.id);

            if (sprite.data && sprite.data.sprites) {
              evolutionDetails.push({
                image: sprite.data.sprites[0].sprites.front_default ?? '',
                ...pokemon,
              });
            }
          }
        );

        await Promise.all(promises);
      }
    }
  } catch {}

  return (
    <div
      className="w-full max-w-md flex flex-col items-center justify-center gap-2"
      style={
        {
          '--custom-active-color': `${color}`,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center flex-col sm:flex-row justify-center flex-wrap gap-2">
        {evolutionDetails.map((evolution, index) => (
          <div
            key={evolution.id}
            className="flex flex-col sm:flex-row items-center justify-center sm:gap-4"
          >
            <div className="flex sm:flex-col items-center justify-center">
              <Image
                priority
                className="w-30 h-30 self-center rounded-full object-cover"
                src={evolution.image}
                alt={evolution.image}
                width={80}
                height={80}
              />
              <span className="capitalize">{evolution.name}</span>
            </div>
            {index + 1 < evolutionDetails.length && (
              <div className="flex items-center flex-col sm:flex-row">
                <div className="w-1 sm:w-14 h-14 sm:h-1 bg-[var(--custom-active-color)]"></div>
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-l-[var(--custom-active-color)] transform rotate-90 sm:rotate-0"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evolutions;

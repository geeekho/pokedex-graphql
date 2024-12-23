'use server';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

import { PokemonProps } from '@/types/pokemon';
import { DetailsTabsEnum } from '@/utils/constants';
import Stats from '../pokemon/tabs/Stats';
import Evolutions from './ClientEvolutions';
import { mockEvolutionItems } from '@/__mocks__/pokemon';

interface Props {
  pokemon: PokemonProps;
  color: string;
}

const ClientDetailsSection = ({ pokemon, color }: Props) => {
  const DetailsTabs = [
    {
      value: DetailsTabsEnum.STATS.toLowerCase(),
      label: DetailsTabsEnum.STATS,
      content: <Stats stats={pokemon.details.stats} color={color} />,
    },
    {
      value: DetailsTabsEnum.EVOLUTIONS.toLowerCase(),
      label: DetailsTabsEnum.EVOLUTIONS,
      content: <Evolutions color={color} evolutionData={mockEvolutionItems} />,
    },
    {
      value: DetailsTabsEnum.MOVES.toLowerCase(),
      label: DetailsTabsEnum.MOVES,
    },
  ];
  return (
    <Tabs
      defaultValue={DetailsTabs[0].value}
      className="w-full flex flex-col items-center justify-center gap-y-8 h-full overflow-hidden"
    >
      <TabsList className="flex-1 overflow-hidden overflow-y-auto flex-wrap">
        {DetailsTabs.map((value, index) => (
          <TabsTrigger
            key={index}
            value={value.value}
            className={cn(
              'rounded-full py-2 px-12  uppercase text-base font-normal  data-[state=active]:text-foreground'
            )}
            style={
              {
                '--custom-active-color': `${color}`,
              } as React.CSSProperties
            }
          >
            {value.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {DetailsTabs.map((value, index) => (
        <TabsContent
          key={`content-${index}`}
          value={value.value}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          {value.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ClientDetailsSection;

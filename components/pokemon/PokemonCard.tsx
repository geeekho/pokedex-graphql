'use server';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PokemonTypes from './PokemonTypes';
import { PokemonProps } from '@/types/pokemon';
import DetailsSection from './DetailsSection';
import { typeToColor } from '@/utils/constants';

interface Props {
  pokemon: PokemonProps;
}

const PokemonCard = ({ pokemon }: Props) => {
  const primaryColor = typeToColor[pokemon.types[0].type.name.toLowerCase()];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="shadow-none border-none">
        <CardHeader className="relative pb-2">
          <Image
            className="object-cover absolute -top-[50px] left-1/2 transform -translate-x-1/2"
            src={pokemon.image}
            alt={pokemon.name}
            width={100}
            height={100}
            priority
          />
          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <CardTitle className="capitalize text-base font-normal">
              {pokemon.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <PokemonTypes types={pokemon.types ?? []} />
          <CardDescription className="text-center">
            {pokemon.defaultText}
          </CardDescription>
          <DetailsSection pokemon={pokemon} color={primaryColor} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonCard;

'use server';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { PokemonProps } from '@/types/pokemon';
import { typeToColor } from '@/utils/constants';
import PokemonTypes from '../pokemon/PokemonTypes';
import DetailsSection from './ClientDetailsSection';

interface Props {
  pokemon: PokemonProps;
}

const PokemonCard = ({ pokemon }: Props) => {
  const primaryColor = typeToColor[pokemon.types[0].type.name.toLowerCase()];

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <Card className="shadow-none border-none">
        <CardHeader className="relative pb-2">
          <Image
            className="object-cover absolute top-[-90px] left-1/2 transform -translate-x-1/2"
            src={pokemon.image}
            alt={pokemon.name}
            width={170}
            height={170}
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

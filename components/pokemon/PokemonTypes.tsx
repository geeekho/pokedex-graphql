import React from 'react';
import PokemonType from './PokemonType';
import { Type } from '@/types/pokemon';
import { typeToColor } from '@/utils/constants';

interface Props {
  types: Type[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
      {types &&
        types.length > 0 &&
        types.map((item) => (
          <PokemonType
            key={item.type.name}
            name={item.type.name}
            color={typeToColor[item.type.name.toLowerCase()]}
          />
        ))}
    </div>
  );
};

export default PokemonTypes;

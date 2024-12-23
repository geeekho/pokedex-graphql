import React from 'react';

const PokemonType = ({ name, color }: { name: string; color: string }) => {
  return (
    <div
      style={
        {
          backgroundColor: `${color}`,
        } as React.CSSProperties
      }
      className="rounded-full py-2 px-12 text-white uppercase text-base font-normal pointer-events-none sm:max-w-fit"
      key={name}
    >
      {name}
    </div>
  );
};

export default PokemonType;

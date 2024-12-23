import { Stat } from '@/types/pokemon';
import { statShortcut } from '@/utils/constants';
import React from 'react';
interface Props {
  stats: Stat[];
  color: string;
}
const Stats = ({ stats, color }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      style={
        {
          '--custom-active-color': `${color}`,
        } as React.CSSProperties
      }
    >
      {stats.map((stat) => (
        <div key={stat.stat.name} className="w-full flex items-center gap-x-4">
          <span className="text-start text-[var(--custom-active-color)] text-xs flex-1">
            {statShortcut[stat.stat.name]}
          </span>
          <div className="flex items-center justify-center gap-x-2">
            <h2 className="text-sm text-muted-foreground">{stat.base_stat}</h2>
            <div className="h-2 w-[180px] bg-gray-200 overflow-hidden">
              <div
                className="h-2 rounded-full"
                style={{
                  backgroundColor: color,
                  width: (stat.base_stat > 100 ? 100 : stat.base_stat) + '%',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

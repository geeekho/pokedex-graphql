'use client';

import { typeToColor } from '@/utils/constants';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main
      className={`flex min-h-screen w-full flex-col gap-2 p-4 bg-center bg-auto bg-no-repeat bg-[var(--custom-active-color)] items-start justify-start`}
      style={
        {
          backgroundImage: "url('/assets/404.png')",
          '--custom-active-color': `${typeToColor['fighting']}`,
        } as React.CSSProperties
      }
    >
      <div className="w-full flex items-center text-white">
        <Link href={'/'} className="pb-2 w-fit">
          <ChevronLeft className="" size={50} />
        </Link>
        <h1 className="flex-1 text-center text-xl sm:text-4xl capitalize">
          no pokemon found
        </h1>
      </div>
    </main>
  );
};

export default NotFound;

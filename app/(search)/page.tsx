import SearchCard from '@/components/search/SearchCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
};

export default function SearchPage() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-center gap-2 p-4 md:p-6 bg-cover sm:bg-center bg-no-repeat bg-[left_calc(100%)_top_calc(0%)]
"
      style={{ backgroundImage: "url('/assets/bg-search.png')" }}
    >
      <SearchCard />
    </main>
  );
}

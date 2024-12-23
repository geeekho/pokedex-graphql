import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import SearchForm from './SearchForm';

const SearchCard = () => {
  return (
    <Card className="w-full sm:w-auto sm:min-w-[20rem] shadow-none border-black">
      <CardHeader>
        <Image
          className="self-center rounded-full object-cover"
          src={'/assets/pokeball.png'}
          alt="pokeball"
          width={50}
          height={50}
        />
      </CardHeader>
      <SearchForm />
    </Card>
  );
};

export default SearchCard;

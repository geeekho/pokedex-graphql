import { cn } from '@/lib/utils';
import LoadingState from '../ui/loadingState';

const LoadingScreen = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-cover sm:bg-center bg-no-repeat bg-[left_calc(100%)_top_calc(0%)]',
        className
      )}
      style={{ backgroundImage: "url('/assets/bg-search.png')" }}
    >
      <LoadingState className="w-12 h-12" />
    </div>
  );
};

export default LoadingScreen;

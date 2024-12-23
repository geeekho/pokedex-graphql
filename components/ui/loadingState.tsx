import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';

interface Props extends React.SVGAttributes<SVGElement> {
  loadingText?: string;
}

const LoadingState = ({ loadingText, className, ...props }: Props) => {
  return (
    <>
      <Loader2
        className={cn('mr-2 h-4 w-4 animate-spin', className)}
        {...props}
      />

      {loadingText && <span>{loadingText}</span>}
    </>
  );
};

export default LoadingState;

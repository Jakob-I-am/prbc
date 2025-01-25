import { Skeleton } from '@/components/ui/skeleton';
import { Youtube } from 'lucide-react';

export default function VideoSkeleton() {
  return (
    <div className='w-screen h-[82vh]'>
      <Skeleton className='w-full h-full flex flex-col items-center justify-center bg-gray-200 animate-pulse'>
        <Youtube
          className='text-gray-300 animate-pulse'
          size={100}
        />
      </Skeleton>
    </div>
  );
}

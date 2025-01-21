import Image from 'next/image';

import { Button } from './ui/button';
import Link from 'next/link';

interface FeatureCardProps {
  image: string;
  buttonText: string;
  slug: string;
}

export default function FeatureCard({
  image,
  buttonText,
  slug,
}: FeatureCardProps) {
  return (
    <div className='w-11/12 mx-auto bg-transparent relative rounded'>
      <div className='h-[15rem] md:h-[18.5rem]'>
        <Image
          src={image}
          height={400}
          width={400}
          className='object-cover h-full w-full rounded'
          alt='People having fun at an event'
        />
        <div className='absolute inset-0 bg-black bg-opacity-20 rounded' />
        <div className='absolute bottom-0 left-0 right-0 p-8 text-secondary'>
          <Link href={slug}>
            <Button className='bg-primary w-full text-lg md:text-xl border hover:scale-[1.02] hover:bg-secondary hover:text-primary hover:border-primary'>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

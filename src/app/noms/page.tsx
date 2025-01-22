import BowlsNomsForm from '@/components/BowlsNomsForm';
import Image from 'next/image';

import bgImage from '../../../public/bgImage.jpg';

export default function BowlsNomsPage() {
  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src={bgImage}
          alt='Bowling club interior'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
            Bowls Nominations
          </h1>
        </div>
      </section>
    </div>
  );
}

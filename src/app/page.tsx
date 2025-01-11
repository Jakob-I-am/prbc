import { Quote } from 'lucide-react';

import PostCarousel from '@/components/PostCarousel';
// import GalleryCarousel from '@/components/GalleryCarousel';

export default function Home() {
  return (
    <div className='my-2'>
      <div className='flex flex-col md:grid md:h-full md:items-center md:justify-center'>
        <div className='h-[15rem] md:h-[25rem] flex flex-col items-center justify-center text-secondary text-center'>
          <h1 className='text-4xl font-bold md:text-7xl'>
            <span className='md:-translate-x-10 -translate-x-6 inline-block'>
              Parkes Railway
            </span>
            <br />
            <span className='inline-block md:translate-x-10 translate-x-6'>
              Bowling Club
            </span>
          </h1>
          <p className='text-3xl md:text-5xl font-bold text-secondary text-center py-5'>
            <Quote
              className='inline transform rotate-180 -translate-y-3 h-4 w-4 md:w-7 md:h-7'
              color='#f87171'
              fill='#f87171'
            />{' '}
            Toot Toot{' '}
            <Quote
              className='inline -translate-y-3 h-4 w-4 md:h-7 md:w-7'
              color='#f87171'
              fill='#f87171'
            />
          </p>
        </div>

        <div className=''>
          <p className='text-secondary text-2xl md:text-4xl mb-5 pl-4 md:pl-0'>
            Recent News
          </p>
          <PostCarousel />
        </div>
      </div>

      {/* <div className='flex flex-col w-9/12 mx-auto md:w-11/12'>
          <p>Recent Images</p>
          <div className='flex items-center'>
            <GalleryCarousel />
          </div>
        </div> */}
    </div>
  );
}

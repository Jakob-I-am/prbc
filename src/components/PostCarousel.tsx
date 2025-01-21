'use client';

import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { use } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import { PostSlide } from '@/lib/ActionsInterfaces';

export default function PostCarousel({ data }: { data: Promise<PostSlide[]> }) {
  const slides = use(data);

  return (
    <>
      <Carousel
        className='w-full md:max-w-[90vw] mx-auto'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className='-ml-1 flex items-center h-[20rem]'>
          {slides.map((slide: PostSlide) => (
            <CarouselItem
              key={slide.slug}
              className='pl-1 md:basis-1/2 lg:basis-1/3'
            >
              <div className='p-1'>
                <Card className='rounded hover:scale-[1.015]'>
                  <CardContent className='h-[19rem] p-0 relative'>
                    <Link href={`/news/${slide.slug}`}>
                      <Image
                        src={slide.featuredImg.url}
                        alt={slide.title}
                        width={200}
                        height={200}
                        className='h-full w-full object-cover rounded'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-40 rounded'>
                        <div className='absolute bottom-0 left-0 right-0 p-8 text-secondary'>
                          <h2 className='text-xl md:text-2xl'>{slide.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='ml-16 md:ml-0' />
        <CarouselNext className='mr-16 md:mr-0' />
      </Carousel>
    </>
  );
}

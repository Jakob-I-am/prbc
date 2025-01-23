'use client';

import React, { use } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { GalleryImage } from '../lib/ActionsInterfaces';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function ImageCarousel({
  data,
}: {
  data: Promise<GalleryImage[]>;
}) {
  const images = use(data);

  return (
    <section className='bg-gray-50 py-8 md:py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>
          Club Gallery
        </h2>
        <div className='relative'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className='w-full'
          >
            <CarouselContent className='-ml-2 md:-ml-4'>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className='pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                >
                  <div className='relative aspect-[4/3] md:aspect-video'>
                    <Card className='rounded'>
                      <CardContent className='h-[20rem] md:h-[24rem] p-0 relative'>
                        <Image
                          src={image.image.url}
                          alt={image.imageName}
                          width={image.image.width}
                          height={image.image.height}
                          className='h-full w-full object-center object-cover rounded'
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-10 rounded' />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='hidden sm:block'>
              <CarouselPrevious
                variant='default'
                className='left-0 -translate-x-10'
              />
              <CarouselNext
                variant='default'
                className='right-0 translate-x-10'
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import { getGalleryImages } from '../../services';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Image {
  image: {
    url: string;
  };
  description: string;
  imageName: string;
}

export default function GalleryCarousel() {
  const [images, setImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    const data = await getGalleryImages();
    return data;
  };

  useEffect(() => {
    fetchImages().then((data) => setImages(data));
  }, []);

  return (
    <div className=''>
      <Carousel
        className='w-full md:max-w-[90vw] mx-auto'
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className='-ml-1 flex items-center h-[15rem] md:h-[25rem]'>
          {images.map((image: Image) => (
            <CarouselItem
              key={image.imageName}
              className='pl-1 md:basis-1/2 lg:basis-1/3'
            >
              <div className='p-1'>
                <Card className='rounded'>
                  <CardContent className='h-[14rem] md:h-[24rem] p-0 relative'>
                    <Image
                      src={image.image.url}
                      alt={image.imageName}
                      width={200}
                      height={200}
                      className='h-full w-full object-center object-cover rounded'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-20 rounded' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='ml-16 md:ml-0' />
        <CarouselNext className='mr-16 md:mr-0' />
      </Carousel>
    </div>
  );
}

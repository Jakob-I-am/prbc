'use client';

import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getGalleryImages } from '../../services';

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

  console.log(images);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image: Image) => (
          <CarouselItem key={image.imageName}>
            <Image
              src={image.image.url}
              alt={image.imageName}
              className='h-full w-full object-contain rounded-lg'
              width={500}
              height={500}
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

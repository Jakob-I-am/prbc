'use client';

import Autoplay from 'embla-carousel-autoplay';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { PostSlide } from '@/lib/ActionsInterfaces';

export default function PostCarousel({ data }: { data: Promise<PostSlide[]> }) {
  const blogPosts = use(data);

  return (
    <section className='py-8 md:py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>
          Latest News
        </h2>
        <div className='relative'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className='w-full'
          >
            <CarouselContent className='-ml-2 md:-ml-4 flex items-center min-h-[20rem]'>
              {blogPosts.map((post, index) => (
                <CarouselItem
                  key={index}
                  className='pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                >
                  <Card className='h-full'>
                    <CardContent className='h-[19rem] p-0 relative'>
                      <Link href={`/news/${post.slug}`}>
                        <Image
                          src={post.featuredImg.url}
                          alt={post.title}
                          width={200}
                          height={200}
                          className='h-full w-full object-cover rounded'
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-40 rounded'>
                          <div className='absolute bottom-0 left-0 right-0 p-8 text-secondary space-y-2'>
                            <CardTitle className='text-lg md:text-xl'>
                              {post.title}
                            </CardTitle>
                            <p className='text-sm md:text-base text-white'>
                              {new Date(post.createdAt).toLocaleDateString()}
                            </p>

                            <p className='text-white text-sm md:text-base'>
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
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

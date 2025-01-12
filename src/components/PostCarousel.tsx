'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { getSlides } from '../../services';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  title: string;
  slug: string;
  excerpt: string;
  featuredImg: {
    url: string;
  };
}

export default function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);

  const fetchSlides = async () => {
    const data = await getSlides();
    return data;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    fetchSlides().then((data) => setSlides(data));

    const interval: NodeJS.Timeout = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className='w-full h-[400px] flex justify-center items-center perspective-[1000px] bg-primary'>
      <div className='relative w-screen h-[400px] md:w-[800px] md:h-full'>
        {slides.map((slide: Slide, index: number) => {
          let transform = 'md:scale-60 md:translate-x-0 md:rotate-y-0';
          let zIndex = 'z-0';
          if (index === currentSlide) {
            transform = 'md:scale-100 md:translate-z-0';
            zIndex = 'z-[3]';
          } else if (
            index === currentSlide - 1 ||
            (currentSlide === 0 && index === slides.length - 1)
          ) {
            transform = 'md:scale-75 md:-translate-x-60 md:rotate-y-12';
            zIndex = 'z-[2]';
          } else if (
            index === currentSlide + 1 ||
            (currentSlide === slides.length - 1 && index === 0)
          ) {
            transform = 'md:scale-75 md:translate-x-60 md:-rotate-y-12';
            zIndex = 'z-[2]';
          }
          return (
            <div
              key={slide.slug}
              className={`absolute md:w-[800px] h-full transition-all duration-500 transform-style-preserve-3d ${transform} ${
                index === currentSlide ? 'opacity-100' : 'opacity-60'
              } ${zIndex}`}
              aria-hidden={index !== currentSlide}
            >
              <Link
                href={`/news/${slide.slug}`}
                className='block w-full h-full transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                aria-label={`View more about ${slide.title}`}
                tabIndex={index === currentSlide ? 0 : -1}
              >
                <Image
                  src={slide.featuredImg.url}
                  alt={slide.title}
                  className='h-full md:w-full object-cover md:rounded-lg'
                  width={800}
                  height={500}
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 md:rounded-lg'>
                  <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                    <h2 className='text-2xl font-rubik-bold md:text-4xl mb-4'>
                      {slide.title}
                    </h2>
                    <p className='text-lg md:text-xl font-rubik'>
                      {slide.excerpt.slice(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10'
          aria-label='Previous slide'
        >
          <ChevronLeft className='w-6 h-6 text-white' />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10'
          aria-label='Next slide'
        >
          <ChevronRight className='w-6 h-6 text-white' />
        </button>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10'>
          {slides.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

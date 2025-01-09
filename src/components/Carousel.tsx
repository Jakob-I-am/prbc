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

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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

    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className='w-full h-[500px] flex justify-center items-center perspective-[1000px] bg-neutral-100'>
      <div className='relative w-[800px] h-[500px]'>
        {slides.map((slide: Slide, index: number) => {
          let transform = 'scale(0.6) translateX(0) rotateY(0)';
          let zIndex = 0;
          if (index === currentSlide) {
            transform = 'scale(1) translateZ(0)';
            zIndex = 3;
          } else if (
            index === currentSlide - 1 ||
            (currentSlide === 0 && index === slides.length - 1)
          ) {
            transform = 'scale(0.8) translateX(-80%) rotateY(30deg)';
            zIndex = 2;
          } else if (
            index === currentSlide + 1 ||
            (currentSlide === slides.length - 1 && index === 0)
          ) {
            transform = 'scale(0.8) translateX(80%) rotateY(-30deg)';
            zIndex = 2;
          }
          return (
            <div
              key={slide.slug}
              className='absolute w-[800px] h-full transition-all duration-500 transform-style-preserve-3d'
              style={{
                transform,
                opacity: index === currentSlide ? 1 : 0.6,
                zIndex,
              }}
              aria-hidden={index !== currentSlide}
            >
              <Link
                href={`/${slide.slug}`}
                className='block w-full h-full transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                aria-label={`View more about ${slide.title}`}
                tabIndex={index === currentSlide ? 0 : -1}
              >
                <Image
                  src={slide.featuredImg.url}
                  alt={slide.title}
                  className='w-full h-full object-cover rounded-lg'
                  fill
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg'>
                  <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                    <h2 className='text-4xl font-bold mb-4'>{slide.title}</h2>
                    <p className='text-xl'>{slide.excerpt}</p>
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
          {slides.map((_: any, index: number) => (
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

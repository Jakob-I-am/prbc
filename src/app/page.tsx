import { Suspense } from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

import GalleryCarousel from '@/components/GalleryCarousel';
import ContactForm from '@/components/ContactForm';
import BowlsNomsForm from '@/components/BowlsNomsForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeatureCard from '@/components/FeatureCard';
import { featureCardDetails } from '@/lib/utils';
import bgImage from '/public/bgImage.jpg';
import logo from '/public/logo.png';

import PostCarousel from '@/components/PostCarousel';

import { getPostSlides } from '@/actions/blogPostActions';
import { getGalleryImages } from '@/actions/imageActions';

export default function Home() {
  const slides = getPostSlides();
  const images = getGalleryImages();

  return (
    <div className='grid-cols-1 grid-rows-5 gap-4 md:grid-cols-12 md:grid-rows-5 md:gap-4'>
      <div className='h-[calc(100vh-15rem)] md:h-[calc(100vh-25rem)]'>
        <div className=''>
          <div className=''>
            <h1 className='md:text-7xl font-bold text-center text-primary'>
              Parkes Railway Bowling Club
            </h1>
          </div>

          <div className=''>
            <p className='md:w-8/12 text-2xl mb-12'>
              The Parkes Railway Bowling Club is a vibrant hub of activity,
              offering an array of entertainment and social opportunities for
              the local community. Our doors are open from Wednesday through
              Sunday, inviting you to enjoy a range of engaging experiences.
            </p>
            <h2 className='md:text-7xl text-primary'>
              <Quote
                className='inline transform rotate-180 -translate-y-3 h-4 w-4 md:w-7 md:h-7'
                color='#ef4444'
                fill='#ef4444'
              />{' '}
              Toot Toot{' '}
              <Quote
                className='inline -translate-y-3 h-4 w-4 md:h-7 md:w-7'
                color='#ef4444'
                fill='#ef4444'
              />
            </h2>
          </div>
          <div className=''>
            <Image
              src={bgImage}
              alt='a picture of the bowling club'
            />
          </div>
        </div>
      </div>
      {/* 
      <div className='md:col-span-12 md:col-start-1 md:row-start-2'>
        <div className='bg-primary md:h-[20rem]'>
          <Suspense fallback={<p>Loading...</p>}>
            <PostCarousel data={slides} />
          </Suspense>
        </div>
      </div>

      <div className='md:col-span-12 md:col-start-1 md:row-start-3 py-12'>
        <div className='md:grid md:grid-cols-4 md:grid-rows-1'>
          {featureCardDetails.map((detail) => (
            <div>
              <FeatureCard
                key={detail.slug}
                image={detail.image}
                buttonText={detail.buttonText}
                slug={detail.slug}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='md:col-span-12 md:col-start-1 md:row-start-4 my-12'>
        <div className='md:grid md:grid-cols-12 md:grid-rows-1'>
          <div className='col-span-5 col-start-2'>
            <div className='hidden md:block md:place-self-center'>
              <ContactForm />
            </div>
          </div>
          <div className='md:col-span-5 md:col-start-7'>
            <div className='md:col-span-4 md:col-start-8 md:row-start-4'>
              <div className='hidden md:block md:place-self-center'>
                <BowlsNomsForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs
        defaultValue='nominations'
        className='flex flex-col md:hidden col-span-full py-10'
      >
        <TabsList className='w-10/12 self-center rounded'>
          <TabsTrigger
            className='rounded'
            value='contact'
          >
            Contact Us
          </TabsTrigger>
          <TabsTrigger
            className='rounded'
            value='nominations'
          >
            Bowls Nominations
          </TabsTrigger>
        </TabsList>
        <TabsContent value='contact'>
          <div className='w-11/12 mx-auto h-[29rem] bg-secondary p-4 rounded'>
            <h4 className='text-destructive text-center text-2xl uppercase'>
              Contact Us
            </h4>
            <ContactForm />
          </div>
        </TabsContent>
        <TabsContent value='nominations'>
          <div className='w-11/12 mx-auto h-[29rem] bg-secondary p-4 rounded'>
            <p className='text-destructive text-center text-2xl uppercase'>
              Bowls Nominations
            </p>
            <BowlsNomsForm />
          </div>
        </TabsContent>
      </Tabs>

      <div className='md:col-span-12 md:col-start-1 md:row-start-5 py-12 bg-primary'>
        <Suspense fallback={<p>Loading...</p>}>
          <GalleryCarousel data={images} />
        </Suspense>
      </div> */}
    </div>
  );
}

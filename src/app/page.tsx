import { Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import GalleryCarousel from '@/components/GalleryCarousel';
import ContactForm from '@/components/ContactForm';
import BowlsNomsForm from '@/components/BowlsNomsForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PostCarousel from '@/components/PostCarousel';
import FeatureCard from '@/components/FeatureCard';
import { featureCardDetails } from '@/lib/utils';
import bgImage from '/public/bgImage.jpg';
import logo from '/public/logo.png';

export default function Home() {
  return (
    <div className='md:col-span-full'>
      <div className='h-[calc(100vh-15rem)] md:h-[calc(100vh-20rem)] w-full relative'>
        <Image
          src={bgImage}
          className='h-full w-full object-cover object-right'
          alt='Picture of the Bowling club'
        />
        <Image
          src={logo}
          height={100}
          width={100}
          className='absolute top-5 left-5 size-14 z-10 md:hidden'
          alt='PRBC logo'
        />
        <div className='absolute inset-0 bg-blue-500 bg-opacity-85' />
        <div className='absolute top-[40%] left-0 md:left-[10%] right-0 p-8 text-secondary space-y-3 md:space-y-1'>
          <h1 className='text-3xl md:text-7xl font-bold uppercase leading-tight drop-shadow-[0_0_3px_rgba(239,68,68,1)]'>
            <span className='block'>Parkes Railway</span>
            <span className='block'>Bowling Club</span>
          </h1>
          <p className='text-sm md:text-xl md:w-[50%]'>
            The Parkes Railway Bowling Club is a vibrant hub of activity,
            offering an array of entertainment and social opportunities for the
            local community.
          </p>
          <h2 className='text-2xl md:text-5xl font-bold'>
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
      </div>

      <div className='bg-primary h-[15rem]'>
        <PostCarousel />
      </div>

      <div className='bg-secondary my-5 md:my-24 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 md:mx-5'>
        {featureCardDetails.map((detail) => (
          <FeatureCard
            image={detail.image}
            buttonText={detail.buttonText}
            slug={detail.slug}
          />
        ))}
      </div>

      <div className='hidden md:flex md:flex-row items-center md:justify-center space-x-10 bg-primary py-10'>
        <div className='md:w-1/4 md:h-[27rem] bg-secondary p-4 rounded'>
          <p className='text-destructive text-center text-2xl'>Contact Us</p>
          <ContactForm />
        </div>
        <div className='md:w-1/4 md:h-[27rem] bg-secondary p-4 rounded'>
          <p className='text-destructive text-center text-2xl'>
            Bowls Nominations
          </p>
          <BowlsNomsForm />
        </div>
      </div>

      <Tabs
        defaultValue='nominations'
        className='flex flex-col md:hidden col-span-full bg-primary py-10'
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

      <div className='bg-primary h-[18rem] md:h-[30rem]'>
        <h4 className='text-secondary uppercase text-2xl md:text-4xl pl-4 md:text-center'>
          Recent Images
        </h4>
        <GalleryCarousel />
      </div>
    </div>
  );
}

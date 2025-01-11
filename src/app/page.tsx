import { Quote } from 'lucide-react';
import Link from 'next/link';

import PostCarousel from '@/components/PostCarousel';
import GalleryCarousel from '@/components/GalleryCarousel';
import ContactForm from '@/components/ContactForm';
import BowlsNomsForm from '@/components/BowlsNomsForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col md:h-full md:items-center md:justify-center space-y-16 md:space-y-32 pb-20 md:p-12'>
        <div className='h-[15rem] md:h-[15rem] flex flex-col md:flex-row items-center justify-center space-y-5 md:space-x-12'>
          <h1 className='text-4xl font-bold md:text-7xl text-secondary text-center'>
            <span className='md:-translate-x-10 -translate-x-4 inline-block'>
              Parkes Railway
            </span>
            <br />
            <span className='inline-block md:translate-x-10 translate-x-6'>
              Bowling Club
            </span>
          </h1>
          <h2 className='text-3xl md:text-5xl font-bold text-secondary text-center py-5'>
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

        <div>
          <h4 className='text-secondary text-2xl md:text-4xl mb-5 pl-4 md:pl-0'>
            Recent News
          </h4>
          <PostCarousel />
        </div>

        <div className='px-4 md:w-1/2 mx-auto'>
          <p className='text-2xl md:text-4xl text-secondary text-center'>
            The Parkes Railway Bowling Club is a vibrant hub of activity,
            offering an array of entertainment and social opportunities for the
            local community. Our doors are open from Wednesday through Sunday,
            inviting you to enjoy a range of engaging experiences.
          </p>
          <div className='text-right mt-3'>
            <Link
              className='text-2xl md:text-4xl text-destructive font-semibold'
              href='/about'
            >
              - Find Out More About Us
            </Link>
          </div>
        </div>

        <div>
          <h4 className='text-secondary text-2xl md:text-4xl mb-5 pl-4 md:pl-0'>
            Recent Images
          </h4>
          <GalleryCarousel />
        </div>

        <div className='hidden md:flex flex-col md:flex-row w-full h-full items-center justify-center md:justify-evenly'>
          <div
            id='contact-form'
            className='w-11/12 md:w-1/3 h-[29rem] md:h-[27rem] mb-10 md:mb-0 bg-secondary p-4 rounded-xl'
          >
            <p className='text-destructive text-center text-2xl'>Contact Us</p>
            <ContactForm />
          </div>
          <div
            id='bowlsnoms-form'
            className='w-11/12 md:w-1/3 h-[24rem] md:h-[27rem] bg-secondary p-4 rounded-xl'
          >
            <p className='text-destructive text-center text-2xl'>
              Bowls Nominations
            </p>
            <BowlsNomsForm />
          </div>
        </div>

        <Tabs
          defaultValue='contact'
          className='flex flex-col md:hidden w-full md:w-1/3 h-full'
        >
          <TabsList className='w-2/3 self-center'>
            <TabsTrigger value='contact'>Conatct Us</TabsTrigger>
            <TabsTrigger value='nominations'>Bowls Nominations</TabsTrigger>
          </TabsList>
          <TabsContent value='contact'>
            <div
              id='contact-form'
              className='w-11/12 mx-auto md:w-full h-[29rem] md:h-[27rem] mb-10 md:mb-0 bg-secondary p-4 rounded-xl'
            >
              <p className='text-destructive text-center text-2xl'>
                Contact Us
              </p>
              <ContactForm />
            </div>
          </TabsContent>
          <TabsContent value='nominations'>
            <div
              id='bowlsnoms-form'
              className='w-11/12 mx-auto md:w-full h-[29rem] md:h-[27rem] bg-secondary p-4 rounded-xl'
            >
              <p className='text-destructive text-center text-2xl'>
                Bowls Nominations
              </p>
              <BowlsNomsForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

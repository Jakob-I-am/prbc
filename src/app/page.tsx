import { ArrowRight, Mail, Phone, MapPin, Quote, Info } from 'lucide-react';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
// import BowlsNomsForm from '@/components/BowlsNomsForm';
import PostCarousel from '@/components/PostCarousel';
import ImageCarousel from '@/components/ImageCarousel';

import event from '../../public/event.jpg';
import membership from '../../public/membership.jpeg';
import bowls from '../../public/bowls.jpeg';
import dining from '../../public/dining.jpg';

import { getPostSlides } from '@/actions/blogPostActions';
import { getGalleryImages } from '@/actions/imageActions';

export default function Home() {
  const posts = getPostSlides();
  const images = getGalleryImages();

  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[74vh] md:h-[70vh] w-full overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1599013835026-83ff15455779?q=80&w=2000&auto=format&fit=crop'
          alt='Bowling club panorama'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
            Parkes Railway Bowling Club
          </h1>
          <p className='text-2xl md:text-4xl mb-8'>
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
          </p>
          <div className='md:hidden flex gap-4'>
            <Link href='/about'>
              <Button
                size='lg'
                variant='default'
                className='hover:bg-secondary hover:text-primary hover:scale-[1.0125] hover:border hover:border-primary'
              >
                About Us
              </Button>
            </Link>
            <Link href='#contact'>
              <Button
                size='lg'
                variant='outline'
                className='hover:bg-primary hover:text-secondary text-primary hover:scale-[1.0125] hover:border-none'
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-white h-[26vh] md:h-[23vh] w-full overflow-hidden'></section>

      <section className='container mx-auto py-16 px-4'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {[
              {
                title: 'Events',
                image: event.src,
                slug: '/events',
              },
              {
                title: 'Bowls',
                image: bowls.src,
                slug: '/bowls',
              },
              {
                title: 'Membership',
                image: membership.src,
                slug: '/about#membership',
              },
              {
                title: 'Dining',
                image: dining.src,
                slug: '/about#dining',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className='overflow-hidden'
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className='w-full h-32 object-cover'
                />
                <div className='p-4'>
                  <h3 className='font-semibold mb-2'>{service.title}</h3>
                  <Link href={service.slug}>
                    <Button
                      variant='link'
                      className='p-0'
                    >
                      Learn More <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold mb-6'>About Us</h2>
            <p className='text-lg text-gray-700 mb-6'>
              The Parkes Railway Bowling Club is a vibrant hub of activity,
              offering an array of entertainment and social opportunities for
              the local community. Our doors are open from Wednesday through
              Sunday, inviting you to enjoy a range of engaging experiences.
            </p>
            <Button className='self-start'>About us</Button>
          </div>
        </div>
      </section>

      <div className='w-full'>
        <Suspense fallback={<p>Loading...</p>}>
          <PostCarousel data={posts} />
        </Suspense>
      </div>

      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
              <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
              <p className='text-lg text-gray-700 mb-6'>
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Phone className='h-5 w-5 mr-2 text-gray-600' />
                  <span>(02) 6862 2772</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-5 w-5 mr-2 text-gray-600' />
                  <span>railwaydiggersbc@bigpond.com</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='h-5 w-5 mr-2 text-gray-600' />
                  <span>70/28 Hooley Street, Parkes NSW 2870</span>
                </div>
              </div>
            </div>
            <div
              className='md:w-10/12 md:place-self-end'
              id='contact'
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* <section className='container mx-auto py-16 px-4'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='md:w-8/12'>
            <h2 className='text-3xl font-bold mb-6'>
              Social Bowls Nominations
            </h2>
            <BowlsNomsForm />
          </div>
          <div className='flex flex-col justify-center'>
            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <Info className='mr-2 h-5 w-5' />
                Important Information
              </h3>
              <div className='space-y-6'>
                <div>
                  <h4 className='font-semibold mb-2'>Arrival Time</h4>
                  <p className='text-gray-600'>
                    Please arrive 15 minutes before your session for
                    registration and equipment setup.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Equipment Rental</h4>
                  <p className='text-gray-600'>
                    Bowls are available for hire at $5 per session. Please
                    indicate during registration if you need to hire equipment.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Dress Code</h4>
                  <p className='text-gray-600'>
                    Neat casual dress is required. Flat-soled shoes or bare feet
                    are mandatory on the green.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Coaching</h4>
                  <p className='text-gray-600'>
                    Basic instruction is provided for beginners at the start of
                    each session.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Weather Policy</h4>
                  <p className='text-gray-600'>
                    Sessions may be cancelled due to adverse weather conditions.
                    You will be notified by SMS/email.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      <div className='w-full'>
        <Suspense fallback={<p>Loading...</p>}>
          <ImageCarousel data={images} />
        </Suspense>
      </div>
    </div>
  );
}

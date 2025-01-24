import { ArrowRight, CalendarDays, Clock, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { getEventPosts } from '@/actions/blogPostActions';

import bgImage from '../../../public/bgImage.jpg';

export default async function page() {
  const eventPosts = await getEventPosts();

  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src={bgImage}
          alt='Bowling club interior'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
            Events
          </h1>
          <p className='text-xl md:text-2xl text-center'>
            Stay up to date with every social event happening at the Parkes
            Railway Bowling Club
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Phone className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Phone</h2>
              <p className='text-gray-600 mb-4'>Available 7 days a week</p>
              <Link
                href='tel:(02)68622772'
                className='font-medium'
              >
                (02) 6862 2772
              </Link>
            </Card>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Mail className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Email</h2>
              <p className='text-gray-600 mb-4'>
                We'll respond within 24 hours
              </p>
              <Link
                href='mailto:railwaydiggersbc@bigpond.com'
                className='font-medium'
              >
                railwaydiggersbc@bigpond.com
              </Link>
            </Card>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Clock className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Opening Hours</h2>
              <p className='text-gray-600 mb-2'>Wed-Thu: 10:00 AM - 10:00 PM</p>
              <p className='text-gray-600'>Fri-Sat: 10:00 AM - 12:00 AM</p>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {eventPosts.map((post, index) => (
              <Card
                key={index}
                className='overflow-hidden flex flex-col hover:shadow-lg transition-shadow'
              >
                <div className='relative h-48'>
                  <Image
                    src={post.featuredImg.url}
                    alt={post.title}
                    width={300}
                    height={300}
                    className='absolute inset-0 w-full h-full object-cover'
                  />
                </div>
                <div className='p-6 flex flex-col flex-1'>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <CalendarDays className='h-4 w-4 mr-2' />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <h2 className='text-xl font-semibold mb-3'>{post.title}</h2>
                  <p className='text-gray-600 mb-4 flex-1'>{post.excerpt}</p>
                  <Link href={`/news/${post.slug}`}>
                    <Button
                      variant='link'
                      className='p-0 self-start group'
                    >
                      Read More
                      <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

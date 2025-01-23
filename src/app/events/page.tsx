import { ArrowRight, CalendarDays } from 'lucide-react';
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
            Railwa Bowling Club
          </p>
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

          <div className='flex justify-center mt-12'>
            <Button
              variant='outline'
              size='lg'
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

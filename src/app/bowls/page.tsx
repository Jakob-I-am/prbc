import {
  ArrowRight,
  Backpack,
  CalendarDays,
  Info,
  LoaderPinwheel,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { getBowlsPosts } from '@/actions/blogPostActions';

import bgImage from '../../../public/bgImage.jpg';

export default async function BowlsPage() {
  const bowlsPosts = await getBowlsPosts();

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
            Bowls
          </h1>
          <p className='text-xl md:text-2xl text-center'>
            Get all the information and Stay up to date with everything
            happening on the greens at the Parkes Railway Bowling Club
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <LoaderPinwheel className='mr-2 h-5 w-5' />
                Social Bowls Sessions
              </h3>
              <div className='space-y-4'>
                <p className='text-gray-600'>Each session includes:</p>
                <ul className='space-y-2 text-gray-600'>
                  <li>• 15 minutes pre-game briefing</li>
                  <li>• 2 hours of social bowling</li>
                  <li>• Basic instruction for beginners</li>
                  <li>• Post-game refreshments available at the club</li>
                </ul>
              </div>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <Info className='mr-2 h-5 w-5' />
                Session Information
              </h3>
              <div className='space-y-4'>
                <p className='text-gray-600'>Each session includes:</p>
                <ul className='space-y-2 text-gray-600'>
                  <li>• 15 minutes pre-game briefing</li>
                  <li>• 2 hours of social bowling</li>
                  <li>• Basic instruction for beginners</li>
                  <li>• Post-game refreshments available at the club</li>
                </ul>
              </div>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <Backpack className='mr-2 h-5 w-5' />
                What to Bring
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Flat-soled shoes or bare feet (required)</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Comfortable, loose-fitting clothing</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Hat and sunscreen</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Water bottle</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Your own bowls (if you have them)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold pb-8'>Bowls News</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {bowlsPosts.map((post, index) => (
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

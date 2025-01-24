import { Clock, Coffee, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import bgImage from '../../../public/bgImage.jpg';
import birdsEye from '../../../public/birds-eye.jpg';
import meal1 from '../../../public/meal1.png';
import meal2 from '../../../public/meal2.png';
import meal3 from '../../../public/meal3.png';
import meal4 from '../../../public/meal4.png';

export default function AboutPage() {
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
            About Us
          </h1>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl md:text-3xl font-bold mb-6'>
                Parkes Railway Bowling Club
              </h2>
              <div className='space-y-4 text-gray-700 text-lg'>
                <p className=''>
                  The Parkes Railway Bowling Club is a vibrant hub of activity,
                  offering an array of entertainment and social opportunities
                  for the local community. Our doors are open from Wednesday
                  through Sunday, inviting you to enjoy a range of engaging
                  experiences.
                </p>
                <p className=''>
                  Whether you&apos;re in the mood for a friendly game of
                  barefoot bowls or an evening filled with social events and
                  functions, the Parkes Railway Bowling Club has something to
                  delight everyone. Our Friday night raffle is a particular
                  highlight, where you can have a rollicking good time while
                  vying for some truly fantastic prizes. The action kicks off at
                  7 pm, so be sure to arrive early and secure your spot.
                </p>
                <p className=''>
                  After an evening of fun and excitement, you can cap off your
                  visit by indulging in a delightful meal at our on-site
                  restaurant. With our happy hour starting at 5:00 pm, it&apos;s
                  the perfect choice for an enjoyable dinner out.
                </p>
                <p className=''>
                  The Parkes Railway Bowling Club is always buzzing with
                  activity, so be sure to check back regularly for the latest
                  news, bowls draw updates, and information on upcoming events.
                  We&apos;re dedicated to keeping the community engaged and
                  entertained, so come join us and be a part of the excitement!
                </p>
              </div>
            </div>
            <div className='relative h-[400px] rounded-lg overflow-hidden'>
              <Image
                src={birdsEye}
                alt='Historical club photo'
                className='absolute inset-0 w-full h-full object-cover object-left'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='flex items-center justify-center mb-8'>
              <Clock className='w-8 h-8 mr-3 text-gray-600' />
              <h2 className='text-3xl font-bold'>Operating Hours</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='p-4'>
                <h3 className='text-xl font-semibold mb-4'>Club Hours</h3>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span>Wednesday - Thursday</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Friday - Saturday</span>
                    <span>10:00 AM - 12:00 AM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </Card>
              <Card className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Bowling Green Hours
                </h3>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - Sunset</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday - Sunday</span>
                    <span>8:00 AM - Sunset</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-16 bg-white'
        id='membership'
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-center mb-12'>
            <Users className='w-8 h-8 mr-3 text-gray-600' />
            <h2 className='text-3xl font-bold'>Membership</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: 'Social Membership',
                price: '$10',
                benefits: [
                  'Access to club facilities',
                  'Member drink prices',
                  'Club events participation',
                ],
              },
              {
                title: 'Bowling Membership',
                price: '$120',
                benefits: [
                  'All social member benefits',
                  'Access to bowling greens',
                  'Competition participation',
                ],
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className='p-6 w-11/12 md:w-8/12 place-self-center'
              >
                <h3 className='text-xl font-semibold mb-2'>{tier.title}</h3>
                <p className='text-3xl font-bold mb-4'>{tier.price}</p>
                <ul className='space-y-2'>
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className='flex items-start'
                    >
                      <span className='text-green-500 mr-2'>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href='/contact-form'>
                  <Button className='w-4/12 mt-6'>Enquire Now</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className='py-16 bg-gray-50'
        id='dining'
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-center mb-12'>
            <Coffee className='w-8 h-8 mr-3 text-gray-600' />
            <h2 className='text-3xl font-bold'>Dining</h2>
          </div>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold'>The Railway Bistro</h3>
              <p className='text-gray-700'>
                Experience exceptional dining at our club Bistro, offering a
                diverse menu of classic Australian dishes and international
                cuisine. Our chefs use locally sourced ingredients to create
                memorable meals for our members and guests.
              </p>
              <div className='space-y-4'>
                <h4 className='font-semibold'>Restaurant Hours:</h4>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <p className='font-medium'>Lunch</p>
                    <p className='text-gray-600'>Wed-Sun: </p>
                    <p className='text-gray-600'>12:00 PM - 2:30 PM</p>
                  </div>
                  <div>
                    <p className='font-medium'>Dinner</p>
                    <p className='text-gray-600'>Wed-Sat: </p>
                    <p className='text-gray-600'>6:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={meal1}
                alt='Restaurant interior'
                className='rounded-lg md:h-44 md:w-72'
                width={200}
                height={200}
              />
              <Image
                src={meal2}
                alt='Restaurant interior'
                className='rounded-lg md:h-44 md:w-72'
                width={200}
                height={200}
              />
              <Image
                src={meal3}
                alt='Restaurant interior'
                className='rounded-lg md:h-44 md:w-72'
                width={200}
                height={200}
              />
              <Image
                src={meal4}
                alt='Sample dish'
                className='rounded-lg md:h-44 md:w-72'
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-16 bg-white'
        id='venue'
      >
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>The Club</h2>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-2xl font-semibold mb-4'>Facilities</h3>
                <ul className='space-y-3'>
                  <li>✓ 2 Championship Bowling Greens</li>
                  <li>✓ Modern Clubhouse</li>
                  <li>✓ Covered Outdoor Areas</li>
                  <li>✓ Full-Service Bistro</li>
                  <li>✓ Full Bar, Keno, and Pokies</li>
                  <li>✓ Function Room</li>
                  <li>✓ Parking</li>
                </ul>
              </div>
              <div className='space-y-4'>
                <h3 className='text-2xl font-semibold'>Contact & Location</h3>
                <div className='space-y-2'>
                  <div className='flex items-center'>
                    <MapPin className='h-5 w-5 mr-2 text-gray-600' />
                    <span>70/28 Hooley Street, Parkes NSW 2870</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[400px] rounded-lg overflow-hidden'>
              <iframe
                src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=16&ie=UTF8&iwloc=&output=embed'
                width='100%'
                height='100%'
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Club Location'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

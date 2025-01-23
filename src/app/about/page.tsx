import { Clock, Coffee, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import bgImage from '../../../public/bgImage.jpg';

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
              <h2 className='text-2xl md:text-3xl font-bold mb-6'>
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
                src=''
                alt='Historical club photo'
                className='absolute inset-0 w-full h-full object-cover'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <div className='flex items-center justify-center mb-8'>
              <Clock className='w-8 h-8 mr-3 text-gray-600' />
              <h2 className='text-3xl font-bold'>Operating Hours</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='p-6'>
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
                className='p-6 w-8/12 place-self-center'
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
                <Button className='w-3/12 mt-6'>Join Now</Button>
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
                    <p className='text-gray-600'>Wed-Sun: 12:00 PM - 2:30 PM</p>
                  </div>
                  <div>
                    <p className='font-medium'>Dinner</p>
                    <p className='text-gray-600'>Wed-Sat: 6:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <Button>View Menu</Button>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <img
                src='https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop'
                alt='Restaurant interior'
                className='rounded-lg'
              />
              <img
                src='https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop'
                alt='Sample dish'
                className='rounded-lg'
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
    // <div className='col-span-full'>
    //   <Image
    //     src={logo}
    //     height={100}
    //     width={100}
    //     className='absolute top-5 left-5 size-14 z-10 md:hidden'
    //     alt='PRBC logo'
    //   />
    //   <div className='space-y-5'>
    //     <h1 className='text-3xl md:text-4xl text-destructive text-center uppercase pt-[4.25rem] font-bold'>
    //       About Us
    //     </h1>
    //     <div className='text-2xl md:text-3xl text-center text-gray-700 px-4 py-6 md:py-10 md:w-10/12 mx-auto space-y-5'>
    //       <iframe
    //         width='70%'
    //         height='80%'
    //         src='https://www.youtube.com/embed/UbbFh6__AB4?si=yKivsb9G0c4f3Zzk'
    //         title='YouTube video player'
    //         frameBorder='0'
    //         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    //         referrerPolicy='strict-origin-when-cross-origin'
    //         allowFullScreen
    //         className='rounded-xl shadow-lg shadow-primary'
    //       />
    //       <p className=''>
    //         The Parkes Railway Bowling Club is a vibrant hub of activity,
    //         offering an array of entertainment and social opportunities for the
    //         local community. Our doors are open from Wednesday through Sunday,
    //         inviting you to enjoy a range of engaging experiences.
    //       </p>
    //       <p className=''>
    //         Whether you&apos;re in the mood for a friendly game of barefoot
    //         bowls or an evening filled with social events and functions, the
    //         Parkes Railway Bowling Club has something to delight everyone. Our
    //         Friday night raffle is a particular highlight, where you can have a
    //         rollicking good time while vying for some truly fantastic prizes.
    //         The action kicks off at 7 pm, so be sure to arrive early and secure
    //         your spot.
    //       </p>
    //       <p className=''>
    //         After an evening of fun and excitement, you can cap off your visit
    //         by indulging in a delightful meal at our on-site restaurant. With
    //         our happy hour starting at 5:00 pm, it&apos;s the perfect choice for
    //         an enjoyable dinner out.
    //       </p>
    //       <p className=''>
    //         The Parkes Railway Bowling Club is always buzzing with activity, so
    //         be sure to check back regularly for the latest news, bowls draw
    //         updates, and information on upcoming events. We&apos;re dedicated to
    //         keeping the community engaged and entertained, so come join us and
    //         be a part of the excitement!
    //       </p>
    //     </div>
    //   </div>

    //   <hr />

    //   <div
    //     className='md:flex md:flex-row md:items-center md:justify-evenly'
    //     id='membership'
    //   >
    //     <p className='text-3xl md:text-4xl text-destructive pl-4 text-center font-bold'>
    //       Opening Hours:
    //     </p>
    //     <ul className='text-2xl md:text-3xl text-secondary pl-4 space-y-2 block'>
    //       <li>
    //         <p>Monday:</p>
    //         <p className='pl-4'>Closed</p>
    //       </li>
    //       <li>
    //         <p>Tuesday:</p>
    //         <p className='pl-4'>Closed</p>
    //       </li>
    //       <li>
    //         <p>Wednesday:</p>
    //         <p className='pl-4'>3:00pm - 7:00pm</p>
    //       </li>
    //       <li>
    //         <p>Thursday:</p>
    //         <p className='pl-4'>3:00pm - 7:00pm</p>
    //       </li>
    //     </ul>
    //     <ul className='text-2xl md:text-3xl text-secondary pl-4 space-y-2 block'>
    //       <li>
    //         <p>Friday:</p>
    //         <p className='pl-4'>11:30am - 12:00am</p>
    //       </li>

    //       <li>
    //         <p>Saturday:</p>
    //         <p className='pl-4'>10:00am - 12:00pm</p>
    //       </li>
    //       <li>
    //         <p>Sunday:</p>
    //         <p className='pl-4'>10:00am - 12:00pm</p>
    //       </li>
    //     </ul>
    //   </div>

    //   <div
    //     className='w-11/12 md:w-9/12 mx-auto pb-5'
    //     id='dining'
    //   >
    //     <div className=''>
    //       <iframe
    //         width='100%'
    //         id='gmap_canvas'
    //         src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=16&ie=UTF8&iwloc=&output=embed'
    //         className='p-2 h-[500px] md:h-[600px] rounded-[2rem]'
    //       ></iframe>
    //     </div>
    //   </div>
    // </div>
  );
}

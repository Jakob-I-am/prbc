import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png';
import { Facebook, Inbox, MapPinned, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly my-5 space-y-5'>
        <div>
          <Image
            className='h-60 w-60 md:h-96 md:w-96'
            src={logo}
            alt='Company Logo'
            width={70}
            height={70}
            priority
          />
        </div>

        <div className='w-full md:w-1/3'>
          <p className='text-2xl md:text-4xl text-center underline'>SITEMAP</p>
          <ul className='pl-6 flex flex-col justify-center items-start mt-5'>
            <li>
              <Link href='Home'>- Home</Link>
            </li>
            <li>
              <Link href='About'>- About</Link>
            </li>
            <li>
              <Link href='News'>- News</Link>
            </li>
            <li>
              <Link href='Bowls'>- Bowls</Link>
            </li>
            <li>
              <Link href='Events'>- Events</Link>
            </li>
            <li>
              <Link href='Events'>- Contact Form</Link>
            </li>
            <li>
              <Link href='Events'>- Bowls Nominations Form</Link>
            </li>
          </ul>
        </div>

        <div className='w-full md:w-1/3'>
          <p className='text-2xl md:text-4xl text-center underline'>
            CONTACT INFO
          </p>
          <ul className='pl-6 md:pl-0 flex flex-col justify-start space-y-3 mt-5'>
            <li className='flex space-x-5'>
              <Phone color='#ef4444' />
              <Link
                href='tel:(02)68622772'
                className='text-destructive'
              >
                (02) 6862 2772
              </Link>
            </li>
            <li className='flex space-x-5'>
              <Inbox color='#ef4444' />
              <Link
                href='mailto:parkesrailway@google.com'
                className='text-destructive'
              >
                parkesrailway@google.com
              </Link>
            </li>
            <li className='flex space-x-5'>
              <MapPinned color='#ef4444' />
              <p>70/78 Hooley Street Parkes NSW 2870</p>
            </li>
            <li className='mt-2 self-center'>
              <div className='bg-destructive rounded-full h-10 w-10 flex items-center justify-center'>
                <Link href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F642402229175922%2F'>
                  <Facebook color='#fff' />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full h-12 bg-primary rounded-full mb-5 flex flex-col items-center justify-center'>
        <p className='text-lg md:text-xl text-secondary text-center uppercase'>
          &copy; parkes railway bowling club
        </p>
        <p className='text-xs text-secondary text-center'>
          Built by Jakob Johnson
        </p>
      </div>
    </>
  );
}

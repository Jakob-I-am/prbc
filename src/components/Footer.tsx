import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.png';
import { Facebook, Inbox, MapPinned, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <div className='col-span-full'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly my-5 space-y-5'>
        <div>
          <Image
            className='h-[150px] w-[150px] md:h-[250px] md:w-[250px]'
            src={logo}
            alt='Company Logo'
            priority
          />
        </div>

        <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>
          <p className='text-3xl font-bold mb-6 text-center'>Contact Info</p>
          <ul className='flex flex-col justify-start space-y-3'>
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
                href='mailto:railwaydiggersbc@bigpond.com'
                className='text-destructive'
              >
                railwaydiggersbc@bigpond.com
              </Link>
            </li>
            <li className='flex space-x-5'>
              <MapPinned color='#ef4444' />
              <p>70/28 Hooley Street, Parkes, NSW, 2870</p>
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
      <div className='w-full h-12 bg-primary flex flex-col items-center justify-center'>
        <h6 className='text-lg md:text-xl text-secondary text-center uppercase'>
          &copy; parkes railway bowling club
        </h6>
        <p className='text-xs text-secondary text-center'>
          Built by Jakob Johnson
        </p>
      </div>
    </div>
  );
}

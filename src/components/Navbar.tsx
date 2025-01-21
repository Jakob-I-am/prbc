'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import logo from '../../public/logo.png';
import { Button } from '@/components/ui/button';

interface Option {
  name: string;
  slug: string;
}

const links: Option[] = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'About',
    slug: '/about',
  },
  {
    name: 'News',
    slug: '/news',
  },
  {
    name: 'Bowls',
    slug: '/bowls',
  },
  {
    name: 'Events',
    slug: '/events',
  },
  {
    name: 'Membership',
    slug: '/about#membership',
  },
  {
    name: 'Dining',
    slug: '/about#dining',
  },
];

const buttons: Option[] = [
  {
    name: 'Contact Us',
    slug: '/contact-form',
  },
  {
    name: 'Bowls Nominations',
    slug: '/noms',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        'w-full bg-transparent relative md:py-1 md:bg-secondary md:sticky md:top-0 md:z-50'
      }
    >
      <div className='px-8 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <Image
                className='hidden md:block'
                src={logo}
                alt='Company Logo'
                width={70}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link) => (
              <Link
                key={link.name}
                className='text-gray-800 hover:text-destructive px-3 py-2 rounded-md text-lg font-medium uppercase'
                href={link.slug}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {buttons.map((button) => (
              <Link
                key={button.name}
                href={button.slug}
              >
                <Button
                  variant='destructive'
                  className='text-lg font-medium uppercase border hover:scale-[1.02] hover:bg-secondary hover:text-destructive hover:border-destructive rounded'
                >
                  {button.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center absolute top-5 right-5 md:hidden z-30'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none'
              aria-expanded='false'
              aria-label='Toggle navigation menu'
            >
              <div className='bg-secondary h-9 w-9 flex items-center justify-center rounded'>
                {isOpen ? (
                  <X
                    size={30}
                    stroke='#3b82f6'
                  />
                ) : (
                  <Menu
                    size={30}
                    stroke='#3b82f6'
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex bg-secondary md:hidden absolute top-0 w-full z-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className='pt-14 pb-3'>
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              key={link.name}
              className='block bg-secondary px-3 py-2 rounded-md text-md font-medium text-gray-800 hover:text-destructive hover:bg-gray-50 uppercase'
              href={link.slug}
            >
              {link.name}
            </Link>
          ))}
          <div className='flex flex-col w-[100vw] space-y-2 px-2 pt-4'>
            {buttons.map((button) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={button.name}
                href={button.slug}
              >
                <Button
                  variant='destructive'
                  className='text-md w-full font-medium uppercase border hover:scale-[1.02] hover:bg-secondary hover:text-destructive hover:border-destructive rounded'
                >
                  {button.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

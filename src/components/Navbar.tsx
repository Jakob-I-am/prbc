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
];

const buttons: Option[] = [
  {
    name: 'Contact Us',
    slug: '#contact-form',
  },
  {
    name: 'Bowls Nominations',
    slug: '#bowlsnoms-form',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={'w-full h-20 py-1 bg-secondary sticky top-0 z-50 mb-2'}>
      <div className='px-8 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <Image
                className=''
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
                  className='text-lg font-medium uppercase'
                >
                  {button.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none'
              aria-expanded='false'
              aria-label='Toggle navigation menu'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex justify-center bg-secondary md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              key={link.name}
              className='block bg-secondary px-3 py-2 rounded-md text-lg font-medium text-gray-800 hover:text-destructive hover:bg-gray-50 text-center uppercase'
              href={link.slug}
            >
              {link.name}
            </Link>
          ))}
          <div className='w-full flex flex-col space-y-1'>
            {buttons.map((button) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={button.name}
                href={button.slug}
              >
                <Button
                  variant='destructive'
                  className='text-lg font-medium w-full uppercase'
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

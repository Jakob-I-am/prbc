'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import logo from '../../public/logo.png';

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
    slug: '',
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
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <Image
                className='hidden md:block'
                src={logo}
                alt='Company Logo'
                width={80}
                height={80}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link) => {
              return link.name == 'About' ? (
                <DropdownMenu key='1'>
                  <DropdownMenuTrigger className='text-gray-800 hover:text-destructive px-3 py-2 rounded-md text-lg font-medium uppercase flex items-center'>
                    About{' '}
                    <ChevronDown
                      className='pl-2'
                      size={35}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='-mt-3'>
                    <DropdownMenuItem className='text-base'>
                      <Link href='/about'>About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      <Link href='/about#membership'>Membership</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      <Link href='/about#dining'>Bistro</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      <Link href='/about#venue'>Venue</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  className='text-gray-800 hover:text-destructive px-3 py-2 rounded-md text-lg font-medium uppercase'
                  href={link.slug}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {buttons.map((button) => (
              <Link
                key={button.name}
                href={button.slug}
              >
                <Button
                  variant='destructive'
                  size='lg'
                  className='hover:text-destructive text-secondary hover:bg-secondary hover:border hover:border-destructive hover:scale-[1.0125]'
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
              <div className='h-9 w-9 flex items-center justify-center rounded'>
                {isOpen ? (
                  <X
                    size={30}
                    stroke='#171717'
                  />
                ) : (
                  <Menu
                    size={30}
                    stroke='#f5f5f5'
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
        <div className='pt-14 pb-3 flex flex-col items-start'>
          {links.map((link) => {
            return link.name == 'About' ? (
              <DropdownMenu key='1'>
                <DropdownMenuTrigger className='text-gray-800 hover:text-destructive px-3 py-2 rounded-md text-lg font-medium uppercase flex items-center'>
                  About{' '}
                  <ChevronDown
                    className='pl-2'
                    size={35}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='-mt-3'>
                  <DropdownMenuItem className='text-base'>
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href='/about'
                    >
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base'>
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href='/about#membership'
                    >
                      Membership
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base'>
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href='/about#dining'
                    >
                      Bistro
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base'>
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href='/about#venue'
                    >
                      Venue
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                className='text-gray-800 hover:text-destructive px-3 py-2 rounded-md text-lg font-medium uppercase'
                href={link.slug}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className='flex flex-col w-[100vw] space-y-2 px-2 pt-4'>
            {buttons.map((button) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={button.name}
                href={button.slug}
              >
                <Button
                  variant='destructive'
                  className='hover:text-destructive text-secondary hover:bg-secondary hover:border hover:border-destructive hover:scale-[1.0125]'
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

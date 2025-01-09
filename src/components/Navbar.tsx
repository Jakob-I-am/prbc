'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import logo from '../../public/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full bg-neutral-100 shadow-sm mb-2'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20 items-center'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Image
              className=''
              src={logo}
              alt='Company Logo'
              width={70}
              height={70}
              priority
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              href='/'
            >
              Home
            </Link>
            <Link
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              href='/about'
            >
              About
            </Link>
            <Link
              className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              href='contact'
            >
              Contact
            </Link>
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            href='/'
          >
            Home
          </Link>
          <Link
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            href='/about'
          >
            About
          </Link>
          <Link
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            href='/contact'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

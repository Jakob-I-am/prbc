import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {} from '@graphcms/rich-text-types';

import Link from 'next/link';
import Image from 'next/image';
interface RichTextRendererProps {
  content: any; // Replace with proper Hygraph rich text type
}
export function RichTextRenderer({ content }: RichTextRendererProps) {
  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1 className='text-4xl font-bold mb-6 mt-8'>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className='text-3xl font-bold mb-4 mt-6'>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-2xl font-bold mb-4 mt-6'>{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className='text-xl font-bold mb-3 mt-5'>{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className='text-lg font-bold mb-2 mt-4'>{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className='text-lg font-bold mb-1 mt-3'>{children}</h6>
        ),
        p: ({ children }) => (
          <p className='text-lg text-gray-700 mb-2 leading-relaxed'>
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className='list-disc list-inside mb-4 space-y-2'>{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className='list-decimal list-inside mb-4 space-y-2'>
            {children}
          </ol>
        ),
        li: ({ children }) => <li className='text-gray-700'>{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className='border-l-4 border-gray-200 pl-4 italic my-4'>
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <Link
            href={href!}
            className='text-blue-600 hover:underline'
          >
            {children}
          </Link>
        ),
        img: ({ src, width, height }) => (
          <Image
            src={src!}
            width={width}
            height={height}
            alt='post image'
            className='my-5 object-cover aspect-auto rounded-lg'
          />
        ),
      }}
    />
  );
}

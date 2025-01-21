'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPosts } from '@/actions/blogPostActions';

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  featuredImg: {
    url: string;
  };
}

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchSlides = async () => {
    const data = await getPosts();
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchSlides().then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className='py-10'>
        <h2 className='text-3xl md:text-4xl text-destructive font-bold text-center'>
          News Posts
        </h2>
        <p className='text-secondary text-2xl text-center'>
          News from around the club
        </p>
      </div>

      <div className='w-11/12 md:w-full mx-auto md:mx-5 flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0 pb-5'>
        {posts.map((post: Post) => (
          <Card
            className='md:w-3/12 md:gap-2'
            key={post.slug}
          >
            <CardHeader className='h-1/4'>
              <CardTitle className='text-2xl'>{post.title}</CardTitle>
              <CardDescription>{post.excerpt.slice(0, 100)}...</CardDescription>
            </CardHeader>
            <CardContent className='h-2/4'>
              <Image
                src={post.featuredImg.url}
                width={300}
                height={300}
                className='h-[10rem] md:h-[15rem] w-full object-cover rounded-lg'
                alt={post.title}
              />
            </CardContent>
            <CardFooter className='w-full h-1/4 flex justify-center'>
              <Link
                href={`/news/${post.slug}`}
                className='w-10/12'
              >
                <Button
                  variant='destructive'
                  className='w-full h-12 hover:scale-[1.02] self-center'
                >
                  Read
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

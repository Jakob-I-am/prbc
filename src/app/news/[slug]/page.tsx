import { CalendarDays, MessageSquare } from 'lucide-react';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RichTextRenderer } from '@/components/RichTextRenderer';

import { getPostDetails } from '@/actions/blogPostActions';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await getPostDetails(slug);

  console.log(post);

  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[50vh] w-full overflow-hidden'>
        <Image
          src={post.featuredImg.url}
          alt={post.title}
          width={500}
          height={500}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
            {post.title}
          </h1>
          <div className='flex items-center gap-4 text-gray-200'>
            <div className='flex items-center'>
              <CalendarDays className='h-5 w-5 mr-2' />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <span>•</span>
            <span>By {post.id}</span>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <article className='prose prose-lg max-w-none'>
              <RichTextRenderer content={post.content} />
            </article>
          </div>
        </div>
      </section>

      {post.comments.length && (
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto'>
              <div className='flex items-center gap-3 mb-8'>
                <MessageSquare className='h-6 w-6 text-gray-600' />
                <h2 className='text-2xl font-bold'>
                  Comments ({post.comments.length})
                </h2>
              </div>

              <div className='space-y-6 mb-12'>
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className='bg-white p-6 rounded-lg shadow-sm'
                  >
                    <div className='flex justify-between items-start mb-4'>
                      <h3 className='font-semibold'>{comment.name}</h3>
                      <span className='text-sm text-gray-500'>
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className='text-gray-700'>{comment.comment}</p>
                  </div>
                ))}
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-semibold mb-6'>Leave a Comment</h3>
                <form className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input placeholder='Name' />
                    <Input
                      type='email'
                      placeholder='Email'
                    />
                  </div>
                  <Textarea
                    placeholder='Your comment'
                    className='min-h-[150px]'
                  />
                  <Button className='w-full md:w-auto'>Post Comment</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

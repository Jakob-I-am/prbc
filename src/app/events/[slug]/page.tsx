import { CalendarDays, MessageSquare } from 'lucide-react';
import Image from 'next/image';

import CommentForm from '@/components/CommentForm';
import { RichTextRenderer } from '@/components/RichTextRenderer';

import { getPostDetails } from '@/actions/blogPostActions';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { post, comments } = await getPostDetails(slug);

  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[30vh] w-full overflow-hidden'>
        <Image
          src={post.featuredImg.url}
          alt={post.title}
          width={500}
          height={500}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
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
            <span>By {post.createdBy.name}</span>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <section className='py-16 bg-white col-span-2'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto'>
              <article className='prose prose-lg max-w-none'>
                <RichTextRenderer content={post.content.json} />
              </article>
            </div>
          </div>
        </section>

        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-xl mx-auto'>
              <div className='flex items-center gap-3 mb-8'>
                <MessageSquare className='h-6 w-6 text-gray-600' />
                <h2 className='text-2xl font-bold'>
                  Comments ({comments.length})
                </h2>
              </div>

              <div className='space-y-6 mb-12'>
                {comments.map((comment) => (
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

              <div className='bg-white rounded-lg shadow-sm'>
                <h3 className='text-xl font-semibold mb-6'>Leave a Comment</h3>
                <CommentForm slug={post.slug} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

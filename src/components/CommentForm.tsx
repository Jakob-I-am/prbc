'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import FormCardWrapper from '@/components/FormCardWrapper';

import { useToast } from '@/hooks/use-toast';

import { commentFormSchema } from '@/schemas';

import { postComment } from '@/actions/postComment';
import { Card, CardContent } from './ui/card';

export default function CommentForm({ slug }: { slug: string }) {
  const [commentName, setCommentName] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: '',
      comment: '',
      slug: slug,
    },
  });

  function onSubmit(values: z.infer<typeof commentFormSchema>) {
    setCommentName(values.name);
    const updatedValues = { body: { ...values } };

    startTransition(async () => {
      const { success } = await postComment({ ...updatedValues });

      if (success) {
        toast({
          title: 'Form Submitted',
          description: `Thank you for commenting ${commentName}.`,
          className: 'h-24 border-2 border-green-400 text-lg',
        });
      } else {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with submitting the form.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <Card className='shadow-md'>
      <CardContent className='mt-5'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Smith'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='comment'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Comment...'
                      className='resize-none h-24'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Post a comment on this post and share your opinion
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isPending}
              type='submit'
              className='w-4/12 hover:bg-secondary hover:text-primary hover:scale-[1.0125] hover:border hover:border-primary'
            >
              {isPending ? 'Posting...' : 'Post Comment'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

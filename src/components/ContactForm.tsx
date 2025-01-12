'use client';

import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { postContact } from '../../services';

const formSchema = z.object({
  message: z.string().min(1, {
    message: 'Message must be at least 1 characters.',
  }),
  name: z.string().min(1, {
    message: 'Please enter your full name',
  }),
  phone: z
    .string()
    .min(8, { message: 'Please enter a valid phone number' })
    .max(10, { message: 'Please enter a valid phone number' }),
});

export default function ContactForm() {
  const [contactName, setContactName] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
      name: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedValues = { body: { ...values } };
    setContactName(updatedValues.body.name);

    startTransition(async () => {
      const { success } = await postContact({ ...updatedValues });

      if (success) {
        toast({
          title: 'Form Submitted',
          description: `Thank you for contacting us ${contactName}.`,
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
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
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder='04 *** ***'
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
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Can we host an event at the bowling club?'
                  className='resize-none h-24'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Send us a message and we will get back to you as soon as
                possible
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full flex flex-col'>
          <Button
            disabled={isPending}
            type='submit'
            className='w-6/12 hover:scale-[1.02] self-center'
          >
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  );
}

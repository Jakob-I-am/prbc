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

import { postContactSchema } from '@/schemas';

import { postContact } from '@/actions/postContact';

export default function ContactForm() {
  const [contactName, setContactName] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof postContactSchema>>({
    resolver: zodResolver(postContactSchema),
    defaultValues: {
      message: '',
      name: '',
      phone: '',
      email: '',
      messageStatus: 'pending',
    },
  });

  function onSubmit(values: z.infer<typeof postContactSchema>) {
    setContactName(values.name);
    const updatedValues = { body: { ...values } };

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
    <FormCardWrapper>
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
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='johnsmith@example.com'
                    type='email'
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
          <Button
            disabled={isPending}
            type='submit'
            className='w-3/12 hover:bg-secondary hover:text-primary hover:scale-[1.0125] hover:border hover:border-primary'
          >
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </FormCardWrapper>
  );
}

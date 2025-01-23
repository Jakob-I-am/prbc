'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState, useTransition } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import FormCardWrapper from '@/components/FormCardWrapper';

import { useToast } from '@/hooks/use-toast';

import { postContactSchema } from '@/schemas';

import { postContact } from '@/actions/postContact';

import { Contact } from '@/lib/ActionsInterfaces';
import { MultiSelect } from './MultiSelect';
import { LoaderPinwheel, MailQuestion, Ticket, Users } from 'lucide-react';

export default function ContactForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof postContactSchema>>({
    resolver: zodResolver(postContactSchema),
    defaultValues: {
      message: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      messageStatus: 'pending',
      enquiry: [],
    },
  });

  useEffect(() => {
    const savedData: Contact = JSON.parse(
      localStorage.getItem('contactFormData')!
    );
    if (savedData) {
      form.setValue('firstName', savedData.firstName);
      form.setValue('lastName', savedData.lastName);
      form.setValue('phone', savedData.phone);
      form.setValue('email', savedData.email);
    }
  }, [form.setValue]);

  const selectOptions = [
    {
      value: 'general',
      label: 'General Enquiry',
      icon: MailQuestion,
    },
    {
      value: 'membership',
      label: 'Membership',
      icon: Users,
    },
    {
      value: 'events and function',
      label: 'Events & Functions',
      icon: Ticket,
    },
    {
      value: 'bowling',
      label: 'Bowling Activities',
      icon: LoaderPinwheel,
    },
  ];

  function onSubmit(values: z.infer<typeof postContactSchema>) {
    startTransition(async () => {
      const { success } = await postContact(values);

      if (rememberMe) {
        localStorage.setItem(
          'contactFormData',
          JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email,
          })
        );
      } else {
        localStorage.removeItem('contactFormData');
      }

      if (success) {
        const savedData: Contact = JSON.parse(
          localStorage.getItem('contactFormData')!
        );

        toast({
          title: 'Form Submitted',
          description: `Thank you for contacting us${
            savedData ? ` ${savedData.firstName} ${savedData.lastName}.` : '.'
          }`,
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
          className='space-y-2'
        >
          <div className='flex space-x-2'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='md:w-6/12'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John'
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
              name='lastName'
              render={({ field }) => (
                <FormItem className='md:w-6/12'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Smith'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
            name='enquiry'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enquiry Type</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={selectOptions}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    placeholder='Select a Enquiry Type'
                    variant='inverted'
                    animation={2}
                    maxCount={3}
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

          <div className='flex items-center space-x-2'>
            <Checkbox
              id='rememberMe'
              checked={rememberMe}
              onCheckedChange={() => setRememberMe(!rememberMe)}
            />
            <Label htmlFor='rememberMe'>Remember Me</Label>
          </div>

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

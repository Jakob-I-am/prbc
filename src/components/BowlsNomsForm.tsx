'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { CalendarDaysIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MultiSelect } from '@/components/MultiSelect';
import FormCardWrapper from '@/components/FormCardWrapper';

import { useToast } from '@/hooks/use-toast';

import postNominee from '@/actions/postNominee';

import { BowlNominationSchema } from '@/schemas';

export default function BowlsNomsForm() {
  const [nomineeName, setNomineeName] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof BowlNominationSchema>>({
    resolver: zodResolver(BowlNominationSchema),
    defaultValues: {
      name: '',
      phone: '',
      option: [],
    },
  });

  const selectOptions = [
    {
      value: 'Wednesday Social Bowls: 1pm',
      label: 'Wednesday Social Bowls: 1pm',
      icon: CalendarDaysIcon,
    },
    {
      value: 'Services Club Power Play Pairs: Thursday 6pm',
      label: 'Services Club Power Play Pairs: Thursday 6pm',
      icon: CalendarDaysIcon,
    },
    {
      value: 'Saturday Social Bowls: 1pm',
      label: 'Saturday Social Bowls: 1pm',
      icon: CalendarDaysIcon,
    },
  ];

  function onSubmit(values: z.infer<typeof BowlNominationSchema>) {
    setNomineeName(values.name);
    const updatedValues = { body: { ...values } };

    startTransition(async () => {
      const { success } = await postNominee({ ...updatedValues });

      if (success) {
        toast({
          title: `Thank you for nominating ${nomineeName}.`,
          description: 'Be there 15 minutes early, cant wait to see you there!',
          className: 'h-24 border-2 border-green-400 text-xl',
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
          className='space-y-8'
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
            name='option'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Day and Time</FormLabel>
                <MultiSelect
                  options={selectOptions}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder='Select a session'
                  variant='inverted'
                  animation={2}
                  maxCount={3}
                />
              </FormItem>
            )}
          />
          <FormDescription>Select one or more options</FormDescription>

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

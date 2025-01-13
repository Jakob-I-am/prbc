'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import postNominee from '../../services/graphql/postNominee';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Please enter your full name',
  }),
  phone: z
    .string()
    .min(8, { message: 'Please enter a valid phone number' })
    .max(10, { message: 'Please enter a valid phone number' }),
  option: z.string({ message: 'Please select an time and day' }),
});

export default function BowlsNomsForm() {
  const [nomineeName, setNomineeName] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      option: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedValues = { body: { ...values } };
    setNomineeName(updatedValues.body.name);

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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-10 flex flex-col'
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Choose a day and time' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='wednesday: 1pm'>Wednesday: 1pm</SelectItem>
                  <SelectItem value='Saturday: 1pm'>Saturday: 1pm</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          type='submit'
          className='w-6/12 border hover:scale-[1.02] hover:bg-secondary hover:text-primary hover:border-primary self-center'
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}

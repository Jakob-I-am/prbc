'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      option: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success('Form submitted');
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
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
              <Select {...field}>
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

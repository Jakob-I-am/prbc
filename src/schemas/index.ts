import * as z from 'zod';

export const postContactSchema = z.object({
  message: z.string().min(1, {
    message: 'Message must be at least 1 characters.',
  }),
  firstName: z.string().min(1, {
    message: 'Please enter your first name',
  }),
  lastName: z.string().min(1, {
    message: 'Please enter your first name',
  }),
  phone: z.string().regex(/^[0-9]{8,10}$/, {
    message: 'Please enter a valid phone number',
  }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  messageStatus: z.string(),
  enquiry: z.array(z.string(), { message: 'Please select an option' }),
});

export const BowlNominationSchema = z.object({
  name: z.string().min(1, {
    message: 'Please enter your full name',
  }),
  phone: z.string().regex(/^[0-9]{8,10}$/, {
    message: 'Please enter a valid phone number',
  }),
  option: z.array(z.string(), { message: 'Please select an option' }),
});

export const commentFormSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }),
  comment: z.string().min(1, { message: 'Please leave a comment' }),
  slug: z.string(),
});

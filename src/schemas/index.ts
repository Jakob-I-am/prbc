import * as z from 'zod';

export const postContactSchema = z.object({
  message: z.string().min(1, {
    message: 'Message must be at least 1 characters.',
  }),
  name: z.string().min(1, {
    message: 'Please enter your full name',
  }),
  phone: z.string().regex(/^[0-9]{8,10}$/, {
    message: 'Please enter a valid phone number',
  }),
  messageStatus: z.string(),
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

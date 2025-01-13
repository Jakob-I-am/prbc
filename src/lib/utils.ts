import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import event from '/public/event.jpg';
import membership from '/public/membership.jpeg';
import bowls from '/public/bowls.jpeg';
import dining from '/public/dining.jpg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const featureCardDetails = [
  {
    buttonText: 'Events',
    image: event.src,
    slug: '/events',
  },
  {
    buttonText: 'Bowls',
    image: bowls.src,
    slug: '/bowls',
  },
  {
    buttonText: 'Membership',
    image: membership.src,
    slug: '/about#membership',
  },
  {
    buttonText: 'Dining',
    image: dining.src,
    slug: '/about#dining',
  },
];

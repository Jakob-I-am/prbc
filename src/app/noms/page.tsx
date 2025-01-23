import Image from 'next/image';

import BowlsNomsForm from '@/components/BowlsNomsForm';

import bgImage from '../../../public/bgImage.jpg';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Clock, CalendarDays, Info, ClipboardList } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function BowlsNomsPage() {
  return (
    <div className='w-full overflow-x-hidden'>
      <section className='relative h-[40vh] w-full overflow-hidden'>
        <Image
          src={bgImage}
          alt='Bowling club interior'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
            Bowls Nominations
          </h1>
          <p className='text-xl md:text-2xl text-center'>
            Join us for a friendly game of bowls
          </p>
        </div>
      </section>

      <div className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-12'>
          <div className='space-y-8 md:w-8/12 md:place-self-center'>
            <BowlsNomsForm />

            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <Clock className='mr-2 h-5 w-5' />
                Session Information
              </h3>
              <div className='space-y-4'>
                <p className='text-gray-600'>Each session includes:</p>
                <ul className='space-y-2 text-gray-600'>
                  <li>• 15 minutes pre-game briefing</li>
                  <li>• 2 hours of social bowling</li>
                  <li>• Basic instruction for beginners</li>
                  <li>• Post-game refreshments available at the club</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className='space-y-8'>
            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <ClipboardList className='mr-2 h-5 w-5' />
                What to Bring
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Flat-soled shoes or bare feet (required)</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Comfortable, loose-fitting clothing</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Hat and sunscreen</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Water bottle</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-green-500 mr-2'>✓</span>
                  <span>Your own bowls (if you have them)</span>
                </li>
              </ul>
            </Card>

            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4 flex items-center'>
                <Info className='mr-2 h-5 w-5' />
                Important Information
              </h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold mb-2'>Arrival Time</h4>
                  <p className='text-gray-600'>
                    Please arrive 15 minutes before your session for
                    registration and equipment setup.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Equipment Rental</h4>
                  <p className='text-gray-600'>
                    Bowls are available for hire at $5 per session. Please
                    indicate during registration if you need to hire equipment.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Dress Code</h4>
                  <p className='text-gray-600'>
                    Neat casual dress is required. Flat-soled shoes or bare feet
                    are mandatory on the green.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Coaching</h4>
                  <p className='text-gray-600'>
                    Basic instruction is provided for beginners at the start of
                    each session.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Weather Policy</h4>
                  <p className='text-gray-600'>
                    Sessions may be cancelled due to adverse weather conditions.
                    You will be notified by SMS/email.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

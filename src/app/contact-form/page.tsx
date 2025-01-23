import Image from 'next/image';

import ContactForm from '@/components/ContactForm';

import bgImage from '../../../public/bgImage.jpg';
import { Card } from '../../components/ui/card';
import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
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
            Contact us
          </h1>
          <p className='text-xl md:text-2xl md:w-6/12'>
            Please use this form to ask any question you may have, and we will
            contact you with an answer as soon as possible on the phone number
            provided, Thank you.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Phone className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Phone</h2>
              <p className='text-gray-600 mb-4'>Available 7 days a week</p>
              <Link
                href='tel:(02)68622772'
                className='font-medium'
              >
                (02) 6862 2772
              </Link>
            </Card>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Mail className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Email</h2>
              <p className='text-gray-600 mb-4'>
                We'll respond within 24 hours
              </p>
              <Link
                href='mailto:railwaydiggersbc@bigpond.com'
                className='font-medium'
              >
                railwaydiggersbc@bigpond.com
              </Link>
            </Card>
            <Card className='p-6 flex flex-col items-center text-center'>
              <Clock className='h-10 w-10 text-gray-600 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>Opening Hours</h2>
              <p className='text-gray-600 mb-2'>Wed-Thu: 10:00 AM - 10:00 PM</p>
              <p className='text-gray-600'>Fri-Sat: 10:00 AM - 12:00 AM</p>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <div className='flex items-center justify-center mb-8'>
              <MessageSquare className='w-8 h-8 mr-3 text-gray-600' />
              <h2 className='text-3xl font-bold'>Send us a Message</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='flex items-center justify-center mb-4'>
                <MapPin className='w-8 h-8 mr-3 text-gray-600' />
                <h2 className='text-3xl font-bold'>Find Us</h2>
              </div>
              <p className='text-gray-600'>
                Located in the heart of Parkes, we're easily accessible with
                ample parking
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>Address</h3>
                  <p className='text-gray-600'>70/28 Hooley Street,</p>
                  <p className='text-gray-600'>Parkes NSW 2870</p>
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>Getting Here</h3>
                  <ul className='space-y-2 text-gray-600'>
                    <li>• 5 minutes from Parkes Town Centre</li>
                    <li>• Free parking available on-site</li>
                    <li>• Accessible entrance and facilities</li>
                    <li>• Bus stop within walking distance</li>
                  </ul>
                </div>
              </div>
              <div className='h-[400px] rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.589067337067!2d148.17570661524786!3d-33.13774998086893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b11e45b57e71943%3A0x8f2403a4fb3574a0!2sHooley%20St%2C%20Parkes%20NSW%202870!5e0!3m2!1sen!2sau!4v1645123456789!5m2!1sen!2sau'
                  width='100%'
                  height='100%'
                  style={{
                    border: 0,
                  }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Club Location'
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

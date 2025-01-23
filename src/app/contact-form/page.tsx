import Image from 'next/image';

import ContactForm from '@/components/ContactForm';

import bgImage from '../../../public/bgImage.jpg';

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

      <section className='container mx-auto py-16 px-4'>
        <div className='grid md:place-content-center'>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

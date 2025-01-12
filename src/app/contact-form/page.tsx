import ContactForm from '@/components/ContactForm';

export default function BowlsNomsPage() {
  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl md:text-5xl text-destructive text-center pt-10 font-bold'>
        Contact us
      </h2>
      <p className='md:w-6/12 px-4 text-secondary text-2xl md:text-4xl text-center self-center mt-5'>
        Please use this form to ask any question you may have, and we will
        contact you with an answer as soon as possible on the phone number
        provided, Thank you.
      </p>

      <div className='w-11/12 mx-auto md:w-4/12 h-[29rem] md:h-[29rem] bg-secondary p-4 rounded-xl mt-16'>
        <ContactForm />
      </div>
    </div>
  );
}

import BowlsNomsForm from '@/components/BowlsNomsForm';

export default function BowlsNomsPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='w-11/12 mx-auto md:w-3/12 h-[29rem] md:h-[27rem] bg-secondary p-4 rounded-xl md:-mt-20'>
        <p className='text-destructive text-center text-2xl'>
          Bowls Nominations
        </p>
        <BowlsNomsForm />
      </div>
    </div>
  );
}

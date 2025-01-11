export default function AboutPage() {
  return (
    <div className='space-y-10'>
      <div className='space-y-5'>
        <h1 className='text-3xl md:text-4xl text-destructive text-center uppercase pt-5 font-bold'>
          About Us
        </h1>
        <div className='text-2xl md:text-3xl text-center text-secondary px-4 py-6 md:py-10 md:w-10/12 mx-auto space-y-5'>
          <p className=''>
            The Parkes Railway Bowling Club is a vibrant hub of activity,
            offering an array of entertainment and social opportunities for the
            local community. Our doors are open from Wednesday through Sunday,
            inviting you to enjoy a range of engaging experiences.
          </p>
          <p className=''>
            Whether you&apos;re in the mood for a friendly game of barefoot
            bowls or an evening filled with social events and functions, the
            Parkes Railway Bowling Club has something to delight everyone. Our
            Friday night raffle is a particular highlight, where you can have a
            rollicking good time while vying for some truly fantastic prizes.
            The action kicks off at 7 pm, so be sure to arrive early and secure
            your spot.
          </p>
          <p className=''>
            After an evening of fun and excitement, you can cap off your visit
            by indulging in a delightful meal at our on-site restaurant. With
            our happy hour starting at 5:00 pm, it&apos;s the perfect choice for
            an enjoyable dinner out.
          </p>
          <p className=''>
            The Parkes Railway Bowling Club is always buzzing with activity, so
            be sure to check back regularly for the latest news, bowls draw
            updates, and information on upcoming events. We&apos;re dedicated to
            keeping the community engaged and entertained, so come join us and
            be a part of the excitement!
          </p>
        </div>
      </div>

      <hr />

      <div className='md:flex md:flex-row md:items-center md:justify-evenly'>
        <p className='text-3xl md:text-4xl text-destructive pl-4 text-center font-bold'>
          Opening Hours:
        </p>
        <ul className='text-2xl md:text-3xl text-secondary pl-4 space-y-2 block'>
          <li>
            <p>Monday:</p>
            <p className='pl-4'>Closed</p>
          </li>
          <li>
            <p>Tuesday:</p>
            <p className='pl-4'>Closed</p>
          </li>
          <li>
            <p>Wednesday:</p>
            <p className='pl-4'>3:00pm - 7:00pm</p>
          </li>
          <li>
            <p>Thursday:</p>
            <p className='pl-4'>3:00pm - 7:00pm</p>
          </li>
        </ul>
        <ul className='text-2xl md:text-3xl text-secondary pl-4 space-y-2 block'>
          <li>
            <p>Friday:</p>
            <p className='pl-4'>11:30am - 12:00am</p>
          </li>

          <li>
            <p>Saturday:</p>
            <p className='pl-4'>10:00am - 12:00pm</p>
          </li>
          <li>
            <p>Sunday:</p>
            <p className='pl-4'>10:00am - 12:00pm</p>
          </li>
        </ul>
      </div>

      <div className='w-11/12 md:w-9/12 mx-auto pb-5'>
        <div className=''>
          <iframe
            width='100%'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=16&ie=UTF8&iwloc=&output=embed'
            className='p-2 h-[500px] md:h-[600px] rounded-[2rem]'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <div className='space-y-5'>
        <div className='text-lg md:text-xl text-center font-rubik p-4 space-y-5'>
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

      <div className=''>
        <p className='font-rubik'>
          The Parkes Railway Bowling Club is located at 70/78 Hooley Street
        </p>
        <div className='md:border-2 md:border-blue-200 md:rounded'>
          <iframe
            width='100%'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=16&ie=UTF8&iwloc=&output=embed'
            className='p-2 h-[500px] md:h-[600px]'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

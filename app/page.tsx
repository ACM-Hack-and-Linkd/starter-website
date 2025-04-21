'use client';
import Link from 'next/link';
import Image from 'next/image'
import SchoolCard from './ui/school-card';
import { interTight, crimsonPro } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow">
        {/* NAVBAR */}
        <div className="flex justify-between flex-row h-20 items-center px-6  md:px-10 mb-2">
          <Link href="/" className="flex flex-row gap-3">
            <Image
              src="/logo.svg"
              width={28}
              height={28}
              alt="logo"
            />
            <h1 className={`${crimsonPro.className} antialiased text-2xl`}>Linkd</h1>
          </Link>
          <Link href="/" className={`${interTight.className} antialiased bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full text-sm font-medium`}>Sign in</Link>
        </div>

        {/* CONTENT */}
        <div className="flex justify-between flex-col  md:flex-row px-6  md:px-10 text-sm/6">
          <div className='w-full  md:w-2/5 flex flex-col gap-6'>
            <div>
              <p className="mb-1 text-black/60">March 10, 2025</p>
              <p className="text-black/60">We are backed by <Link href="https://www.ycombinator.com/" className='underline underline-offset-4' target="_blank">Y Combinator</Link> (X25) and <Link href="https://corylevy.com/" className='underline underline-offset-4' target="_blank">Cory Levy</Link> for our pre-seed.</p>
            </div>
            <div>
              <p className="text-black/60">We're here to find out.</p>
              <p><span className="text-black/60">Our team is</span> building the world's first search algorithm designed around human interactions. Social networks should be centered on our experiences.</p>
              <p>It's called Linkd. </p>
            </div>
            <div>
              <p>&gt; If you're a company interested in people search for social platforms, recruiting, or leads, please directly <Link className='underline underline-offset-4' href='mailto:founders@linkd.inc' target="_blank">contact us.</Link></p>
            </div>
            <div>
              <p className="mb-2">About alumni.</p>
              <p className="text-black/60">We've began experimenting with this new medium by working with one of the most powerful forms of connections: Alumni Networks. Begin by searching for people who've experienced your education.</p>
            </div>
          </div>

          <div className="block  md:hidden border border-black/10 my-12"/>

          <div className='w-full  md:w-2/5 flex flex-col gap-8'>
            <div>
              <p className='mb-2'>Try out our current home for schools:</p>
              <p className="text-black/80">We've began experimenting with this new medium by working with one of the most powerful forms of connections: Alumni Networks. Begin by searching for people who've experienced your education.</p>
            </div>
            <div className='flex flex-row flex-wrap gap-5'>
              <SchoolCard schoolImage="stanford" schoolName="Stanford" url="https://stanford.uselinkd.com/"></SchoolCard>
              <SchoolCard schoolImage="berkeley" schoolName="Berkeley" url="https://berkeley.uselinkd.com/"></SchoolCard>
              <SchoolCard schoolImage="yale" schoolName="Yale" url="https://yale.uselinkd.com/"></SchoolCard>
              <SchoolCard schoolImage="waterloo" schoolName="Waterloo" url="https://waterloo.uselinkd.com/"></SchoolCard>
              <SchoolCard schoolImage="berkeley" schoolName="Want this at your school?" url="/" blurred={true}></SchoolCard>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col relative w-full mt-12  md:mt-[-40px]">
        <div className="block  md:absolute inset-auto  md:inset-0 mb-6  md:mb-0 flex flex-col md:items-center justify-center text-sm/6 px-6 md:px-0">
          <p className={`${interTight.className} antialiased mb-2`}><Link href="https://www.linkedin.com/in/eric-mao/" className="underline underline-offset-4" target="_blank">Eric</Link> & <Link href="https://tomzheng.dev/" className="underline underline-offset-4" target="_blank">Tom</Link></p>
          <p><span className='text-brown/60'>business & general:</span> <Link href="mailto:founders@linkd.inc" className="underline decoration-brown/60 underline-offset-4" target="_blank">founders@linkd.inc</Link></p>
          <p className='text-brown/60'>business & general: <Link href="https://forms.gle/GqVntDRGpTAGo4XN9" className="underline underline-offset-4" target="_blank">intro us here</Link></p>  
        </div>

        <Image
          src="/background.png"
          width={1440}
          height={725}
          alt="background"
          className="w-screen"
        />
      </div>
    </main>
  );
}

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Image
        src="/hero-background.png"
        width={1440}
        height={725}
        alt="background"
        className="absolute bottom-0 w-screen"
      />
      {/* NAVBAR */}
      <div className="flex justify-between flex-row h-24 items-center">
        <h1>linkd.</h1>
        <Link href = "/" className="bg-gray-200 p-4 rounded-full">Sign In</Link>
      </div>
      {/* CONTENT */}
      <div className="flex justify-between flex-row">
        <div>
          Hello1
        </div>

        <div>
          Hello2
        </div>
      </div>
      
      
    </main>
  );
}

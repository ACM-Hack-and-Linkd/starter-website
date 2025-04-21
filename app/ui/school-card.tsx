import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx'
import { crimsonPro } from '@/app/ui/fonts';

interface SchoolCardProps {
  schoolName: string;
  schoolImage: string;
  url: string;
  blurred?: boolean;
}

export default function SchoolCard({ schoolName, schoolImage, url, blurred }: SchoolCardProps) {
  return (
    <Link href={url} className="relative rounded-xl border border-brown/20 p-1 w-52 h-[120px] shadow-[1px_4px_3px_0px_rgba(0,0,0,0.1)]" target="_blank">
      <div className="flex flex-row justify-between px-2">
        <h6 className={`${crimsonPro.className} antialiased text-lg`}>{schoolName}</h6>
        <Image
          src="/arrow.svg"
          width={12}
          height={12}
          alt="arrow"
        />
      </div>
      <Image
        src={`/${schoolImage}.svg`}
        width={196}
        height={86}
        alt={schoolName}
        className={clsx("absolute bottom-1 left-1/2 translate-x-[-50%] rounded-lg", {"blur-lg": blurred})}
      />
    </Link>
  );
};


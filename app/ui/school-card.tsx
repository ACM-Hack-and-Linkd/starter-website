import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx'

interface SchoolCardProps {
    schoolName: string;
    schoolImage: string;
    blurred?: boolean;
}

export default function SchoolCard({ schoolName, schoolImage, blurred }: SchoolCardProps) {
    return (
        <main className="rounded-xl border-2 border-brown/20 p-1 w-60 shadow-[1px_4px_3px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row justify-between px-2">
                <h6 className="">{schoolName}</h6>
                <Image
                    src="/arrow.svg"
                    width={12}
                    height={12}
                    alt="arrow"
                    className=""
                />
            </div>
            <Image
                src={`/${schoolImage}.svg`}
                width={196}
                height={86}
                alt={schoolName}
                className={clsx("rounded-lg w-full", {"blur-xl": blurred})}
            />
        </main>
    );
};


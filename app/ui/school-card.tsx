import Link from 'next/link';
import Image from 'next/image'

interface SchoolCardProps {
    schoolName: string;
    schoolImage: string;
}

export default function SchoolCard({ schoolName, schoolImage }: SchoolCardProps) {
    return (
        <main className="rounded-xl border-2 p-1 w-1/2">
            <h6>{schoolName}</h6>
            <Image
                src={`/${schoolImage}.svg`}
                width={196}
                height={86}
                alt={schoolName}
                className="rounded-xl"
            />
        </main>
    );
};


import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';
export default function PhotoFeedPage() {
    return (
        <main>
            <div className="p-4 text-center">
                <h1 className="text-2xl font-bold">Photo Feed</h1>
                <p className="text-slate-300">This is the photo feed page.</p>
            </div>
            <div className="grid grid-cols-4 gap-x-5 gap-y-8 mt-20">
                {wonders.map((wonder) => (
                    <Link key={wonder.id} href={`/photo-feed/${wonder.id}`}>
                        <Image 
                        alt={wonder.name}
                        src={wonder.src}
                        className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-full h-auto aspect-square'
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
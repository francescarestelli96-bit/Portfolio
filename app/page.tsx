'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col justify-center px-[8%]">
      <div className="space-y-4">
        <p className="text-gray-500 tracking-[0.4em] text-xs uppercase">
          Fullstack Developer & Biker
        </p>
        
        <h1 className="text-6xl md:text-9xl font-extrabold uppercase leading-none">
          Francesca<br />
          <span className="text-indigo-500">
            Restelli.
          </span>
        </h1>

        <div className="flex gap-8 pt-8">
          <Link href="/works" className="text-white border-b-2 border-white pb-1">
            Works
          </Link>
          <a 
            href="https://www.instagram.com/francescarestelli_webiker/" 
            target="_blank" 
            className="text-red-500 font-bold"
          >
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
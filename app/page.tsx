'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#f8fafc] pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blocco Grande: Intro */}
        <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Available for projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 tracking-tight text-slate-800">
              Day & Night<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Web Dev & Biker.
              </span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-md">
            Costruisco esperienze digitali solide di giorno, esploro l'asfalto sulla mia Monster di notte.
          </p>
        </div>

        {/* Blocco: Info */}
        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-emerald-900">Francesca Restelli</h3>
          <p className="text-emerald-700/70">Based in Italy</p>
          <div className="mt-4 flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
             <span className="text-sm font-medium text-emerald-800">Online now</span>
          </div>
        </div>

        {/* Blocco: Works */}
        <Link href="/works" className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex flex-col justify-between hover:scale-[1.02] transition-transform group">
          <h4 className="text-slate-400 uppercase text-xs tracking-widest font-bold">Portfolio</h4>
          <h3 className="text-3xl font-bold italic">Selected Works →</h3>
        </Link>

        {/* Blocco: Experience */}
        <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 flex flex-col justify-center">
          <h4 className="text-blue-900/40 uppercase text-xs tracking-widest font-bold mb-2">Background</h4>
          <p className="text-blue-900 text-xl font-medium leading-tight">
            6 anni nell'HR mi hanno insegnato che dietro ogni riga di codice c'è una persona.
          </p>
        </div>

        {/* Blocco: Social */}
        <a href="https://instagram.com" target="_blank" className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex items-center justify-between group hover:border-emerald-300 transition-all">
          <div>
            <h4 className="text-slate-800 text-2xl font-bold">The Ride</h4>
            <p className="text-slate-500">Ducati Monster Life</p>
          </div>
          <div className="text-4xl group-hover:rotate-12 transition-transform">🏍️</div>
        </a>

      </div>
    </main>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#f8fafc] pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blocco Grande: Intro */}
        <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col justify-between min-h-[400px]">
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
          <p className="text-slate-500 text-lg max-w-md mt-4 font-medium italic">
            "Costruisco esperienze digitali solide di giorno, esploro l'asfalto sulla mia Monster di notte."
          </p>
        </div>

        {/* Blocco Small: Francesca */}
        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-200 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-emerald-900 leading-none tracking-tighter">Francesca Restelli</h3>
          <p className="text-emerald-700/70 mt-2 font-medium">Based in Italy</p>
          <div className="mt-4 flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
             <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Online now</span>
          </div>
        </div>

        {/* Altri blocchi qui... */}
      </div>
    </main>
  );
}
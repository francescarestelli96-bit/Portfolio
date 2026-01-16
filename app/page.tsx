'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#f8fafc] pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blocco Grande: Intro (Non cliccabile, o cliccabile verso About) */}
        <Link href="/about" className="md:col-span-2 bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[400px] hover:shadow-md transition-all group">
          <div>
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Available for projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
              Day & Night<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Web Dev & Biker.
              </span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-md">
            Costruisco esperienze digitali solide di giorno, esploro l'asfalto sulla mia Monster di notte. <span className="text-blue-500 font-bold ml-2">Scopri di più →</span>
          </p>
        </Link>

        {/* Blocco Small: About / Localizzazione */}
        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-emerald-900">Francesca Restelli</h3>
          <p className="text-emerald-700/70 text-sm">Based in Italy, riding worldwide.</p>
          <div className="mt-4 flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
             <span className="text-sm font-medium text-emerald-800">Online now</span>
          </div>
        </div>

        {/* Blocco: Selected Works (CLICCABILE) */}
        <Link href="/works" className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden relative group">
          <div className="relative z-10">
            <h4 className="text-slate-400 uppercase text-xs tracking-widest font-bold mb-4">Portfolio</h4>
            <h3 className="text-3xl font-bold italic">Selected<br/>Works</h3>
          </div>
          <div className="text-right relative z-10">
            <span className="text-4xl group-hover:translate-x-2 transition-transform inline-block">→</span>
          </div>
          {/* Effetto decorativo sullo sfondo */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        </Link>

        {/* Blocco: Experience (HR Background) */}
        <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col justify-center">
          <h4 className="text-blue-900/40 uppercase text-xs tracking-widest font-bold mb-2">Background</h4>
          <p className="text-blue-900 text-xl font-medium leading-tight">
            6 anni nell'HR mi hanno insegnato che dietro ogni riga di codice c'è una persona.
          </p>
        </div>

        {/* Blocco: Social/Monster (CLICCABILE) */}
        <a 
          href="https://www.instagram.com/francescarestelli_webiker/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-emerald-300 hover:shadow-sm transition-all"
        >
          <div>
            <h4 className="text-slate-800 text-2xl font-bold">The Ride</h4>
            <p className="text-slate-500">Ducati Monster Life</p>
          </div>
          <div className="text-4xl group-hover:rotate-12 transition-transform">🏍️</div>
        </a>

        {/* Blocco: Contact (CLICCABILE) */}
        <Link href="/contact" className="bg-gradient-to-br from-emerald-400 to-blue-400 p-8 rounded-[2rem] text-white flex flex-col justify-center items-center text-center hover:brightness-110 transition-all group">
            <h4 className="uppercase text-xs font-bold tracking-[0.2em] mb-2">Ready to start?</h4>
            <span className="text-3xl font-bold">Let's Talk</span>
            <div className="mt-4 bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm group-hover:bg-white/30 transition-all">
                Manda una mail
            </div>
        </Link>

      </div>

      {/* Footer minimal */}
      <footer className="max-w-7xl mx-auto mt-12 flex justify-between items-center px-4 text-slate-400 text-sm pb-12">
        <p>© 2026 Francesca Restelli</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-blue-500 transition">Privacy</Link>
          <a href="https://www.linkedin.com" className="hover:text-blue-500 transition">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
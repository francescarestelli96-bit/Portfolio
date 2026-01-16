'use client';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#f8fafc]">
      {/* Header / Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blocco Grande: Intro */}
        <div className="md:col-span-2 bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[400px]">
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

        {/* Blocco Small: Foto o Call to Action */}
        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-emerald-900">Francesca Restelli</h3>
          <p className="text-emerald-700/70">Based in Italy</p>
          <div className="mt-4 flex gap-2">
             <div className="w-8 h-8 rounded-full bg-emerald-200 animate-pulse"></div>
             <span className="text-sm font-medium text-emerald-800">Online now</span>
          </div>
        </div>

        {/* Blocco: Skills / Tech */}
        <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col justify-center">
          <h4 className="text-slate-400 uppercase text-xs tracking-widest font-bold mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node'].map((tech) => (
              <span key={tech} className="bg-slate-800 px-3 py-1 rounded-lg text-sm border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Blocco: Experience (Il tuo background HR) */}
        <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col justify-center">
          <h4 className="text-blue-900/40 uppercase text-xs tracking-widest font-bold mb-2">Background</h4>
          <p className="text-blue-900 text-xl font-medium leading-tight">
            6 anni nell'HR mi hanno insegnato che dietro ogni riga di codice c'è una persona.
          </p>
        </div>

        {/* Blocco: Ride Soul */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-emerald-300 transition-all">
          <div>
            <h4 className="text-slate-800 text-2xl font-bold">The Ride</h4>
            <p className="text-slate-500">Ducati Monster Life</p>
          </div>
          <div className="text-3xl group-hover:rotate-12 transition-transform">🏍️</div>
        </div>

      </div>

      {/* Footer minimal */}
      <footer className="max-w-7xl mx-auto mt-12 flex justify-between items-center px-4 text-slate-400 text-sm">
        <p>© 2026 Francesca Restelli</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
          <a href="#" className="hover:text-emerald-500 transition">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
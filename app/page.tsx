export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center px-[8%] overflow-hidden">
      {/* Cerchio di luce soffusa sullo sfondo */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6c5ce7]/20 rounded-full blur-[120px]" />
      
      <div className="relative z-10 space-y-6">
        <p className="text-gray-500 tracking-[0.4em] text-xs uppercase">
          Fullstack Developer & Monster Rider
        </p>
        
        <h1 className="text-7xl md:text-[10rem] font-syne leading-[0.85] uppercase">
          Ride<br />
          <span className="bg-gradient-to-r from-[#6c5ce7] to-[#ff4757] bg-clip-text text-transparent">
            Code.
          </span>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 pt-10 items-start md:items-center">
          <a href="/works" className="group text-white text-lg font-bold flex items-center gap-2">
            Selected Works <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <a 
            href="https://www.instagram.com/francescarestelli_webiker/" 
            target="_blank" 
            className="text-[#ff4757] font-bold tracking-widest text-sm border-2 border-[#ff4757] px-6 py-2 hover:bg-[#ff4757] hover:text-white transition-all"
          >
            @francescarestelli_webiker
          </a>
        </div>
      </div>
    </main>
  )
}
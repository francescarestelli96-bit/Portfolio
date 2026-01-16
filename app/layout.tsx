import './globals.css'
import { Inter, Syne } from 'next/font/google'

// Carichiamo i font ufficiali di Google per un look pro
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata = {
  title: 'Francesca Restelli | Web Dev & Biker',
  description: 'Fullstack Developer con background HR e passione per le due ruote.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {/* Navbar Minimal e Fluttuante */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/50 px-6 py-3 rounded-full shadow-sm flex justify-between items-center">
            <span className="font-syne font-extrabold text-slate-800 tracking-tighter">FR.</span>
            <div className="flex gap-6 text-xs uppercase tracking-widest font-bold text-slate-500">
              <a href="/" className="hover:text-blue-500 transition">Home</a>
              <a href="/works" className="hover:text-blue-500 transition">Works</a>
              <a href="/about" className="hover:text-blue-500 transition">About</a>
              <a href="/contact" className="hover:text-emerald-500 transition underline decoration-2 underline-offset-4">Hire me</a>
            </div>
          </div>
        </nav>

        {/* Qui viene iniettato il contenuto di page.tsx */}
        {children}
      </body>
    </html>
  )
}
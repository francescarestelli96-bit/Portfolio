import './globals.css'
import { Syne, Inter } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['800'], variable: '--font-syne' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Francesca Restelli | Code & Ride',
  description: 'Fullstack Developer & Bikerfluencer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-[#050505] text-white font-inter">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8 backdrop-blur-md border-b border-white/5">
          <div className="font-syne font-extrabold text-xl tracking-tighter">FR.DEV</div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-gray-400">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/works" className="hover:text-white transition">Works</a>
            <a href="/about" className="hover:text-white transition">About</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
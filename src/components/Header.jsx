import { Rocket, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-[#0f1420]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 flex items-center justify-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight bg-gradient-to-r from-[#9b87f5] to-[#3b82f6] bg-clip-text text-transparent">GammaWeb</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#top">Home</a>
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 hover:text-white transition">
              Diensten <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="absolute left-0 mt-2 w-60 rounded-xl border border-blue-500/30 bg-[#0b1022] shadow-lg">
                <a href="#diensten" className="block px-4 py-2 text-slate-300 hover:bg-blue-500/10 hover:text-white">Website Ontwikkeling</a>
                <div className="px-4 py-2 text-slate-500 select-none">CRM Systemen — binnenkort</div>
                <div className="px-4 py-2 text-slate-500 select-none">SEO & Lead Generation — binnenkort</div>
                <div className="px-4 py-2 text-slate-500 select-none">Lead Generation — binnenkort</div>
              </div>
            )}
          </div>
          <a className="hover:text-white transition" href="#over">Over Ons</a>
          <a className="hover:text-white transition" href="#werk">Ons Werk</a>
          <a className="hover:text-white transition" href="#prijzen">Prijzen</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Switch to English" className="px-3 py-1.5 text-sm font-medium text-blue-200 hover:text-white border border-blue-500/40 rounded-lg">EN</button>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-[#8b5cf6] text-white text-sm font-medium hover:brightness-110 shadow-sm">Vrijblijvend gesprek</a>
        </div>
      </div>
    </header>
  )
}

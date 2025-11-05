import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 flex items-center justify-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">Vibe Coding</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900 transition" href="#features">Features</a>
          <a className="hover:text-slate-900 transition" href="#showcase">Showcase</a>
          <a className="hover:text-slate-900 transition" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-sm">Get Started</button>
        </div>
      </div>
    </header>
  )
}

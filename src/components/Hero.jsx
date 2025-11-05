import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0f1420]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-300/90 bg-indigo-500/10 ring-1 ring-indigo-500/30 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              GammaWeb • Innovatieve weboplossingen
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#9b87f5] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">GammaWeb</span>
              <span className="block text-white">Bouw. Versnel. Groei.</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-xl">
              Wij ontwikkelen moderne websites en webapps met focus op snelheid, kwaliteit en resultaat. Betaalbaar, transparant en schaalbaar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#diensten" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#8b5cf6] text-white font-medium shadow hover:brightness-110">
                Bekijk Onze Diensten
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-blue-500/60 text-blue-200 hover:bg-blue-500/10 font-medium">
                Contact Opnemen
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-indigo-500/30 bg-[#0b1022] shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/5 to-cyan-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

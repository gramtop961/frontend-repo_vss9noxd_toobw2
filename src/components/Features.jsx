import { Rocket, Shield, Star } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Backend-first workflow',
    desc: 'Define APIs and data models first, then wire up the UI with confidence.'
  },
  {
    icon: Shield,
    title: 'Safe sandbox',
    desc: 'Run servers in an isolated environment with automatic previews.'
  },
  {
    icon: Star,
    title: 'Great defaults',
    desc: 'Vite + React, Tailwind, and FastAPI — ready out of the box.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need to ship</h2>
          <p className="mt-3 text-slate-600">Clean building blocks, sensible conventions, and a helpful assistant to guide you.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

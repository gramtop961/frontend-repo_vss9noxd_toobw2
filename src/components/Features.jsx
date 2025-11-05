import { Rocket, Shield, Star } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Custom Websites',
    desc: 'Moderne, snelle en responsive websites op maat.'
  },
  {
    icon: Shield,
    title: 'Veilig & Betrouwbaar',
    desc: 'Beveiliging, onderhoud en performance-optimalisatie.'
  },
  {
    icon: Star,
    title: 'SEO & Groei',
    desc: 'Zoekmachine-optimalisatie en lead generation strategie.'
  }
]

export default function Features() {
  return (
    <section id="diensten" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#3b82f6] bg-clip-text text-transparent">Onze Diensten</span>
          </h2>
          <p className="mt-3 text-slate-300">Krachtige oplossingen voor websites, webshops en webapps.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-blue-500/30 bg-[#0b1022] p-6 shadow-[0_0_0_1px_rgba(59,130,246,0.15)] hover:shadow-lg hover:shadow-blue-500/10 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

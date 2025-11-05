import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '€699',
    tagline: 'Perfect voor kleine bedrijven en starters',
    features: [
      '1-3 pagina\'s',
      'Responsive design',
      'Snelle laadtijden',
      'Basis SEO',
      'Contactformulier',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '€1299',
    tagline: 'Voor groeiende bedrijven die meer nodig hebben',
    features: [
      'Tot 8 pagina\'s',
      'Premium design & animaties',
      'Uitgebreide SEO & analytics',
      'Blog of eenvoudige webshop',
      '1 maand support inbegrepen',
    ],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Op maat',
    tagline: 'Complexe webapps en maatwerk integraties',
    features: [
      'Maatwerk functionaliteit',
      'Koppelingen (CRM, betalingen, etc.)',
      'Performance & beveiliging op schaal',
      'Contentbeheer (CMS) of dashboard',
      'Doorlopende support & SLA',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="prijzen" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#3b82f6] bg-clip-text text-transparent">Prijzen</span>
          </h2>
          <p className="mt-3 text-slate-300">Transparante pakketten voor elk niveau. Eénmalige bouwkosten, met optionele hosting en onderhoud.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 bg-[#0b1022] shadow-[0_0_0_1px_rgba(99,102,241,0.15)] ${
                plan.highlight ? 'border-indigo-500/60 ring-1 ring-indigo-400/40' : 'border-blue-500/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-4 px-2 py-1 text-xs font-semibold rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow">
                  Populair
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-slate-400">{plan.tagline}</p>
              <div className="mt-6">
                <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                {plan.price !== 'Op maat' && <span className="text-slate-400"> eenmalig</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium shadow ${
                  plan.highlight
                    ? 'bg-[#8b5cf6] text-white hover:brightness-110'
                    : 'border border-blue-500/40 text-blue-200 hover:bg-blue-500/10'
                }`}
              >
                Start met {plan.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Hosting & onderhoud vanaf €25 p/m. Alle prijzen excl. btw.
        </p>
      </div>
    </section>
  )
}

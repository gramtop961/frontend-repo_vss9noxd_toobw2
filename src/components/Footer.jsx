export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1022]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-sm text-slate-300">
        <div>
          <h3 className="text-white font-semibold">JaySolutions</h3>
          <p className="mt-2 text-slate-400">Betaalbare, moderne websites en webapps voor groeiambitieuze bedrijven.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Snelkoppelingen</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#top" className="hover:text-white">Home</a></li>
            <li><a href="#diensten" className="hover:text-white">Diensten</a></li>
            <li><a href="#over" className="hover:text-white">Over Ons</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Contact</h4>
          <ul className="mt-2 space-y-2">
            <li>info@jaysolutions.nl</li>
            <li>+31 (0)20 123 4567</li>
            <li>Technologielaan 123, Amsterdam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} JaySolutions. Alle rechten voorbehouden. • KVK: 95151974</p>
          <a href="#" className="hover:text-white">Edit with Lovable</a>
        </div>
      </div>
    </footer>
  )
}

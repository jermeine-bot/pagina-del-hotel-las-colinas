import Reveal from './Reveal.jsx';

const IMG =
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85';

export default function Dining() {
  return (
    <section id="gastronomia" className="py-20 lg:py-28 bg-coral relative overflow-hidden">
      <div className="absolute -bottom-10 -right-10 text-[14rem] leading-none opacity-20"> tacos? no, 🦐</div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sun rotate-[-3deg]" />
            <img
              src={IMG}
              alt="Plato caribeño"
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] border-4 border-cream"
            />
            <div className="absolute top-6 -left-6 bg-cream text-ink rounded-2xl px-5 py-3 shadow-xl rotate-[4deg] font-extrabold">
              <p className="font-display text-xl">Menú degustación</p>
              <p className="text-xs">7 tiempos · maridaje 🍷</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-block px-3 py-1 rounded-full bg-cream text-coral text-xs font-extrabold tracking-widest uppercase">
            Gastronomía
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-4 leading-[0.95]">
            El Caribe en cada <span className="text-sun italic">bocado</span>. 🍽️
          </h2>
          <p className="mt-6 text-cream/90 text-lg font-medium leading-relaxed">
            Tres restaurantes, un mismo compromiso: ingredientes del mar y la tierra,
            recetas que honran la tradición caribeña con mucha alegría. 🎊
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { n: '🌴 La Palma', d: 'Cocina de autor frente al mar. Menú degustación de 7 tiempos.' },
              { n: '🎣 El Muelle', d: 'Mariscos frescos y pescados del día, a la parrilla.' },
              { n: '🍹 Bruma', d: 'Bar de tapas y cócteles con rones añejos del Caribe.' },
            ].map((r) => (
              <li key={r.n} className="flex gap-4 bg-cream/15 backdrop-blur rounded-2xl p-4 hover:bg-cream/25 transition-colors">
                <span className="font-display text-xl text-sun w-32 shrink-0">{r.n}</span>
                <span className="text-cream/90 font-medium leading-relaxed">{r.d}</span>
              </li>
            ))}
          </ul>

          <a
            href="#reservar"
            className="inline-block mt-8 px-7 py-3.5 rounded-full bg-sun text-ink font-extrabold hover:bg-cream transition-colors shadow-lg"
          >
            Reservar mesa 🍴
          </a>
        </Reveal>
      </div>
    </section>
  );
}

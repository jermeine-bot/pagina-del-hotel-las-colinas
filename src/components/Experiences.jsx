import Reveal from './Reveal.jsx';

const EXP = [
  { e: '⛵', title: 'Sunset Cruise', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', desc: 'Navega al atardecer con champagne y música en vivo.', c: 'from-turq to-leaf' },
  { e: '🐠', title: 'Snorkel en el arrecife', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85', desc: 'Explora el arrecife coralino con guías certificados.', c: 'from-coral to-sun' },
  { e: '🧘', title: 'Yoga al amanecer', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85', desc: 'Sesiones frente al mar para empezar el día en calma.', c: 'from-leaf to-turq' },
  { e: '🕯️', title: 'Cena privada en la playa', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85', desc: 'Mesa para dos bajo las estrellas, menú degustación.', c: 'from-sun to-coral' },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="py-20 lg:py-28 bg-turq relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-[12rem] leading-none">🌊</div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-cream text-turq text-xs font-extrabold tracking-widest uppercase">
              Experiencias
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-4 leading-[0.95]">
              Momentos que no <span className="text-sun italic">se olvidan</span>. 🤩
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-cream/90 max-w-md font-medium text-lg">
              Diseñamos cada día para que tengas historias que contar. El concierge
              arma tu itinerario a medida. 🗺️
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXP.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <article className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border-4 border-cream shadow-xl hover:-translate-y-2 transition-transform">
                <img
                  src={e.img}
                  alt={e.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${e.c} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-4xl">{e.e}</div>
                <div className="absolute bottom-0 p-5 text-cream">
                  <h3 className="font-display text-2xl leading-tight">{e.title}</h3>
                  <p className="mt-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {e.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

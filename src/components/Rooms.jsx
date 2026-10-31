import { ArrowRight, Maximize2, Users, BedDouble, Wind, Fan } from 'lucide-react';
import Reveal from './Reveal.jsx';

const ROOMS = [
  {
    name: 'Habitación Doble',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
    size: 'Doble',
    guests: '2 personas',
    desc: 'Cama doble con opción de aire acondicionado o abanico. Baño privado.',
    tag: '🛏️ Doble',
    c: 'bg-turq',
    options: 'Aire acondicionado o abanico',
  },
  {
    name: 'Habitación Matrimonial',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    size: 'Matrimonial',
    guests: '2 personas',
    desc: 'Cama matrimonial. Versión básica (abanico) o con aire acondicionado.',
    tag: '💑 Matrimonial',
    c: 'bg-coral',
    options: 'Básica (abanico) o con aire',
  },
  {
    name: 'Habitación Triple',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    size: 'Triple',
    guests: '3 personas',
    desc: 'Tres camas individuales con abanico. Ideal para grupos y familias.',
    tag: '👨‍👩‍👦 Triple',
    c: 'bg-leaf',
    options: 'Con abanico',
  },
];

export default function Rooms() {
  return (
    <section id="habitaciones" className="py-20 lg:py-28 bg-sky relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-leaf text-cream text-xs font-extrabold tracking-widest uppercase">
            Alojamiento
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mt-4 leading-[0.95]">
            16 habitaciones, <span className="text-coral italic">puras opciones</span>.
          </h2>
          <p className="mt-5 text-muted text-lg font-medium leading-relaxed">
            Elige el cuarto que mejor se ajuste a tu viaje. Todas con baño privado
            y WiFi incluido. 🛏️
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ROOMS.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <article className="group bg-cream rounded-3xl overflow-hidden shadow-xl tilt border-4 border-cream relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${r.c} text-cream text-xs font-extrabold shadow-lg burst`}>
                    {r.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-ink">{r.name}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed font-medium">{r.desc}</p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted">
                    <Users size={13} /> {r.guests}
                    <span className="mx-1">·</span>
                    <span className="flex items-center gap-1">
                      {r.options.includes('aire') ? <Wind size={13} /> : <Fan size={13} />}
                      {r.options}
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-muted font-bold">Tarifa</span>
                      <p className="font-display text-2xl text-ink leading-none">
                        Consultar
                      </p>
                    </div>
                    <a
                      href="#reservar"
                      className={`flex items-center gap-1.5 text-sm font-extrabold ${r.c.replace('bg-','text-')} hover:gap-3 transition-all`}
                    >
                      Consultar <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-muted font-medium">
            Capacidad total: <span className="font-extrabold text-ink">16 habitaciones</span>.
            Reserva con anticipación, especialmente en temporada alta. 📅
          </p>
        </Reveal>
      </div>
    </section>
  );
}

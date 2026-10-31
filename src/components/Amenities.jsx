import Reveal from './Reveal.jsx';

const ITEMS = [
  { e: '📶', label: 'WiFi gratis', desc: 'En todo el hotel, sin costo', c: 'bg-turq' },
  { e: '🍽️', label: 'Pedidos ya', desc: 'Comida a la habitación', c: 'bg-coral' },
  { e: '🕐', label: 'Abierto 24/7', desc: 'Recepción todo el día', c: 'bg-sun' },
  { e: '🛎️', label: 'Recepción', desc: 'Atención permanente', c: 'bg-leaf' },
  { e: '🚿', label: 'Baño privado', desc: 'En cada habitación', c: 'bg-turq' },
  { e: '🛏️', label: '16 habitaciones', desc: 'Doble, matrimonial y triple', c: 'bg-coral' },
];

export default function Amenities() {
  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-leaf text-cream text-xs font-extrabold tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mt-4 leading-[0.95]">
            Lo que <span className="text-turq italic">sí</span> tenemos. 🙌
          </h2>
          <p className="mt-4 text-muted font-medium text-lg">
            Servicios reales para una estadía cómoda y sin complicaciones.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={(i % 6) * 60}>
              <div className={`${it.c} text-cream rounded-3xl p-5 shadow-lg tilt h-full text-center relative overflow-hidden`}>
                <div className="text-4xl mb-2">{it.e}</div>
                <h3 className="font-display text-lg leading-tight">{it.label}</h3>
                <p className="mt-1 text-[11px] font-bold opacity-90">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

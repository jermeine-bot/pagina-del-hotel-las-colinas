import Reveal from './Reveal.jsx';

const STATS = [
  { n: '16', l: 'Habitaciones', c: 'bg-turq' },
  { n: '24/7', l: 'Abierto', c: 'bg-coral' },
  { n: 'WiFi', l: 'Gratis', c: 'bg-sun' },
  { n: 'Pedidos', l: 'Ya', c: 'bg-leaf' },
];

const IMG =
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-turq/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-coral/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-turq via-sun to-coral rotate-3" />
            <img
              src={IMG}
              alt="Vista tropical del hotel"
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] border-4 border-cream"
            />
            <div className="absolute -bottom-5 -right-5 bg-sun text-ink rounded-2xl px-5 py-3 shadow-xl rotate-[-4deg] font-extrabold">
              <p className="font-display text-3xl leading-none">100%</p>
              <p className="text-[10px] tracking-widest uppercase">Vista al mar</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <span className="inline-block px-3 py-1 rounded-full bg-coral text-cream text-xs font-extrabold tracking-widest uppercase">
            Nuestra historia
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mt-4 leading-[0.95]">
            Nacimos del <span className="grad-text italic">sol</span>,<br />
            crecimos con el <span className="grad-text italic">mar</span>.
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl font-medium">
            Las Clinas es un hotel cómodo y accesible en Bilwi (Puerto Cabezas).
            Ofrecemos habitaciones dobles, matrimoniales y triples, con aire acondicionado
            o abanico, baño privado, WiFi gratis y servicio de pedidos a la habitación.
            Abierto las 24 horas para recibirte cuando llegues.
          </p>
          <p className="mt-4 text-muted text-lg leading-relaxed max-w-2xl font-medium">
            Un lugar sencillo, limpio y con la atención que mereces. 🌴
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.l} className={`${s.c} text-cream rounded-2xl p-4 shadow-lg tilt burst hover:shadow-2xl`}>
                <p className="font-display text-4xl leading-none">{s.n}</p>
                <p className="text-xs font-bold mt-2 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

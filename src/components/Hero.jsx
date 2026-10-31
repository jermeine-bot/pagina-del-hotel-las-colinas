import { ArrowDown, Sparkles, Star } from 'lucide-react';

const HERO_IMG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85';

const PARTICLES = ['🌴', '☀️', '🏝️', '🍹', '🐚', '🌺', '🦀', '🌊'];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Playa tropical del Hotel Las Clinas"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-turq/70 via-coral/40 to-sun/30 mix-blend-multiply grad-animate" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle text-3xl sm:text-5xl float"
          style={{
            top: `${10 + (i * 11) % 70}%`,
            left: `${5 + (i * 13) % 90}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${4 + (i % 3)}s`,
          }}
        >
          {p}
        </span>
      ))}

      <div className="absolute top-24 right-10 w-52 h-52 rounded-full bg-sun/40 blur-3xl float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-turq/40 blur-3xl float2" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 min-h-screen flex flex-col justify-center pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sun text-ink font-extrabold text-xs tracking-widest uppercase shadow-lg glow burst">
            <Star size={14} fill="currentColor" /> Hotel Tropical · Bilwi
          </div>

          <h1 className="mt-6 font-display text-cream text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight drop-shadow-2xl">
            ¡Hola, <span className="grad-text italic">sol</span>!
            <br />
            Hola, <span className="text-coral italic drop-shadow-[0_4px_0_#1d2d35]">mar</span>.
          </h1>

          <p className="mt-7 text-cream text-lg sm:text-2xl max-w-2xl leading-relaxed font-medium drop-shadow">
            Habitaciones cómodas, WiFi gratis y pedidos a la habitación.
            Abierto las 24 horas. <span className="text-sun font-extrabold">¡Bienvenido a Las Clinas!</span> 🌴
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reservar"
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-sun text-ink font-extrabold text-lg hover:bg-coral hover:text-cream transition-colors shadow-xl shadow-sun/40 hover:-translate-y-1 flex items-center gap-2 shimmer"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" /> Reservar mi viaje
            </a>
            <a
              href="#habitaciones"
              className="px-8 py-4 rounded-full bg-cream/20 backdrop-blur-md border-2 border-cream text-cream font-extrabold text-lg hover:bg-cream hover:text-ink transition-colors"
            >
              Ver habitaciones →
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 text-cream font-bold">
            {[
              ['🛏️', '16 habitaciones'],
              ['📶', 'WiFi gratis'],
              ['🕐', 'Abierto 24/7'],
              ['🍽️', 'Pedidos ya'],
            ].map(([e, t]) => (
              <div key={t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/15 backdrop-blur hover:bg-cream/30 transition-colors tilt">
                <span className="text-2xl">{e}</span> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream font-bold text-xs tracking-[0.3em] uppercase"
      >
        Baja
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}

import { Quote } from 'lucide-react';
import Reveal from './Reveal.jsx';

const T = [
  { q: 'Habitaciones limpias y cómodas, WiFi rápido y la atención muy amable. Llegamos de noche y nos recibieron sin problema. 🌴', name: 'María Fernanda L.', from: 'Managua', c: 'bg-turq' },
  { q: 'El servicio de pedidos a la habitación nos salvó después de un día largo. Todo llegó rápido y caliente. 🍽️', name: 'Carlos & Ana P.', from: 'Bilwi', c: 'bg-coral' },
  { q: 'Buen precio, buena ubicación y abierto las 24 horas. Ideal para viajeros. Volvería sin dudar. ☀️', name: 'James R.', from: 'Puerto Cabezas', c: 'bg-leaf' },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-sun relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-ink text-sun text-xs font-extrabold tracking-widest uppercase">
            Huéspedes
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mt-4 leading-[0.95]">
            Lo que dicen quienes <span className="text-coral italic">ya estuvieron</span>. 💬
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {T.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className={`${t.c} text-cream rounded-3xl p-7 h-full flex flex-col shadow-xl tilt relative overflow-hidden`}>
                <Quote size={32} className="text-sun" />
                <blockquote className="mt-4 font-display text-xl leading-snug flex-1">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t-2 border-cream/30">
                  <p className="font-extrabold">{t.name}</p>
                  <p className="text-xs font-bold opacity-80">{t.from}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

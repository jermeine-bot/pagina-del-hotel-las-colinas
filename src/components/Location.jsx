import { MapPin, Navigation, Phone } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-turq relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-5">
          <span className="inline-block px-3 py-1 rounded-full bg-cream text-turq text-xs font-extrabold tracking-widest uppercase">
            Ubicación
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-4 leading-[0.95]">
            Estamos en <span className="text-sun italic">Bilwi</span>. 📍
          </h2>
          <p className="mt-5 text-cream/90 text-lg font-medium leading-relaxed">
            Hotel Las Clinas se encuentra en Bilwi (Puerto Cabezas), en la Costa
            Caribe Norte de Nicaragua. Fácil de llegar, fácil de disfrutar. 🌴
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 bg-cream/15 backdrop-blur rounded-2xl p-4">
              <span className="w-11 h-11 rounded-2xl bg-sun text-ink flex items-center justify-center shadow-md">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-extrabold text-cream">Bilwi (Puerto Cabezas)</p>
                <p className="text-sm text-cream/80 font-medium">Costa Caribe Norte, Nicaragua</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-cream/15 backdrop-blur rounded-2xl p-4">
              <span className="w-11 h-11 rounded-2xl bg-coral text-cream flex items-center justify-center shadow-md">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-extrabold text-cream">+505 0000 0000</p>
                <p className="text-sm text-cream/80 font-medium">Llámanos para indicaciones</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=14.0333,-83.3833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sun text-ink font-extrabold hover:bg-cream transition-colors shadow-lg"
            >
              <Navigation size={18} /> Cómo llegar
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-sun rotate-2" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-cream shadow-2xl glow">
              <iframe
                title="Mapa Hotel Las Clinas Bilwi"
                src="https://www.google.com/maps?q=14.0333,-83.3833&hl=es&z=14&output=embed"
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

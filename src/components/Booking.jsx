import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Booking() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="reservar" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 text-8xl opacity-20">🌺</div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <span className="inline-block px-3 py-1 rounded-full bg-coral text-cream text-xs font-extrabold tracking-widest uppercase">
            Reservas
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mt-4 leading-[0.95]">
            Reserva tu <span className="text-turq italic">escape</span> tropical. ✈️
          </h2>
          <p className="mt-5 text-muted text-lg font-medium leading-relaxed">
            Cuéntanos tus fechas y número de huéspedes. Te respondemos en menos de
            24 horas con disponibilidad y tarifa final. 📩
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: <MapPin size={18} />, t: 'Bilwi (Puerto Cabezas)', s: 'Costa Caribe Norte, Nicaragua' },
              { icon: <Phone size={18} />, t: '+505 0000 0000', s: 'Lun–Dom · 24/7' },
              { icon: <Mail size={18} />, t: 'reservas@lasclinas.com', s: 'Respuesta en menos de 24 h' },
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-4 bg-sky rounded-2xl p-4">
                <span className="w-11 h-11 rounded-2xl bg-turq text-cream flex items-center justify-center shadow-md">
                  {x.icon}
                </span>
                <div>
                  <p className="font-extrabold text-ink">{x.t}</p>
                  <p className="text-sm text-muted font-medium">{x.s}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form
            onSubmit={submit}
            className="bg-sky rounded-3xl shadow-xl p-7 lg:p-9 grid sm:grid-cols-2 gap-4 border-4 border-cream"
          >
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-xs tracking-wide text-muted font-bold">Nombre completo</span>
              <input
                required
                type="text"
                placeholder="Tu nombre"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold">Correo</span>
              <input
                required
                type="email"
                placeholder="tu@email.com"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold">Teléfono</span>
              <input
                type="tel"
                placeholder="+00 0000 0000"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold flex items-center gap-1.5">
                <Calendar size={12} /> Llegada
              </span>
              <input
                required
                type="date"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold flex items-center gap-1.5">
                <Calendar size={12} /> Salida
              </span>
              <input
                required
                type="date"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold">Huéspedes</span>
              <select className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium">
                <option>1 huésped</option>
                <option>2 huéspedes</option>
                <option>3 huéspedes</option>
                <option>4 huéspedes</option>
                <option>5+ huéspedes</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs tracking-wide text-muted font-bold">Habitación</span>
              <select className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition font-medium">
                <option>Suite Deluxe Vista Mar</option>
                <option>Villa Jardín Tropical</option>
                <option>Bungalow Frente a Playa</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-xs tracking-wide text-muted font-bold">Mensaje (opcional)</span>
              <textarea
                rows={3}
                placeholder="Ocasión especial, solicitudes… 🎉"
                className="px-4 py-3 rounded-2xl border-2 border-cream bg-cream focus:border-turq focus:ring-4 focus:ring-turq/20 outline-none transition resize-none font-medium"
              />
            </label>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted font-medium">
                Al enviar, aceptas nuestra política de privacidad.
              </p>
              <button
                type="submit"
                className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-coral to-sun text-ink font-extrabold hover:scale-105 transition-transform shadow-lg shadow-coral/40 shimmer glow"
              >
                {sent ? '¡Enviado! Te contactamos pronto 🎉' : 'Solicitar reserva 🚀'}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

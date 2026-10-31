import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-turq to-leaf flex items-center justify-center text-cream font-display text-2xl shadow-lg rotate-[-6deg]">
              L
            </span>
            <span className="font-display text-2xl text-cream">Las Clinas</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70 font-medium">
            Hotel en Bilwi (Puerto Cabezas). Habitaciones cómodas, WiFi gratis,
            pedidos a la habitación y atención 24/7. 🌴☀️
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-2xl bg-cream/10 flex items-center justify-center hover:bg-sun hover:text-ink transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-sun font-extrabold">Explorar</h4>
          <ul className="mt-5 space-y-3 text-sm font-medium">
            {['Habitaciones 🛏️', 'Experiencias ⛵', 'Gastronomía 🍽️', 'Galería 📸', 'Spa 💆'].map((x) => (
              <li key={x}>
                <a href="#" className="hover:text-sun transition-colors">{x}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-sun font-extrabold">Información</h4>
          <ul className="mt-5 space-y-3 text-sm font-medium">
            {['Sobre nosotros', 'Sostenibilidad 🌱', 'Eventos y bodas 💍', 'Prensa', 'Trabaja con nosotros'].map((x) => (
              <li key={x}>
                <a href="#" className="hover:text-sun transition-colors">{x}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-sun font-extrabold">Newsletter</h4>
          <p className="mt-5 text-sm text-cream/70 font-medium">
            Ofertas exclusivas y noticias del resort. 🎁
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-l-2xl bg-cream/10 border-2 border-cream/20 text-cream placeholder:text-cream/40 outline-none focus:border-sun font-medium"
            />
            <button className="px-5 py-3 rounded-r-2xl bg-sun text-ink font-extrabold hover:bg-coral hover:text-cream transition-colors">
              OK
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50 font-medium">
          <p>© 2026 Hotel Las Clinas. Todos los derechos reservados. 🌴</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">Privacidad</a>
            <a href="#" className="hover:text-cream">Términos</a>
            <a href="#" className="hover:text-cream">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

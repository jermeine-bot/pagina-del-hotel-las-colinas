import { useEffect, useState } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

const links = [
  { href: '#habitaciones', label: 'Habitaciones', color: 'text-turq' },
  { href: '#experiencias', label: 'Experiencias', color: 'text-coral' },
  { href: '#gastronomia', label: 'Comida', color: 'text-leaf' },
  { href: '#galeria', label: 'Galería', color: 'text-sun' },
  { href: '#contacto', label: 'Contacto', color: 'text-turq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_4px_0_0_#ffd60a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-turq to-leaf flex items-center justify-center text-cream font-display text-2xl shadow-lg rotate-[-6deg] group-hover:rotate-0 transition-transform">
            L
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-2xl ${scrolled ? 'text-ink' : 'text-cream'}`}>
              Las Clinas
            </span>
            <span className={`text-[10px] tracking-[0.25em] uppercase font-bold ${scrolled ? 'text-coral' : 'text-sun'}`}>
              Hotel Tropical
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:bg-ink hover:text-cream ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+50500000000"
            className={`flex items-center gap-2 text-sm font-bold ${scrolled ? 'text-ink' : 'text-cream'}`}
          >
            <Phone size={16} /> +505 0000
          </a>
          <a
            href="#reservar"
            className="relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-sun to-coral text-ink text-sm font-extrabold hover:from-coral hover:to-sun hover:text-cream transition-all shadow-lg shadow-sun/40 flex items-center gap-1.5 shimmer glow"
          >
            <Sparkles size={15} /> Reservar
          </a>
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-ink' : 'text-cream'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t-4 border-sun">
          <div className="px-5 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink text-lg font-bold py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-full bg-sun text-ink text-center font-extrabold"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

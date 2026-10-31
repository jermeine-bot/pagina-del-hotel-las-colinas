import Reveal from './Reveal.jsx';

const IMGS = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85', span: 'lg:col-span-2 lg:row-span-2', c: 'border-turq' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85', span: '', c: 'border-coral' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85', span: '', c: 'border-sun' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85', span: 'lg:col-span-2', c: 'border-leaf' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85', span: '', c: 'border-turq' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-leaf relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-cream text-leaf text-xs font-extrabold tracking-widest uppercase">
              Galería
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mt-4 leading-[0.95]">
              Un vistazo a <span className="text-sun italic">Las Clinas</span>. 📸
            </h2>
          </div>
          <p className="text-cream/90 max-w-md font-medium text-lg">
            Playa, suites, gastronomía y atardeceres. Cada imagen es un motivo para venir. ✈️
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {IMGS.map((img, i) => (
            <Reveal key={i} delay={i * 80} className={img.span}>
              <div className={`relative w-full h-full rounded-3xl overflow-hidden group border-4 ${img.c} shadow-lg tilt`}>
                <img
                  src={img.src}
                  alt="Galería Las Clinas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

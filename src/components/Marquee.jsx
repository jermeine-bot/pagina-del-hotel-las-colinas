const words = [
  '🛏️ 16 habitaciones', '📶 WiFi gratis', '🕐 Abierto 24/7', '🍽️ Pedidos ya',
  '❄️ Aire acondicionado', '🌬️ Abanico', '🚿 Baño privado', '👨‍👩‍👦 Doble · Matrimonial · Triple',
  '📍 Bilwi, Puerto Cabezas', '🌴 Costa Caribe',
];

export default function Marquee() {
  const list = [...words, ...words];
  return (
    <div className="bg-sun py-4 overflow-hidden border-y-4 border-ink">
      <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
        {list.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-base font-extrabold tracking-wide text-ink uppercase">
            <span className="text-coral text-2xl">★</span>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

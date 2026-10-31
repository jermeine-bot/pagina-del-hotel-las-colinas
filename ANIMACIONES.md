# Notas: Animaciones de la landing "Hotel Las Clinas"

Archivo base: `hotel/las-clinas-landing/` (React + Vite + Tailwind v4).
CSS de animaciones: `src/index.css`. Lógica de scroll: `src/components/Reveal.jsx`.

---

## 1. Reveal al hacer scroll (entrada de secciones)

- **Clase:** `.reveal` / `.reveal.in`
- **Efecto:** elemento oculto (`opacity: 0`) desplazado 40px abajo, escalado a 0.96 y rotado -1deg. Al entrar en viewport pasa a `opacity: 1` y `transform: none` (posición normal).
- **Timing:** `0.9s` con `cubic-bezier(.2,.8,.2,1)`.
- **Disparo:** `IntersectionObserver` en `Reveal.jsx`, umbral 15% (`threshold: 0.15`), con margen inferior `-40px`. Se desobserva tras la primera entrada (no se repite).
- **Delay opcional:** prop `delay` (ms) con `setTimeout` antes de añadir la clase `.in`. Permite escalonado (stagger).
- **Uso:** todas las secciones (About, Rooms, Amenities, Experiences, Dining, Testimonials, Gallery, Booking, Location) envuelven bloques en `<Reveal delay={...}>`. Ej. tarjetas de habitaciones con `delay={i * 120}` ms.

## 2. Marquee (cinta continua horizontal) — movimiento simultáneo infinito

- **Clase:** `.marquee-track`
- **Keyframe:** `marquee`: `translateX(0)` → `translateX(-50%)`.
- **Timing:** `20s linear infinite`.
- **Truco:** la lista de palabras se duplica (`[...words, ...words]`) para que el desplazamiento del 50% coincida visualmente y el loop sea sin saltos.
- **Uso:** `Marquee.jsx`, banda amarilla bajo el hero con emojis y datos del hotel.

## 3. Float / Float2 (flotación suave) — movimiento simultáneo independiente

- **`.float`:** `translateY(0) rotate(0)` ↔ `translateY(-18px) rotate(3deg)`, `4.5s ease-in-out infinite`.
- **`.float2`:** `translateY(0) rotate(0)` ↔ `translateY(-12px) rotate(-4deg)`, `5.5s ease-in-out infinite`.
- **Uso en Hero:** 8 emojis partícula (🌴☀️🏝️🍹🐚🌺🦀🌊) con clase `.float`, pero CADA UNO con:
  - `animationDelay: i * 0.6s`
  - `animationDuration: 4 + (i % 3)s`
  → por eso se mueven **simultáneamente pero desfasados** (cada uno en su propio ritmo).
- También 2 manchas desenfocadas (blobs): sol `.float` y turquesa `.float2`, con duraciones distintas (4.5s vs 5.5s) → movimiento simultáneo desincronizado.
- **Esta es la sección que más te gustó:** el hero con partículas y blobs flotando a la vez en ritmos distintos.

## 4. Gradiente animado (fondo en movimiento)

- **Clase:** `.grad-animate`
- **Keyframe:** `gradshift`: `background-position 0% 50%` → `100% 50%` → `0% 50%`.
- **Timing:** `6s ease infinite`, `background-size: 200% 200%`.
- **Uso:** overlay del hero (`bg-gradient-to-br ... grad-animate`) → el gradiente de colores se desplaza continuamente.

## 5. Texto con gradiente animado

- **Clase:** `.grad-text`
- **Mismo keyframe** `gradshift`, pero `background-size: 300% 300%` y `5s ease infinite`.
- **Efecto:** texto transparente con gradiente de 4 colores (turquesa → coral → sol → hoja) que se mueve.
- **Uso:** palabra "sol" en el título hero, "sol"/"mar" en About.

## 6. Shimmer (brillo deslizante en botones)

- **Clase:** `.shimmer` (pseudo-elemento `::after`).
- **Keyframe:** `shimmer`: `translateX(-100%)` → `translateX(100%)`.
- **Timing:** `2.8s infinite`.
- **Efecto:** banda blanca semitransparente que cruza el botón de izquierda a derecha.
- **Uso:** botones "Reservar mi viaje", "Reservar" (navbar), "Reservar" (booking).

## 7. Glow (pulso de brillo)

- **Clase:** `.glow`
- **Keyframe:** `glow`: `box-shadow 0 0 0 0 rgba(255,214,10,.5)` → `0 0 0 18px rgba(255,214,10,0)`.
- **Timing:** `2.4s ease-in-out infinite`.
- **Efecto:** halo amarillo que se expande y desvanece (pulso).
- **Uso:** badge "Hotel Tropical · Bilwi" y botones de reserva, Location.

## 8. Burst (entrada de insignias)

- **Clase:** `.burst`
- **Keyframe:** `burst`: `scale(0) rotate(0) opacity(0)` → `scale(1.3) rotate(180deg) opacity(1)` → `scale(1) rotate(360deg) opacity(1)`.
- **Timing:** `1.2s cubic-bezier(.2,.8,.2,1) both`.
- **Efecto:** insignia aparece girando y rebotando (escala).
- **Uso:** badge del hero, chips de precio en Rooms, amenidades.

## 9. Tilt (inclinación 3D al pasar el mouse)

- **Clase:** `.tilt`
- **Efecto:** transición `0.4s`; en hover: `perspective(900px) rotateX(4deg) rotateY(-4deg) translateY(-6px)`.
- **Uso:** chips de datos del hero, tarjetas de stats en About, tarjetas de habitaciones, amenidades, testimonios, galería.

## 10. Bounce (flecha "Baja")

- **Clase Tailwind:** `animate-bounce`.
- **Uso:** flecha `ArrowDown` al final del hero que rebota verticalmente invitando a hacer scroll.

## 11. Spin-slow (definido pero no usado en componentes)

- **Clase:** `.spin-slow`: rotación completa en `22s linear infinite`.
- Disponible para usarse (no aparece actualmente en `src/`).

## 12. Smooth scroll

- `html { scroll-behavior: smooth; }` → navegación por anclas (#habitaciones, #reservar, etc.) con desplazamiento suave.

## 13. Wave dividers (separadores SVG)

- Componente `Wave.jsx`: SVG con curva Bézier (`M0,40 C240,100 480,0 720,40 C960,80 1200,0 1440,40`) que actúa como transición visual entre secciones. No es animado por CSS, pero se alterna `flip` y colores de relleno.

---

## Resumen: sección de movimiento simultáneo (Hero)

El hero concentra la mayor cantidad de animaciones corriendo a la vez:
- 8 emojis partícula con `.float` (cada uno con delay y duración distintos).
- 2 blobs desenfocados (`.float` 4.5s y `.float2` 5.5s).
- Overlay de gradiente `.grad-animate` (6s).
- Texto "sol" con `.grad-text` (5s).
- Badge con `.glow` (2.4s) + `.burst` (1.2s).
- Botón "Reservar mi viaje" con `.shimmer` (2.8s) y hover `-translate-y-1`.
- Flecha con `animate-bounce`.

Todos corren en paralelo con periodos distintos → sensación de vida/movimiento simultáneo pero no sincronizado.

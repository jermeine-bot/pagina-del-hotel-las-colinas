export default function Wave({ fill = '#fffaf2', flip = false, height = 80 }) {
  return (
    <div className="wave-divider w-full leading-none" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height }}>
        <path
          fill={fill}
          d="M0,40 C240,100 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
